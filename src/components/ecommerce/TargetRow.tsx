import TargetCard from "../common/TargetCard";
import BottleneckCard from "../common/BottleneckCard";
import TopPerformerCard from "../common/TopPerformerCard";
import "./TargetRow.scss";

export default function TargetRow() {
  const chartData = [
    { value: 10 },
    { value: 30 },
    { value: 20 },
    { value: 50 },
    { value: 40 },
    { value: 80 },
    { value: 100 },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-col lg:flex-row gap-4 sm:gap-6 w-full h-full">
        {/* Target Card */}
        <div className="flex-1 h-full rounded-2xl dark:border-gray-800 dark:bg-white/[0.03]">
          <TargetCard
            achieved={234000}
            target={500000}
            onCreateClick={() => console.log("Create Target")}
            onReportClick={() => console.log("View Report")}
          />
        </div>

        {/* Top Performer Card */}
        <div className="flex-1 h-full rounded-2xl bg-white dark:bg-white/[0.03]">
          <TopPerformerCard
            category="Electronics"
            amount={356}
            color="#22c55e"
            data={chartData}
          />
        </div>

        {/* Bottleneck Card */}
        <div className="flex-1 h-full md:max-w-[37.5%] rounded-2xl bg-white dark:bg-white/[0.03]">
          <BottleneckCard />
        </div>
      </div>
    </div>
  );
}
