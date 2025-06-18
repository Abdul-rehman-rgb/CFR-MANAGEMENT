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
        rounded-[7px] bg-transparent hover:bg-[#5D5FEF]-100 dark:hover:bg-red-700
        font-medium sm:text-base
        w-full sm:w-auto px-3 py-2 transition-all ${className}`}
    >
      {Icon && <Icon className="w-[14px] h-[14px] max-sm:w-[12px] max-sm:h-[12px]" />}
      <span className="whitespace-nowrap text-xs">{BtnName}</span>
    </button>
  );
};

export default OutlineBtn;
