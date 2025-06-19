// components/charts/BarChartTwo.jsx
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import HeadingOne from "../../ui/heading/HeadinhOne";
import Paragragh from "../../ui/Paragrapg";
import HoverDropdown from "../../ui/button/HoverDropdown";
import Export from "../../ui/button/Export";
import { FiDownload } from "react-icons/fi";

const data = [
  { name: "Electronics", uv: 100, pv: 10000, amt: 2400 },
  { name: "Apparel", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Appliances", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Furniture", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Food", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Healthcare", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Others", uv: 3490, pv: 4300, amt: 2100 },
];

const BarChartTwo = () => {
  return (
    <div className="w-full max-h-72 bg-white dark:bg-[#0D0D0D] p-6 rounded-[12px] space-y-4 min-h-[300px]">
      {/* Chart Header */}
        <div className="flex flex-row justify-between">
        <div>
          <HeadingOne text={"Performance Sales"} />
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
        <HeadingOne text={"$1,222"} colorClass="text-[#0CB91D]" />
      </div>

      {/* Chart Container */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {/* <CartesianGrid /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#D8322E"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#CA7611"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default BarChartTwo;
