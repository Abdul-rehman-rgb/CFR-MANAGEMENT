import React from "react";
import { FiDownload } from "react-icons/fi";

type ColorFullProps = {
  text?: string;
  icon?: React.ElementType;
  bgColor?: string;
  textColor?: string;
  className?: string;
  fontSize?: string;
  onClick?: () => void;
  iconProps?: React.ComponentProps<'svg'>;
};

const ColorFull: React.FC<ColorFullProps> = ({
  text = "Select Date Range",
  icon: Icon = FiDownload,
  bgColor = "bg-[#5D5FEF]/20",
  textColor = "text-[#5D5FEF]",
  fontSize = "text-sm",
  className = "",
  onClick,
  iconProps = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-medium border-[1px] ${textColor} ${bgColor} ${fontSize} ${className} text-center w-full sm:w-auto px-3 py-3 rounded-sm border-[#5D5FE1]/10 hover:border-[#5D5FEF] hover:border-[1px] hover:shadow-md hover:shadow-[#5D5FEF]/30 dark:bg-[#7476F1]/10 dark:text-[#7476F1] dark:hover:border-[#5D5FEF]/30 dark:hover:shadow-md dark:hover:shadow-[#fff]/30 flex h-9 items-center gap-2  px-4 sm:h-9 min-w-[120px] sm:min-w-[140px] transition-all overflow-hidden`}
    >
      <Icon className="w-[20px] h-[20px] max-sm:w-[12px] max-sm:h-[12px] flex-shrink-0" {...iconProps} />
      <span className="truncate flex-shrink-0 text-center" title={text}>
        {text}
      </span>
    </button>
  );
};

export default ColorFull;