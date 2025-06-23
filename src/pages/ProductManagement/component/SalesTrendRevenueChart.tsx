import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example chart data (replace with your dynamic data as needed)
const chartData = [
  { month: "Jan", revenue: 15000, cartons: 25 },
  { month: "Feb", revenue: 22000, cartons: 45 },
  { month: "Mar", revenue: 30000, cartons: 55 },
  { month: "Apr", revenue: 38000, cartons: 66 },
  { month: "May", revenue: 21000, cartons: 38 },
  { month: "Jun", revenue: 9500, cartons: 12 },
  { month: "Jul", revenue: 11000, cartons: 17 },
  { month: "Aug", revenue: 13000, cartons: 22 },
  { month: "Sep", revenue: 35567.7, cartons: 45 },
  { month: "Oct", revenue: 17500, cartons: 33 },
  { month: "Nov", revenue: 20000, cartons: 41 },
  { month: "Dec", revenue: 25000, cartons: 52 },
];

// KPIs (replace with your dynamic data as needed)
const revenue = 73465;
const cartons = 150;
const pallet = 3;
const revenueGrowth = 0.02;
const cartonsGrowth = 0.02;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 text-xs font-semibold text-gray-700 border border-gray-50 min-w-[110px]">
        <div className="text-gray-400 mb-1">
           {/* ${payload[0].value.chartData()} */}
           {label}
        </div>
        <div className="text-[#21b573] text-base font-bold">
          ${payload[0].value.toLocaleString()}
        </div>
        <div className="text-[#269afc] font-bold">
          {/* {payload[1].value} Cartons Sold */}
        </div>
      </div>
    );
  }
  return null;
};

const SalesTrendsRevenueChart: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
//   const [selectedPeriod, setSelectedPeriod] = useState("This Year");

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[370px] flex flex-col gap-3 relative overflow-hidden mt-5">
      {/* Heading and filters */}
      <div className="flex flex-wrap justify-between items-center mb-2">
        <h2 className="font-bold text-2xl text-[#1a2343]">Sales Trends & Revenue</h2>
        <div className="flex gap-2">
          <select
            className="rounded-lg border border-[#d1d5db] px-3 py-1 text-sm font-medium text-[#4f46e5] bg-white shadow-sm focus:outline-none"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option>Electronics</option>
            <option>Apparel</option>
            <option>Furniture</option>
          </select>
          <button className="bg-[#4f46e5] text-white rounded-lg px-4 py-1 text-sm font-medium focus:outline-none shadow flex items-center gap-1">
            {/* {selectedPeriod} */}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="flex gap-12 mb-2">
        <div>
          <div className="text-xs text-gray-400 mb-1">Revenue</div>
          <div className="text-3xl font-bold text-[#21b573]">
            ${revenue.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 text-xs text-[#21b573] font-semibold mt-1">
            <svg width={14} height={14} viewBox="0 0 20 20">
              <path d="M10 15V5M10 5L5 10M10 5l5 5" stroke="#21b573" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {Math.abs(revenueGrowth * 100)}% more than year
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">Carton Sold</div>
          <div className="text-3xl font-bold text-[#269afc]">
            {cartons} <span className="text-xl font-bold">Cartons</span>
            <span className="text-sm text-gray-400 font-semibold ml-1">({pallet} Pallet)</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#21b573] font-semibold mt-1">
            <svg width={14} height={14} viewBox="0 0 20 20">
              <path d="M10 15V5M10 5L5 10M10 5l5 5" stroke="#21b573" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {Math.abs(cartonsGrowth * 100)}% more than year
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full mt-3 mb-2 h-[210px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 25 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#269afc" stopOpacity={0.35}/>
                <stop offset="80%" stopColor="#269afc" stopOpacity={0.08}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f2f6fa"/>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 13, fill: "#c3c3c3", fontWeight: 600 }}
            />
            <YAxis
              hide
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#269afc"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              activeDot={{ r: 6, stroke: "#269afc", fill: "#269afc" }}
              dot={{ r: 4, stroke: "#269afc", fill: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesTrendsRevenueChart;