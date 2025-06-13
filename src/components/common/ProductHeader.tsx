/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  FiDownload,
  FiRefreshCw,
  FiCalendar,
} from "react-icons/fi";
import { DateRangePicker } from "react-date-range";
import { Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ColorFull from "../ui/button/ColorFull";
import OutlineBtn from "../ui/button/OutLine";
import Export from "../ui/button/Export";

type ProductHeaderProps = {
  onExport?: () => void;
  onDateRangeChange?: (range: RangeKeyDict) => void;
  onRefresh?: () => void;
  showExport?: boolean;
  showDateRange?: boolean;
  showRefresh?: boolean;
  showCustomize?: boolean;
  dateRange: Range;
  heading: string;
  setDateRange: (range: any) => void;
};

const ProductHeader: React.FC<ProductHeaderProps> = ({
  onRefresh,
  showExport = true,
  showDateRange = true,
  showRefresh = true,
  dateRange,
  setDateRange,
  heading
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="flex flex-row justify-between max-sm:flex-col sm:flex-col md:flex-row sm:justify-between sm:items-center ">
      <h2 className="text-[14px] font-medium text-[#5D5FEF]">{heading}</h2>

      <div className="flex flex-col max-sm:flex-row sm:items-center md:flex-row md:flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
        {showExport && (
          <Export
            BtnName="Export"
            icon={FiDownload}
            onClick={() => console.log("Export triggered")}
          />
        )}

        {showDateRange && (
          <div className="relative w-full sm:w-auto">
            <ColorFull
              onClick={() => setShowPicker((prev) => !prev)}
              text="Select Date Range"
              icon={FiCalendar}
            />

            {showPicker && (
              <div className="absolute right-0 z-50 mt-2 shadow-lg">
                <DateRangePicker
                  ranges={[dateRange]}
                  onChange={(item: RangeKeyDict) => {
                    setDateRange(item.selection);
                    setShowPicker(false); // Auto-close
                  }}
                  inputRanges={[]}
                />
              </div>
            )}
          </div>
        )}

        {showRefresh && (
          <OutlineBtn
            BtnName="Refresh"
            icon={FiRefreshCw}
            onClick={onRefresh}
            className="w-full sm:w-auto"
          />
        )}

      </div>
    </div>
  );
};

export default ProductHeader;
