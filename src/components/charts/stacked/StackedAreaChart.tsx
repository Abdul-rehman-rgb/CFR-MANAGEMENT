// components/charts/StackedAreaChart.jsx or .tsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import HeadingOne from "../../ui/heading/HeadinhOne";
import Paragragh from "../../ui/Paragrapg";
import Export from "../../ui/button/Export";
import { FiDownload } from "react-icons/fi";
import HoverDropdown from "../../ui/button/HoverDropdown";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 100 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2200 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 356 },
  { name: "May", uv: 1890, pv: 4800, amt: 2000 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 1900 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 110 },
  { name: "Aug", uv: 3490, pv: 4300, amt: 1700 },
  { name: "Sep", uv: 3490, pv: 4300, amt: 1600 },
  { name: "Oct", uv: 3490, pv: 4300, amt: 1500 },
  { name: "Nov", uv: 3490, pv: 4300, amt: 1400 },
  { name: "Dec", uv: 3490, pv: 4300, amt: 1300 },
];

const StackedAreaChart = ({Title = "heading"}) => {
  return (
    <div className="max-h-72 w-full bg-white p-6 space-y-4 rounded-[12px] dark:bg-[#0D0D0D]">
      {" "}
      <div className="flex flex-row justify-between">
        <div>
          <HeadingOne fontSize="text-[20px]" fontWeight="font-bold" text={Title} />
        </div>
        <div className="flex gap-2 flex-row">
          <HoverDropdown DropdownName="Electronics" />
          <Export
            BtnName="Export"
            icon={FiDownload}
            onClick={() => console.log("Export triggered")}
          />
        </div>
      </div>
      <div>
        <Paragragh para="Overall Sales" color="text-[#8E8E9C]" className="text-[8px] font-regular" />
        <HeadingOne text={"$1,222"} colorClass="text-[#0CB91D]" fontSize="text-[20px]" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#5D5FEF"
            fill="#0096FF"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedAreaChart;
