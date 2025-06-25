import React from "react";

type HeadingOneProps = {
  text: string | number;
  className?: string;
  colorClass?: string;     // Tailwind color utility like "text-red-500"
  fontSize?: string;       // Tailwind font size like "text-3xl"
  fontWeight?: string;     // Tailwind font weight like "font-bold"
};

const HeadingOne: React.FC<HeadingOneProps> = ({
  text,
  className = "",
  colorClass = "text-[#151D48] dark:text-white letter-spacing-[0.01px]",
  fontSize = "text-[24px] sm:text-[20px] md:text-[20px]",
  fontWeight = "font-semibold",
}) => {
  return (
    <h1 className={`${fontSize} ${fontWeight} ${colorClass} ${className} leading-[20px] mb-2`}>
      {text}
    </h1>
  );
};

export default HeadingOne;

