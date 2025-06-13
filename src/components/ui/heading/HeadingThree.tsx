// components/HeadingThree.js
import React from "react";

const HeadingThree = ({
  text = "",
  className = "",
  size = "text-[16px] sm:text-[16px]",
  weight = "font-medium",
  color = "text-[#737791]",
}) => {
  return (
    <h3 className={`${size} ${weight} ${color} ${className} dark:text-white`}>
      {text}
    </h3>
  );
};

export default HeadingThree;
