import React, { useState } from 'react';

// Utility to get color and status based on value
const getTrendStatus = (value) => {
  if (value >= 70) return { color: "#22C55E", label: "High" }; // Green
  if (value >= 50) return { color: "#FFD600", label: "Medium" }; // Yellow
  return { color: "#FF7171", label: "Low" }; // Red
};

// Utility to get a darker color for the top of the gradient
const getDarker = (hex, factor = 0.7) => {
  // Convert hex to RGB
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  // Darken each channel
  r = Math.round(r * factor);
  g = Math.round(g * factor);
  b = Math.round(b * factor);
  // Return as hex
  return `rgb(${r}, ${g}, ${b})`;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const SalesTrendChart = ({
  currentValue,
  comparisonText,
  comparisonPercentage,
  timeRange,
  showLegend = true,
  height = "360px",
  width = '100%',
  data = [75, 85, 65, 80, 50, 30, 60, 55, 70, 90, 80, 55], // default sample data
}) => {
  const maxValue = Math.max(...data);
  // State to track hovered bar
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div
      className="grid  bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row w-full"
      style={{ minWidth: 670, width, height }}
    >
      {/* Left side: Title, value, legend */}
      <div className='grid'>
        <div className='flex'>
          <div className='grid'>
            <div className="text-4xl font-extrabold text-[#22C55E] mb-1">{currentValue.toFixed(2)}%</div>
        <div className="flex items-center mb-6">
          {comparisonPercentage !== undefined && (
            <span className={`mr-2 text-lg font-bold ${comparisonPercentage >= 0 ? 'text-[#22C55E]' : 'text-[#EB5757]'}`}>
              {comparisonPercentage >= 0 ? '↑' : '↓'}
            </span>
          )}
          <span className="text-[#22C55E] font-medium">{comparisonText}</span>
          </div>
        
          </div>
          <div className='flex'>
          

          <div className="flex flex-col items-start md:w-1/3">
        {/* <h2 className="text-2xl font-extrabold text-[#23235F] mb-3">Sales Trends</h2> */}
        
        {/* Legend */}
        {showLegend && (
          <div className="grid items-center gap-6 border-l-2 border-gray-200 pl-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#22C55E]" />
              <span className="text-[#23235F] text-sm">High</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#FFD600]" />
              <span className="text-[#23235F] text-sm">Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#FF7171]" />
              <span className="text-[#23235F] text-sm">Low</span>
            </div>
          </div>
        )}
      </div>
          </div>
          <div className='flex'>
            <div className="flex justify-end gap-4 mb-4">
          <button className="px-6 py-2 rounded-lg border border-[#5D5FEF] text-[#5D5FEF] font-semibold bg-white hover:bg-[#f4f4ff] transition flex items-center gap-2">
            Sales Trends
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M8 10l4 4 4-4" stroke="#5D5FEF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow hover:brightness-110 flex items-center gap-2">
            This Year
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M8 10l4 4 4-4" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
          </div>
        </div>

      </div>

      
      {/* Right side: Chart and Controls */}
      <div className="flex-1 flex flex-col">
        {/* Controls */}
        
        {/* Chart */}
        <div className="flex items-end h-[220px] w-full mt-1 pb-5">
          <div className="flex-1 flex justify-between items-end w-full">
            {data.map((value, idx) => {
              const { color } = getTrendStatus(value);
              const darker = getDarker(color);
              const barHeight = (value / maxValue) * 160 + 30; // ensure visible min height
              const showLabel = hoveredIdx === idx;
              return (
                <div
                  className="flex flex-col items-center w-[28px] relative"
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* SVG for vertical line with custom gradient */}
                  <svg
                    width="8"
                    height={barHeight}
                    style={{ display: 'block', position: 'relative', zIndex: 0 }}
                  >
                    <defs>
                      <linearGradient id={`bar-gradient-${idx}`} x1="0" y1="0" x2="0" y2={barHeight} gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor={darker} />
                        <stop offset="100%" stopColor={color} stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="3"
                      y="0"
                      width="2"
                      height={barHeight - 8}
                      rx="2"
                      fill={`url(#bar-gradient-${idx})`}
                    />
                  </svg>
                  {/* Dot on top */}
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: color,
                      position: "absolute",
                      top: -8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      boxShadow: showLabel ? '0 0 0 6px #fff, 0 6px 16px 0px #d1d5db44' : undefined,
                      zIndex: showLabel ? 1 : 'auto'
                    }}
                  />
                  {/* Value label shown for hovered bar with a popover style */}
                  {showLabel && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-xl bg-white shadow text-[#23235F] font-bold text-sm z-10">
                      {value}%
                    </span>
                  )}
                  <span className="mt-3 text-[#8c92b9] text-sm font-semibold">{months[idx]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTrendChart;