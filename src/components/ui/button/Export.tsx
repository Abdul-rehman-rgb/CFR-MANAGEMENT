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
      className={`flex items-center justify-center dark:border-[#A9A9A9] dark:bg-transparent dark:text-white max-sm:w-[58px] px-3 py-2 bg-white border border-[#A9A9A9] hover:bg-gray-200 rounded-md text-sm font-medium sm:w-auto max-sm:text-[8px] ${className}`}
    >
      {Icon && (
        <Icon className="w-[20px] h-[20px] text-base sm:mr-2 max-sm:w-[12px] max-sm:h-[12px]" />
      )}
      <span className="sm:inline">{BtnName}</span>
    </button>
  );
};

export default Export;
