import React, { useState } from "react";
import { MoreDotIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

type DashboardCardProps = {
  title: string;
  amount: string;
  subtitle: string;
  timeRange: string;
  chart: React.ReactNode; // pass a chart component or an <img />
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  amount,
  subtitle,
  timeRange,
  chart,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="flex justify-between items-start  rounded-xl shadow bg-white w-full max-w-md dark:bg-gray-900">
      <div>
        <p className="text-gray-500 text-sm mb-8">{title}</p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {amount}
        </h2>
        <p className="text-gray-400 text-sm mt-2">{subtitle}</p>
      </div>

      <div className="flex flex-col items-end justify-between h-full">
        <div className="text-primary font-medium text-sm flex items-center gap-1 cursor-pointer mb-8">
          {timeRange}
          <div className="relative inline-block">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
            </button>
            <Dropdown
              isOpen={isOpen}
              onClose={closeDropdown}
              className="w-40 p-2"
            >
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                This Month
              </DropdownItem>
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                This Year
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
        <div className="mt-auto w-20">{chart}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
