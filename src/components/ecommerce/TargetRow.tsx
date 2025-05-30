import // ArrowDownIcon,
// BoxIconLine,
"../../icons";
import TargetCard from "../common/TargetCard";
import "./TargetRow.scss";
import BottleneckCard from "../common/BottleneckCard";
import TopPerformerCard from "../common/TopPerformerCard";


export default function TargetRow() {
  const chartData = [
  { value: 10 },
  { value: 30 },
  { value: 20 },
  { value: 50 },
  { value: 40 },
  { value: 80 },
  { value: 100 },]

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full gap-6 bg-fff">
        <div className="w-full md:w-[25%] rounded-xl rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <TargetCard
            achieved={234000}
            target={500000}
            onCreateClick={() => console.log("Create Target")}
            onReportClick={() => console.log("View Report")}
          />
        </div>
        <div className="w-full md:w-[37.5%] topPerformer rounded-xl ">
          <TopPerformerCard
              category="Electronics"
              amount={356}
              color="#22c55e"
              data={chartData}
            />
        </div>
        <div className="w-full md:w-[37.5%] shipments rounded-xl shadow p-6">
          <div className="p-4">
            <BottleneckCard />
          </div>
        </div>
      </div>
    </div>
  );
}
