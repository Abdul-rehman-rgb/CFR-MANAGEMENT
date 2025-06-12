import React from "react";
import { FiDownload } from "react-icons/fi";

type ColorFullProps = {
  text?: string;
  icon?: React.ElementType;
  bgColor?: string;
  textColor?: string;
  fontSize?: string; // Tailwind class like 'text-sm', 'text-base', 'text-lg'
  onClick?: () => void;
  iconProps?: React.ComponentProps<'svg'>;
};

const ColorFull: React.FC<ColorFullProps> = ({
  text = "Select Date Range",
  icon: Icon = FiDownload,
  bgColor = "bg-[#5D5FEF]/20",
  textColor = "text-[#5D5FEF]",
  fontSize = "text-sm",
  onClick,
  iconProps = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-medium border-[1px] ${textColor} ${bgColor} ${fontSize} max-sm:w-[71px] max-sm:text-[8px] border-[#5D5FE1] hover:bg-white hover:text-[#5D5FEF] hover:border-[#5D5FEF] hover:border-[1px] dark:hover:bg-gray-700 flex h-9 items-center gap-2 rounded-md px-4 sm:h-9 min-w-[120px] sm:min-w-[140px] transition-all overflow-hidden`}
    >
      <Icon className="w-[18px] h-[18px] max-sm:w-[12px] max-sm:h-[12px] flex-shrink-0" {...iconProps} />
      <span className="truncate flex-shrink-0" title={text}>
        {text}
      </span>
    </button>
  );
};

export default ColorFull;
