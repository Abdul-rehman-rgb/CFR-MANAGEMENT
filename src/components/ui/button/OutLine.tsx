import React from "react";

type OutlineBtnProps = {
  BtnName: string;
  icon?: React.ElementType;
  className?: string;
  onClick?: () => void;
};

const OutlineBtn: React.FC<OutlineBtnProps> = ({
  BtnName,
  icon: Icon,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 border border-[#5D5FEF] text-[#5D5FEF] 
        rounded-[7px] bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 
        font-medium text-sm sm:text-base px-2 sm:px-2 h-9 sm:h-9 
        min-w-[126px] transition-all ${className} max-sm:w-[68px]`}
    >
      {Icon && <Icon className="w-[14px] h-[14px] max-sm:w-[12px] max-sm:h-[12px]" />}
      <span className="whitespace-nowrap text-xs max-sm:text-[8px]">{BtnName}</span>
    </button>
  );
};

export default OutlineBtn;
