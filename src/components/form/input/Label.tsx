import React from "react";

const Label = ({ htmlFor, children, className = "", color = "text-[#737791]", font = "font-medium" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-[12px] ${font} ${color} ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
