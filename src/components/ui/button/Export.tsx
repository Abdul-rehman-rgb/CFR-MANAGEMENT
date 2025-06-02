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
      className={`flex items-center dark:border-[#A9A9A9] dark:bg-transparent dark:text-white px-3 py-2 bg-white border border-[#A9A9A9] hover:bg-gray-200 rounded-md text-sm font-medium w-full sm:w-auto ${className}`}
    >
      {Icon && <Icon className="mr-2 w-[20px] h-[20px]" />}
      {BtnName}
    </button>
  );
};

export default Export;
