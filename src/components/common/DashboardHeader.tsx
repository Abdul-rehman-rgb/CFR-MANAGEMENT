import React, { useState } from 'react';
import { FiDownload, FiRefreshCw, FiSettings, FiCalendar } from 'react-icons/fi';
import { DateRangePicker } from 'react-date-range';
import { Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

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
  setDateRange: (range: Range) => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onExport,
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
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 mb-4 relative">
      <h2 className="text-xl font-semibold m-0">Dashboard</h2>

      <div className="flex items-center space-x-4">
        {showExport && (
          <button
            onClick={onExport}
            className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium"
          >
            <FiDownload className="mr-2" />
            Export
          </button>
        )}

        {showDateRange && (
          <div className="relative">
            <button
              onClick={() => setShowPicker((prev) => !prev)}
              className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium"
            >
              <FiCalendar className="mr-2" />
              Date Range
            </button>

            {showPicker && (
              <div className="absolute right-0 z-50 mt-2 shadow-lg">
                <DateRangePicker
                  ranges={[dateRange]}
                  onChange={(item: RangeKeyDict) => {
                    setDateRange(item.selection);
                    setShowPicker(true); // Auto-close on selection
                  }}
                  inputRanges={[]}
                />
              </div>
            )}
          </div>
        )}

        {showRefresh && (
          <button
            onClick={onRefresh}
            className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium"
          >
            <FiRefreshCw className="mr-2" />
            Refresh
          </button>
        )}

        {showCustomize && (
          <button
            onClick={onCustomize}
            className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium"
          >
            <FiSettings className="mr-2" />
            Customize Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
