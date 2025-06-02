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
      className={`poppins-medium ${textColor} ${bgColor} ${fontSize} max-sm:w-full hover:bg-gray-100 dark:hover:bg-gray-700 flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[120px] sm:min-w-[140px] transition-all overflow-hidden`}
    >
      <Icon className="w-[18px] h-[18px] flex-shrink-0" {...iconProps} />
      <span className="truncate flex-shrink-0" title={text}>
        {text}
      </span>
    </button>
  );
};

export default ColorFull;
