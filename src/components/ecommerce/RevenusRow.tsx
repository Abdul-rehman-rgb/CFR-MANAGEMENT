import {
  // ArrowDownIcon,
  // ArrowUpIcon,
  // BoxIconLine,
  // GroupIcon,
} from "../../icons";
// import Badge from "../ui/badge/Badge";
import DashboardCard from "../common/DashboardCard";
// import Badge from "../ui/badge/Badge";
import ChartImage from '../../../public/chart-green.svg'; // or import as component
import ChartImageRed from '../../../public/chart-red.svg'; // or import as component

export default function RevenusRow() {
  return (
    <div className="md:gap-6  flex flex-col md:flex-row sm:flex-cols-4 md:flex-cols-4 lg:flex-cols-4 flex-auto">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 flex-auto">
        <DashboardCard
              title="Revenue"
              amount="$13.000"
              subtitle="50% This Week"
              timeRange="This Week"
              chart={<img src={ChartImage} alt="Revenue Chart" />}
            />
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 flex-auto">
        <DashboardCard
              title="Revenue"
              amount="$13.000"
              subtitle="50% This Week"
              timeRange="This Week"
              chart={<img src={ChartImageRed} alt="Revenue Chart" />}
            />
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 flex-auto">
        <DashboardCard
              title="Revenue"
              amount="$13.000"
              subtitle="50% This Week"
              timeRange="This Week"
              chart={<img src={ChartImage} alt="Revenue Chart" />}
            />
      </div>
      {/* <!-- Metric Item End --> */}
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 flex-auto">
        <DashboardCard
              title="Revenue"
              amount="$13.000"
              subtitle="50% This Week"
              timeRange="This Week"
              chart={<img src={ChartImageRed} alt="Revenue Chart" />}
            />
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
