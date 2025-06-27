/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ColorFull from "../ui/button/ColorFull";
import OutlineBtn from "../ui/button/OutLine";
import Export from "../ui/button/Export";
import HeadingFour from "../ui/heading/HeadingFour";
import { CustomisehIcon, ExportIcon, SolarCalendarIcon, SolarRefreshIcon } from "../../icons";

type DashboardHeaderProps = {
  onExport?: () => void;
  onDateRangeChange?: (range: RangeKeyDict) => void;
  onRefresh?: () => void;
  onCustomize?: () => void;
  showExport?: boolean;
  showDateRange?: boolean;
  showRefresh?: boolean;
  showCustomize?: boolean;
  dateRange: Range;
  setDateRange: (range: any) => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onRefresh,
  onCustomize,
  showExport = true,
  showDateRange = true,
  showRefresh = true,
  showCustomize = true,
  dateRange,
  setDateRange,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="flex flex-row max-sm:flex-col sm:flex-col md:flex-row sm:justify-between sm:items-center">
        <HeadingFour text="Dashboard" />


      <div className="flex flex-col max-sm:flex-row sm:items-center md:flex-row md:flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
        {showExport && (
          <Export
            BtnName="Export"
            icon={ExportIcon}
            onClick={() => console.log("Export triggered")}
          />
        )}

        {showDateRange && (
          <div className="relative w-full sm:w-auto">
            <ColorFull
              onClick={() => setShowPicker((prev) => !prev)}
              text="Select Date Range"
              icon={SolarCalendarIcon}

            />

            {showPicker && (
              <div className="absolute right-0 z-50 mt-2 shadow-lg dark:bg-[#000]">
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
            icon={SolarRefreshIcon}
            onClick={onRefresh}
            className="w-full sm:w-auto text-lg"
            
          />
        )}

        {showCustomize && (
          <ColorFull
            onClick={onCustomize}
            text="Customize Dashboard"
            icon={CustomisehIcon}
            bgColor="bg-[#5D5FEF]"
            textColor="text-white"
            
          />
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
