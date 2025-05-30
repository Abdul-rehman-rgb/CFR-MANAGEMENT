// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { cn } from "@/lib/utils"; // optional utility for className merging
import { LineChart, Line, ResponsiveContainer } from "recharts";

type CardProps= {
    category: string,
    amount: number,
    color: string,
    data: [],

}

const TopPerformerCard = ({ category, amount, color, data } : CardProps) => {
  return (
    <div className="w-full bg-gradient-to-r p-6 from-green-50 to-green-100  grid grid-cols-2">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-gray-700">
          Top Performer Today!
        </p>
        <h2 className="text-3xl font-bold">
          <span className="text-black">{category.slice(0, -3)}</span>
          <span className="text-green-600">{category.slice(-3)}</span>
        </h2>
        <p className="text-4xl font-extrabold text-blue-900">${amount}K</p>
        <p className="text-md text-gray-700">of total sales</p>

        
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={color || "#22c55e"}
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
     </div>
    </div>
  );
};

export default TopPerformerCard;
