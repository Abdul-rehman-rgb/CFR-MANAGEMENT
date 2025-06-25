/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import HeadingOne from "../../components/ui/heading/HeadinhOne";
import planeIcon from "../../icons/plane.svg";
import HazardIcon from "../../icons/hazard.svg";

// Example data - replace with your own data source or props
const data = [
  { month: "Jan", revenue: 2200, expenses: 1200 },
  { month: "Feb", revenue: 2600, expenses: 1500 },
  { month: "Mar", revenue: 3800, expenses: 2300 },
  { month: "Apr", revenue: 4700, expenses: 2900 },
  { month: "May", revenue: 3000, expenses: 3400 },
  { month: "Jun", revenue: 1700, expenses: 2600 },
  { month: "Jul", revenue: 2100, expenses: 2100 },
  { month: "Aug", revenue: 3300, expenses: 2800 },
  { month: "Sep", revenue: 4100, expenses: 3800 },
  { month: "Oct", revenue: 3900, expenses: 3400 },
  { month: "Nov", revenue: 3700, expenses: 3200 },
  { month: "Dec", revenue: 4200, expenses: 3600 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Show revenue as the main value for highlight
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 text-xs font-semibold text-gray-700 border border-gray-50 min-w-[110px]">
        <div className="text-gray-400 mb-1">Expected Revenue</div>
        <div className="text-gray-400 mb-1">{label} 2024</div>
        <div className="text-[#21b573] text-base font-bold">
          ${payload[0].value}
        </div>
      </div>
    );
  }
  return null;
};

const ProjectedRevenueVsExpensesChart: React.FC<{
  chartData?: typeof data;
  periodOptions?: string[];
  selectedPeriod?: string;
  onChangePeriod?: (period: string) => void;
}> = ({
  chartData = data,
  periodOptions = ["This Year", "Last Year"],
  selectedPeriod = "This Year",
  onChangePeriod,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 min-h-[370px] flex flex-col gap-3 relative overflow-hidden dark:bg-[#000000]">
      {/* Heading and filter */}
      <div className="flex flex-wrap justify-between items-center mb-3">
        <HeadingOne fontWeight="font-bold" fontSize="text-[20px]" text="Projected Revenue vs. Expenses" />
        <select
          className="bg-[#4f46e5] text-white rounded-lg px-4 py-2 text-[12px] hover:bg-[#fff] hover:text-[#4f46e5] hover:border-[#5D5FEF] border-1 font-medium focus:outline-none shadow dark:text-[#0D0D0D] dark:border-[#0D0D0D] dark:bg-[#fff] dark:hover:bg-[#5D5FEF]dark:bg-[#5D5FEF] dark:hover:text-[#5D5FEF] dark:hover:border-[#000] dark:hover:border-[1px] dark:ring-gray-700/50 dark:hover:ring-gray-700/50"
          value={selectedPeriod}
          onChange={e => onChangePeriod?.(e.target.value)}
        >
          {periodOptions.map(opt => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      {/* Highlights */}
      <div className="gap-1 mb-1 sm:flex-row sm:gap-6">
        <span className="flex items-center text-[#1A9FFF] text-[14px] leading-[24px] font-medium">
          {/* <svg className="mr-1" width={18} height={18} fill="none" viewBox="0 0 24 24">
            <path d="M12 2v20M12 2l4 4M12 2L8 6" stroke="#2176ff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg> */}
          <img src={planeIcon} alt="plane icon" className="mr-1" />
          Revenue will exceed expense in 2 months!
        </span>
        <span className="flex items-center text-[#EA4710] text-[14px] font-medium mt-1">
          {/* <svg className="mr-1" width={18} height={18} fill="none" viewBox="0 0 24 24">
            <path d="M12 9v4m0 4h.01M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9Z" stroke="#ff6e5d" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg> */}
          <img src={HazardIcon} alt="plane icon" className="mr-1" />

          Expenses will exceed revenue in 2 months!
        </span>
      </div>
      {/* Chart */}
      <div className="relative w-full mt-2 mb-2 h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 10, bottom: 25 }}
          >
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2176ff" stopOpacity={0.18} />
                <stop offset="80%" stopColor="#2176ff" stopOpacity={0.01} />
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6e5d" stopOpacity={0.20} />
                <stop offset="80%" stopColor="#ff6e5d" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f2f6fa" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 13, fill: "#c3c3c3", fontWeight: 600 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2176ff"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#revenueGradient)"
              activeDot={{ r: 6, stroke: "#2176ff", fill: "#2176ff" }}
              dot={{ r: 4, stroke: "#2176ff", fill: "#fff", strokeWidth: 2 }}
              name="Revenue"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#ff6e5d"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#expensesGradient)"
              activeDot={{ r: 6, stroke: "#ff6e5d", fill: "#ff6e5d" }}
              dot={{ r: 4, stroke: "#ff6e5d", fill: "#fff", strokeWidth: 2 }}
              name="Expenses"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectedRevenueVsExpensesChart;