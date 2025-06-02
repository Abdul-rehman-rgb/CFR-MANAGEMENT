import { useState } from "react";
import TaskList from "./TaskManagement";

export default function TaskTabs({ tasks }) {
  const tabs = [
    {
      name: "All",
      filter: () => true,
    },
    {
      name: "Completed",
      filter: (task) => task.status === "completed",
    },
    {
      name: "Pending",
      filter: (task) => task.status !== "completed",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const currentTab = tabs.find((tab) => tab.name === activeTab);
  const filteredTasks = tasks.filter(currentTab.filter);

  return (
    <div>
      {/* Tabs */}
      <div className="mb-6 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-4 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-[18px] poppins-medium border-b-2 transition-colors duration-300 ${
                activeTab === tab.name
                  ? "border-secondary text-secondary"
                  : "border-transparent text-gray-500 hover:text-secondary"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <TaskList
        tasks={filteredTasks}
        onAddTask={() => console.log("Add task clicked")}
        onViewAll={() => console.log("View all clicked")}
      />
    </div>
  );
}
