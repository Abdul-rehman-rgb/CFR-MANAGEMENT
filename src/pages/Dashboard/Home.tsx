import React, { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import DashboardHeader from "../../components/common/DashboardHeader";
import TargetRow from "../../components/ecommerce/TargetRow";
import RevenusRow from "../../components/ecommerce/RevenusRow";
import QuickAction from "../../components/ecommerce/QuickAction";
import MultichannelView from "../../components/ecommerce/MultichannelView";
import AIPoweredSuggestions from "../../components/common/AIPoweredSuggestions";
import TaskList from "../../components/ecommerce/TaskManagement";
import ActivityCard from "../../components/common/ActivityCard";
import SalesTrendChart from "../../components/ecommerce/SalesCharts";
import SystemHealthGauge from "../../components/ecommerce/SystemHealth";
import Calendar from "../Calendar";
import AllTasks from "../Tables/AllTasks";
// import HeadingTwo from "../../components/ui/heading/HeadingTwo";
// import { FiDownload } from "react-icons/fi";
// import Export from "../../components/ui/button/Export";
import ActivityFeed from "../../components/common/ActivityFeed";
import TabbedTaskView from "../../components/ecommerce/TabbedTaskView";

export default function Home() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");
  const handleCustomize = () => console.log("Customizing dashboard...");

  const tasks = [
    {
      id: "1",
      userName: "John Doe",
      userRole: "Admin",
      title: "Task name",
      description: "Need to reorder Product A stock.",
      deadline: "30/02/2025",
      assignedDate: "20/01/2025",
      status: "active",
    },
    {
      id: "2",
      userName: "John Doe",
      userRole: "Admin",
      title: "Task name",
      description: "Need to reorder Product A stock.",
      assignedDate: "20/01/2025",
      status: "completed",
    },
  ];

  // ✅ Define tabs before using in useState
  const tabs = [
    {
      name: "All",
      content: <AllTasks />,
    },
    {
      name: "Completed",
      content: <AllTasks />,
    },
    {
      name: "Pending",
      content: <AllTasks />,
    },
  ];

  // const [activeTab, setActiveTab] = useState(tabs[0].name);
  // const currentTab = tabs.find((tab) => tab.name === activeTab);

  return (
    <>
      <PageMeta
        title="CFR - ERP Dashboard"
        description="CFR - ERP Dashboard React"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6">
          <DashboardHeader
            onExport={handleExport}
            onRefresh={handleRefresh}
            onCustomize={handleCustomize}
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>

        <div className="col-span-12 space-y-6">
          <TargetRow />
          <RevenusRow />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <QuickAction />
          <MultichannelView />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <AIPoweredSuggestions />
        </div>

        <div className="col-span-12 xl:col-span-6">
          {/* <h2 className="mb-3 text-2xl font-bold">Tasks</h2> */}
          <TaskList
            tasks={tasks}
            onAddTask={() => console.log("Add task clicked")}
            onViewAll={() => console.log("View all clicked")}
          />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <ActivityCard />
        </div>

        <div className="col-span-12 xl:col-span-6">
          {/* <h2 className="mb-3 text-2xl font-bold">System Health</h2> */}
          <SystemHealthGauge
            overall={72}
            shopify={87}
            amazon={57}
            ebay={35}
            subtitle="Overall Health"
            changeText="0.2% lower than last year"
            changeColor="red"
          />
        </div>

        <div className="col-span-12 xl:col-span-6 w-full p-6 rounded-xl bg-white shadow-md h-[550px] flex flex-col dark:text-white dark:bg-[#0D0D0D]">
          <h4 className="mb-3 text-2xl font-bold">Activity Feed</h4>
          <SalesTrendChart
            currentValue={75.08}
            comparisonText="more than last year"
            comparisonPercentage={2}
            timeRange="This Year"
          />
        </div>

        <div className="col-span-12 xl:col-span-6 rounded-xl bg-white shadow-md  flex flex-col dark:text-white dark:bg-[#0D0D0D]">
          {/* <h2 className="mb-3 text-2xl font-bold">Calendar Component</h2> */}
          <Calendar />
        </div>

      <div className="col-span-12 xl:col-span-6   flex flex-col dark:text-white dark:bg-[#0D0D0D]">
          <ActivityFeed />
        </div>

        {/* Daily Tasks with Tabs */}
        <div className="col-span-12 space-y-6 bg-white dark:bg-[#0D0D0D] p-6 rounded-lg">
            
      
      <TabbedTaskView/>
          {/* <div className="flex flex-row justify-between">
            <HeadingTwo
              text="Daily Tasks"
              className="text-[20px] font-bold tracking-tight dark:text-white"
            />

            <Export
              BtnName="Export"
              icon={FiDownload}
              onClick={() => console.log("Export triggered")}
            />
          </div> */}

          {/* Tabs */}
          {/* <div className="mb-6 overflow-x-auto whitespace-nowrap dark:text-white">
            <div className="flex gap-4 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-3 sm:px-4 py-2 text-[14px] sm:text-[18px] font-regular text-[#151D48] border-b-2 transition-colors duration-300 ${
                    activeTab === tab.name
                      ? "border-[#151D48] text-secondary"
                      : "border-transparent text-gray-500 hover:text-secondary"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div> */}

          {/* Tab Content */}
          {/* <div>{currentTab?.content}</div> */}
        </div>
      </div>
    </>
  );
}
