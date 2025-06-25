import React from "react";

type ViewDetailsProps = {
  BtnName: string;
  icon?: React.ElementType;
  className?: string;
  onClick?: () => void;
};

const ViewDetails: React.FC<ViewDetailsProps> = ({
  BtnName,
  icon: Icon,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center bg-[#5D5FEF] border-1 border-[#5D5FEF] hover:text-[#5D5FEF] hover:bg-white hover:border-[#5D5FEF] hover:border-1 transition-colors 
        text-white text-[11px] font-medium px-4 py-2 rounded ${className}`}
    >
      {Icon && <Icon className="mr-1 w-[18px] h-[18px]" />}
      {BtnName}
    </button>
  );
};

export default ViewDetails;
