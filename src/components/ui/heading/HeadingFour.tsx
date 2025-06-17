import React from "react";

type HeadingFourProps = {
  text: React.ReactNode;
  className?: string;
};

const HeadingFour: React.FC<HeadingFourProps> = ({ text, className = "" }) => {
  return (
    <h4 className={`dark:text-white text-[14px] font-medium text-[#5D5FEF] ${className}`}>
      {text}
    </h4>
  );
};

export default HeadingFour;
