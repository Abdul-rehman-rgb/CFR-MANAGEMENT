import React from "react";

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
    <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center min-h-[340px] relative">
      {/* Title */}
      <div className="absolute left-6 top-4">
        <span className="font-bold text-lg text-[#1a2343]">Product Inventory</span>
      </div>
      {/* Filter */}
      <div className="absolute right-6 top-4">
        <button className="bg-[#4f46e5] text-white rounded-lg px-4 py-1 text-sm focus:outline-none flex items-center gap-1 shadow">
          This Year
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {/* Donut Chart */}
      <div className="mx-auto mt-6 relative w-[260px] h-[260px] flex">
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f3f3f3"
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
            strokeDasharray={`${availableDash} ${circumference - availableDash}`}
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
            stroke="#ff695b"
            strokeWidth={strokeWidth}
            strokeDasharray={`${outOfStockDash} ${circumference - outOfStockDash}`}
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
          <span className="font-bold text-[1.4rem] text-[#21b573] leading-none">
            {availablePercent}%
          </span>
          <span className="text-gray-800 font-medium text-[1rem] leading-tight">Available</span>
        </div>
        {/* Out of stock Label */}
        <div
          className="absolute right-0 top-8 flex flex-col items-end"
          style={{ transform: "translateX(40%)" }}
        >
          <span className="font-bold text-[1.4rem] text-[#ff6e5d] leading-none">
            {outOfStockPercent}%
          </span>
          <span className="text-gray-800 font-medium text-[1rem] leading-tight">Out of Stock</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInventoryChart;