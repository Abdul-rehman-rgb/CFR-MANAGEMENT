import React from "react";
import { twMerge } from "tailwind-merge";

const Dropdown = ({
  className = "",
  options = [],
  ...props
}) => {
  const baseStyles =
    "w-full rounded-lg border border-[#737791]/25 bg-white px-4 py-3 text-[#483415] font-regular text-sm focus:border-[#EA7D00] focus:ring-[#EA7D00] dark:bg-[#0D0D0D] dark:text-[#A9A9CD] dark:placeholder:text-[#A9A9CD]";

  return (
    <select
      className={twMerge(baseStyles, className)}
      {...props}
    >
      {options.map(({ value, label }, idx) => (
        <option key={idx} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
