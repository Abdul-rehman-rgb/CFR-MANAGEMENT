import React from "react";
import HoverDropdown from "../../../components/ui/button/HoverDropdown";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";

// Example data
const data = [
  { label: "Electronics", percent: 100, urgency: "critical" },
  { label: "Apparel", percent: 60, urgency: "moderate" },
  { label: "Appliances", percent: 80, urgency: "critical" },
  { label: "Furniture", percent: 50, urgency: "moderate" },
  { label: "Food", percent: 100, urgency: "critical" },
  { label: "Healthcare", percent: 25, urgency: "low" },
  { label: "Others", percent: 60, urgency: "moderate" },
];

// Color mapping for urgency
const urgencyToColor = {
  critical: "bg-gradient-to-t from-[#ff6262] to-[#ff3c3c]",
  moderate: "bg-gradient-to-t from-[#ffd162] to-[#ffb800]",
  low: "bg-gradient-to-t from-[#69e27f] to-[#0fcf4e]",
};

// Dot colors for legend
const urgencyDotColor = {
  critical: "bg-[#ff6262]",
  moderate: "bg-[#ffd162]",
  low: "bg-[#69e27f]",
};

const urgencyLabel = {
  critical: "Critical Urgency",
  moderate: "Moderate Urgency",
  low: "Low Urgency",
};

const legendOrder: ("critical" | "moderate" | "low")[] = [
  "critical",
  "moderate",
  "low",
];

const ReorderSuggestionChart: React.FC = () => {
  return (
    <div className="rounded-2xl p-6 min-h-[340px] relative">
      <div className="flex items-center justify-between mb-1">
        <HeadingTwo text={"Reorder Suggestion"} />
        <HoverDropdown DropdownName={"This Year"} />
      </div>
      {/* Legend */}
      <div className="flex items-center gap-7 mb-3 mt-2">
        {legendOrder.map((urgency) => (
          <div key={urgency} className="flex items-center gap-1 mb-5 text-[8px] text-[#737791] font-medium">
            <span className={`w-3 h-3 rounded-full ${urgencyDotColor[urgency]}`}></span>
            <span className="text-xs font-medium text-gray-500">{urgencyLabel[urgency]}</span>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="flex items-end gap-2 mt-4 min-h-[180px] w-full justify-between">
        {data.map((d) => (
          <div key={d.label} className="flex flex-col items-center flex-1 min-w-[60px]">
            <div className="relative flex items-end justify-center h-[190px] w-full">
              {/* Bar */}
              <div
                className={`
                  ${urgencyToColor[d.urgency as "critical" | "moderate" | "low"]}
                  w-[32px] rounded-t-[1.25rem] rounded-b-[0.75rem] transition-all
                  `}
                style={{
                  height: `${d.percent * 1.5}px`,
                  boxShadow: "0px 2px 8px 0px rgba(120,120,120,0.07)",
                }}
              />
              {/* Percent label */}
              {/* <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-500">
                {d.percent}%
              </span> */}
            </div>
            {/* Category Label */}
            <span className="mt-2 text-[8px] font-semibold text-[#737791] text-center">{d.label}</span>
          </div>
        ))}
      </div>
      {/* Y-axis labels (optional for visual hint) */}
      <div className="absolute left-0 top-[100px] flex flex-col items-end gap-7 h-[180px] pointer-events-none select-none">
        <span className="text-[8px] text-[#737791] font-semibold">100%</span>
        <span className="text-[8px] text-[#737791] font-semibold">80%</span>
        <span className="text-[8px] text-[#737791] font-semibold">60%</span>
        <span className="text-[8px] text-[#737791] font-semibold">40%</span>
        <span className="text-[8px] text-[#737791] font-semibold">20%</span>
        <span className="text-[8px] text-[#737791] font-semibold">0%</span>
      </div>
    </div>
  );
};

export default ReorderSuggestionChart;