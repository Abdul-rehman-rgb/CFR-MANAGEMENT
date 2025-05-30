// import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import TargetRow from "../../components/ecommerce/TargetRow";
import RevenusRow from "../../components/ecommerce/RevenusRow";
// import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
// import RecentOrders from "../../components/ecommerce/RecentOrders";
// import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import AIPoweredSuggestions from "../../components/common/AIPoweredSuggestions"
import QuickAction from "../../components/ecommerce/QuickAction";
import MultichannelView from "../../components/ecommerce/MultichannelView";
import Calendar from "../Calendar";
import DashboardHeader from "../../components/common/DashboardHeader";
import { useState } from "react";


export default function Home() {
   const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleExport = () => {
    console.log('Exporting data...');
    // Add your export logic here
  };

  const handleRefresh = () => {
    console.log('Refreshing data...');
    // Add your refresh logic here
  };

  const handleCustomize = () => {
    console.log('Customizing dashboard...');
    // Add your customization logic here
  };
  return (
    <>
      <PageMeta
        title="CFR - ERP Dashboard"
        description="CFR - ERP Dashboard React"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
       <div className="col-span-12 space-y-6 xl:col-span-12">
           <DashboardHeader
            onExport={handleExport}
            onRefresh={handleRefresh}
            onCustomize={handleCustomize}
            dateRange={dateRange}
            setDateRange={setDateRange}
      />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-12">
          <TargetRow />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-12">
          <RevenusRow />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <QuickAction />

          <MultichannelView />

        </div>

        <div className="col-span-12 xl:col-span-6">
          <AIPoweredSuggestions/>
        </div>

       

        <div className="col-span-12 xl:col-span-6">
          <h2
          className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >Tasks</h2>

          <ComponentCard title={"Bilal"} children={undefined} />

          <ComponentCard title={"Asad"} children={undefined} />

          <ComponentCard title={"Maan"} children={undefined} />
        </div>

         <div className="col-span-12 xl:col-span-6">
          <h2
          className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >Recent Activities</h2>

          <MonthlyTarget />
        </div>


        {/* <div className="col-span-12 xl:col-span-6">
          <h2
          className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >System Health</h2>
          <MonthlyTarget />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <h2
          className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >Sales Trends</h2>
          <MonthlyTarget />
        </div> */}

         <div className="col-span-12 xl:col-span-6">
          <h2
          className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >Calender Component</h2>
          <Calendar
          
          />
        </div>

        <div className="col-span-12 xl:col-span-6">
           <h4
          className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >Activity Feed</h4>
          {/* <MonthlyTarget /> */}
            <ComponentCard title={"Bilal"} children={undefined} />

          <ComponentCard title={"Asad"} children={undefined} />

          <ComponentCard title={"Maan"} children={undefined} />
        </div>

        {/* <div className="col-span-12 space-y-6 xl:col-span-12">
          <h4
          className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >Daily Tasks</h4>
          <MonthlySalesChart />
        </div> */}

        {/* <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div> */}
      </div>
    </>
  );
}
