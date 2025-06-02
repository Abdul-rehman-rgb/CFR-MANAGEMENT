import React from "react";

type HeadingFourProps = {
  text: React.ReactNode;
  className?: string;
};

const HeadingFour: React.FC<HeadingFourProps> = ({ text, className = "" }) => {
  return (
    <h4 className={`mb-4 text-[16px] font-medium text-[#737791] dark:text-white ${className}`}>
      {text}
    </h4>
  );
};

export default HeadingFour;
