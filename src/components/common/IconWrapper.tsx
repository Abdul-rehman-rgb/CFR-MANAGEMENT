import React from "react";

type IconWrapperProps = {
  children: React.ReactNode;
  bgColor?: string;          // light mode bg color (Tailwind class)
  darkBgColor?: string;      // dark mode bg color (Tailwind class)
  className?: string;        // additional class names
};

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  className = "",
  bgColor = "bg-[#F4FCF7]",       // default light bg color
  darkBgColor = "dark:bg-gray-700", // default dark bg color
}) => {
  return (
    <div
      className={`mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] ${bgColor} ${darkBgColor} ${className}`}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
