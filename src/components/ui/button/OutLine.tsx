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
        poppins-medium text-sm sm:text-base px-2 sm:px-2 h-8 sm:h-8 
        min-w-[76px] sm:min-w-[90px] transition-all ${className}`}
    >
      {Icon && <Icon className="w-[14px] h-[14px]" />}
      <span className="whitespace-nowrap text-xs">{BtnName}</span>
    </button>
  );
};

export default OutlineBtn;
