import React from "react";

type HoverDropdownProps = {
  className?: string;
  DropdownName?: string;
  color?: string; // Tailwind text and border color utility classes
  bgColor?: string; // Background color for filled variant
  variant?: "outlined" | "filled";
};

const HoverDropdown: React.FC<HoverDropdownProps> = ({
  DropdownName = "Dropdown",
  className = "",
  color = "text-[#5D5FEF] border-[#5D5FEF]",
  bgColor = "bg-[#5D5FEF] border-2 border-[#5D5FEF] text-white hover:border-2 hover:border-[#5D5FEF] hover:text-[#5D5FEF]",
  variant = "outlined",
}) => {
  const isOutlined = variant === "outlined";

  return (
    <div className="relative inline-block text-left group">
      {/* Trigger Button */}
      <button
        className={`inline-flex justify-center w-full rounded-md px-4 py-2 text-[12px] font-medium hover:bg-gray-50 dark:bg-[#0D0D0D] dark:text-[#A9A9CD] 
          ${isOutlined ? `bg-white border-2 ${color}` : `${bgColor} border-0`} 
          ${className}`}
      >
        {DropdownName}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white dark:bg-[#1A1A1A] shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            Action 1
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            Action 2
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverDropdown;
