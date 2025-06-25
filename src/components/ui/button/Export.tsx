import React from "react";

type ExportProps = {
  BtnName: string;
  icon?: React.ElementType;
  className?: string;
  onClick?: () => void;
};

const Export: React.FC<ExportProps> = ({
  BtnName,
  icon: Icon,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center
        text-[#333333]
        border border-[#A9A9A9]/55 bg-white text-sm font-medium text-center
        px-3 py-2 rounded-md w-full sm:w-auto
        hover:bg-[#333333] hover:text-white
        dark:border-[#A9A9A9] dark:bg-[#0D0D0D] dark:text-[#A9A9A9] dark:hover:bg-white dark:hover:text-[#333333]
        transition-colors duration-200 ${className}`}
    >
      {Icon && <Icon className="w-[16px] h-[16px] text-base sm:mr-2" />}
      <span className="truncate">{BtnName}</span>
    </button>
  );
};

export default Export;
