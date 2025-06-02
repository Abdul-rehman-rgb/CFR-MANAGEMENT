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
        rounded-[12px] bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 
        poppins-medium text-sm sm:text-base px-3 sm:px-4 h-9 sm:h-10 
        min-w-[86px] sm:min-w-[102px] transition-all ${className}`}
    >
      {Icon && <Icon className="w-[16px] h-[16px]" />}
      <span className="whitespace-nowrap">{BtnName}</span>
    </button>
  );
};

export default OutlineBtn;
