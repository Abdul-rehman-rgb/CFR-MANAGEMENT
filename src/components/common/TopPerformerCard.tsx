import { LineChart, Line, ResponsiveContainer } from "recharts";
import HeadingOne from "../ui/heading/HeadinhOne";

type CardProps = {
  category: string;
  amount: number;
  color: string;
  data: { value: number }[];
};

const TopPerformerCard = ({ category, amount, color, data }: CardProps) => {
  return (
    <div className="w-full bg-gradient-to-r from-green-50 to-green-100 p-3 p-4 rounded-xl space-y-4 h-full">
      <div className="flex flex-row md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Side - Info */}
        <div className="flex flex-col gap-1 sm:gap-1">
          <span className="text-[16px] font-semibold text-[#151D48] dark:text-orange-400">
            Top Performer Today!
          </span>
          <h2 className="text-[24px] sm:text-3xl font-bold">
            <span className="text-black">{category.slice(0, -3)}</span>
            <span className="text-green-600">{category.slice(-3)}</span>
          </h2>
          <HeadingOne text={ `${amount}K`} fontSize="text-[32px]" colorClass="text-[#151D48]" />
          <p className="text-[17px] sm:text-base font-regular text-[#151D48] dark:text-gray-300">
            of total sales
          </p>
        </div>

        {/* Right Side - Chart */}
        <div className="w-full md:w-48 h-32">
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
