import React, { useState } from "react";
import { MoreDotIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import HeadingOne from "../ui/heading/HeadinhOne";

type DashboardCardProps = {
  title: string;
  amount: string;
  subtitle: string;
  timeRange: string;
  chart: React.ReactNode;
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
    <div className="flex flex-row sm:flex-row sm:justify-between sm:items-start rounded-xl w-full space-y-4 sm:space-y-0 p-4">
      {/* Left Content */}
      <div className="flex-1 space-y-5">
        <p className="text-sm text-gray-500 dark:text-white font-medium">{title}</p>
        <HeadingOne
          fontSize="text-[28px] sm:text-[32px]"
          colorClass="text-[#151D48]"
          className="dark:text-white mb-4 sm:mb-8"
          text={amount}
        />
        <p className="text-[12px] font-medium text-black/40 dark:text-white">{subtitle}</p>
      </div>

      {/* Right Dropdown + Chart */}
      <div className="flex flex-col items-end justify-between sm:h-full sm:items-end gap-2 sm:gap-0 space-y-10">
        {/* Dropdown */}
        <div className="text-primary font-medium text-sm flex items-center gap-1 cursor-pointer">
          {timeRange}
          <div className="relative inline-block">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
            </button>
            <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
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

        {/* Chart */}
        <div className="w-24 sm:w-20 mt-2 sm:mt-auto">{chart}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
