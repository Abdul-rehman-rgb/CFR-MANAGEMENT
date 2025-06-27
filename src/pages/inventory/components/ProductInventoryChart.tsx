import React from "react";
import HoverDropdown from "../../../components/ui/button/HoverDropdown";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";

const ProductInventoryChart: React.FC = () => {
  // Example data
  const availablePercent = 70;
  const outOfStockPercent = 30;

  // For donut chart
  const size = 240;
  const strokeWidth = 45;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke dash
  const availableDash = (availablePercent / 100) * circumference;
  const outOfStockDash = (outOfStockPercent / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl dark:bg-[#0D0D0D] p-6 flex items-center min-h-[340px] relative dark:text-white">
      {/* Title */}
      <div className="absolute left-6 top-4">
        <HeadingTwo
          text="Product Inventory"
          className="text-[#1a2343] dark:text-white"
        />
      </div>
      {/* Filter */}
      <div className="absolute right-6 top-4">
        <HoverDropdown
          DropdownName="This Year"
          className="bg-gradient-to-r from-[#5D5FEF] to-[#353689] text-white dark:text-[#A9A9CD]"
        />
      </div>
      {/* Donut Chart */}
      <div className="mx-auto mt-6 relative shadow-md rounded-[200px] justify-center w-[260px] h-[260px] flex">
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#22C55E"
            strokeWidth={strokeWidth}
          />
          {/* Available */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#22c55e"
            strokeWidth={strokeWidth}
            strokeDasharray={`${availableDash} ${
              circumference - availableDash
            }`}
            strokeDashoffset={0}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.5s" }}
          />
          {/* Out of stock */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#FF695B"
            strokeWidth={strokeWidth}
            strokeDasharray={`${outOfStockDash} ${
              circumference - outOfStockDash
            }`}
            strokeDashoffset={-availableDash}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.5s" }}
          />
        </svg>
        {/* Available Label */}
        <div
          className="absolute left-0 bottom-10 flex flex-col items-start"
          style={{ transform: "translateX(-40%)" }}
        >
          <HeadingOne
            text={`${availablePercent} %`}
            fontSize="text-[30px]"
            fontWeight="font-bold"
            colorClass="text-[#22C55E]"
            className="dark:text-white"
          />
          <HeadingTwo
            text="Available"
            className="text-[#1a2343] font-medium dark:text-white"
          />
        </div>
        {/* Out of stock Label */}
        <div
          className="absolute right-0 top-8 flex flex-col items-end"
          style={{ transform: "translateX(40%)" }}
        >
          <HeadingOne
            text={`${outOfStockPercent} %`}
            fontSize="text-[30px]"
            fontWeight="font-bold"
            colorClass="text-[#22C55E]"
            className="dark:text-white"
          />

          <HeadingTwo
            text="Out of Stock"
            className="text-[#1a2343] font-medium dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInventoryChart;
