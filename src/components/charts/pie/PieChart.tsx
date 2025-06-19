// components/charts/DoublePieChart.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import HeadingOne from "../../ui/heading/HeadinhOne";
import Paragragh from "../../ui/Paragrapg";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DoublePieChart = () => {
  return (
    <div className="w-full bg-black dark:bg-[#0D0D0D] p-6 rounded-[12px] space-y-4 min-h-[300px]">
      <div>
        <HeadingOne text="Double Pie Chart" />
        <Paragragh para="Visual breakdown of groups using two pie charts." />
      </div>

      {/* Responsive container to avoid fixed width/height */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* First Pie */}
          <Pie
            data={data}
            cx="25%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell1-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/* Second Pie */}
          <Pie
            data={data}
            cx="75%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell2-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoublePieChart;
