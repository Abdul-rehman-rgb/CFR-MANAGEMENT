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
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import HoverDropdown from "../../../components/ui/button/HoverDropdown";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import { FiArrowDown } from "react-icons/fi";
import Paragragh from "../../../components/ui/Paragrapg";

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
    <div className="bg-white rounded-2xl p-6 min-h-[370px] flex flex-col gap-3 relative overflow-hidden mt-5">
      {/* Heading and filters */}
      <div className="flex flex-wrap justify-between items-center mb-2">
        <HeadingTwo
          className="text-2xl font-bold text-[#1a2343]"
          text="Sales Trends & Revenue"
        />
        <div className="flex gap-2">
          {/* <select
            className="rounded-lg border border-[#d1d5db] px-3 py-1 text-sm font-medium text-[#4f46e5] bg-white shadow-sm focus:outline-none"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option>Electronics</option>
            <option>Apparel</option>
            <option>Furniture</option>
          </select> */}
          <HoverDropdown DropdownName="Electronis" />
          <HoverDropdown variant="filled" DropdownName="This Year" />
        </div>
      </div>

      {/* KPIs */}
      <div className="flex gap-12 mb-2">
        <div>
          <div className="text-[8px] text-[#8E8E9C] mb-1">Revenue</div>
          <HeadingOne
            colorClass="text-[#0CB91D]"
            className="leading-[40px]"
            fontSize="text-[28px]"
            fontWeight="font-bold"
            text={`${revenue.toLocaleString()}`}
          />
          <div className="flex items-center gap-1 text-xs text-[#21b573] font-semibold mt-1">
            <FiArrowDown />
            <Paragragh para={`${revenueGrowth * 100}% more than year`} />
          </div>
        </div>
        <div>
          <div className="text-[8px] text-[#8E8E9C] mb-1">Carton Sold</div>
          <div className="text-3xl font-bold text-[#0096FF] leading-[40px] text-[28px] font-bold">
            {cartons} Cartons
            {/* <HeadingOne
              colorClass="text-[#0096FF]"
              className="leading-[40px]"
              fontSize="text-[28px]"
              fontWeight="font-bold"
              text={`${cartons} Cartons`}
            /> */}
            <span className="text-[12px] text-[#8E8E9C] font-medium ml-1">
              ({pallet} Pallet)
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#21b573] font-semibold mt-1">
            <FiArrowDown />
            <Paragragh para={`${cartonsGrowth * 100}% more than year`} />
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
                <stop offset="0%" stopColor="#269afc" stopOpacity={0.35} />
                <stop offset="80%" stopColor="#269afc" stopOpacity={0.08} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f2f6fa"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 13, fill: "#c3c3c3", fontWeight: 600 }}
            />
            <YAxis hide domain={["auto", "auto"]} />
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
