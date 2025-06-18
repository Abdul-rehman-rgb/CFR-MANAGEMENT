/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FiDownload, FiRefreshCw, FiCalendar, FiPlus } from "react-icons/fi";
import { DateRangePicker } from "react-date-range";
import { Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import HeadingFour from "../../../components/ui/heading/HeadingFour";
import Export from "../../../components/ui/button/Export";
import ColorFull from "../../../components/ui/button/ColorFull";
import OutlineBtn from "../../../components/ui/button/OutLine";


type OrderManagementHeaderProps = {
  onExport?: () => void;
  onDateRangeChange?: (range: RangeKeyDict) => void;
  onRefresh?: () => void;
  onAddNewOrder?: () => void; // <-- add this
  showExport?: boolean;
  showDateRange?: boolean;
  showRefresh?: boolean;
  dateRange: Range;
  setDateRange: (range: any) => void;
  headerTitle: string
};

const OrderManagementHeader: React.FC<OrderManagementHeaderProps> = ({
  onExport,
  onRefresh,
  onAddNewOrder, // <-- destructure this
  showExport = true,
  showDateRange = true,
  showRefresh = true,
  dateRange,
  setDateRange,
  headerTitle
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="flex flex-row justify-between max-sm:flex-col sm:flex-col md:flex-row sm:justify-between sm:items-center">
        <HeadingFour text={headerTitle} />
      <div className="flex flex-col max-sm:flex-row sm:items-center md:flex-row md:flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
        {showExport && (
          <Export BtnName="Export" icon={FiDownload} onClick={onExport} />
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
                    setShowPicker(false);
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

        {onAddNewOrder && (
          <ColorFull
            text="Add New Order"
            icon={FiPlus}
            bgColor="bg-[#5D5FEF]"
            textColor="text-white"
            onClick={onAddNewOrder}
          />
        )}
      </div>
    </div>
  );
};

export default OrderManagementHeader;
