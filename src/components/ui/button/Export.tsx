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
      className={`flex items-center justify-center dark:border-[#A9A9A9] dark:bg-transparent dark:text-white 
      w-full sm:w-auto px-3 py-2 bg-white border border-[#A9A9A9] 
      hover:bg-gray-200 rounded-md text-sm font-medium text-center ${className}`}
    >
      {Icon && (
        <Icon className="w-[16px] h-[16px] text-base sm:mr-2" />
      )}
      <span className="truncate">{BtnName}</span>
    </button>
  );
};

export default Export;
