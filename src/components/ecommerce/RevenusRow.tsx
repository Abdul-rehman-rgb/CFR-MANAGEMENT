import DashboardCard from "../common/DashboardCard";
import ChartImage from "../../../public/chart-green.svg";
import ChartImageRed from "../../../public/chart-red.svg";

export default function RevenusRow() {
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Metric Item 1 */}
      <div className="rounded-2xl bg-white dark:border-gray-800 dark:bg-white/[0.03] h-full">
        <DashboardCard
          title="Revenue"
          amount="$13.000"
          subtitle="50% This Week"
          timeRange="This Week"
          chart={<img src={ChartImage} alt="Revenue Chart" />}
        />
      </div>

      {/* Metric Item 2 */}
      <div className="rounded-2xl bg-white dark:border-gray-800 dark:bg-white/[0.03] h-full">
        <DashboardCard
          title="Revenue"
          amount="$13.000"
          subtitle="50% This Week"
          timeRange="This Week"
          chart={<img src={ChartImageRed} alt="Revenue Chart" />}
        />
      </div>

      {/* Metric Item 3 */}
      <div className="rounded-2xl bg-white dark:border-gray-800 dark:bg-white/[0.03] h-full">
        <DashboardCard
          title="Revenue"
          amount="$13.000"
          subtitle="50% This Week"
          timeRange="This Week"
          chart={<img src={ChartImage} alt="Revenue Chart" />}
        />
      </div>

      {/* Metric Item 4 */}
      <div className="rounded-2xl bg-white dark:border-gray-800 dark:bg-white/[0.03] h-full">
        <DashboardCard
          title="Revenue"
          amount="$13.000"
          subtitle="50% This Week"
          timeRange="This Week"
          chart={<img src={ChartImageRed} alt="Revenue Chart" />}
        />
      </div>
    </div>
  );
}
