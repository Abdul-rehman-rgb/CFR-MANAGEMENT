import React, { useState } from "react";
import TaskTable from "../common/TaskTable";

const TabbedTaskView = () => {
  const [activeTab, setActiveTab] = useState("All");

  const allTasks = [
    {
      task: "Complete Vendor Contract Review",
      assignedTo: "Team A",
      priority: "High",
      deadline: "Due today",
      status: "Completed",
    },
    {
      task: "Complete Vendor Contract Review",
      assignedTo: "Team B",
      priority: "Low",
      deadline: "Due today",
      status: "Completed",
    },
    {
      task: "Complete Vendor Contract Review",
      assignedTo: "Team B",
      priority: "Low",
      deadline: "Due today",
      status: "Completed",
    },
    {
      task: "Complete Vendor Contract Review",
      assignedTo: "Team B",
      priority: "Low",
      deadline: "Due today",
      status: "Completed",
    },
    {
      task: "Complete Vendor Contract Review",
      assignedTo: "Team B",
      priority: "Medium",
      deadline: "2 Days",
      status: "Completed",
    },
    {
      task: "Complete Vendor Contract Review",
      assignedTo: "Team B",
      priority: "Low",
      deadline: "4 Days",
      status: "Pending",
    },
    {
      task: "Complete Vendor Contract Review",
      assignedTo: "Team B",
      priority: "Low",
      deadline: "5 Days",
      status: "Pending",
    },

    // Add more tasks here...
  ];

  const filteredTasks = {
    All: allTasks,
    Completed: allTasks.filter((t) => t.status === "Completed"),
    Pending: allTasks.filter((t) => t.status !== "Completed"),
    success: "green",
    error: "red",
    warning: "yellow",
  };

  const tabItems = [
    { label: "All", count: allTasks.length },
    { label: "Completed", count: filteredTasks.Completed.length },
    { label: "Pending", count: filteredTasks.Pending.length },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow dark:bg-[#0D0D0D] dark:text-white">
      <h2 className="text-xl font-bold text-gray-900 mb-4 dark:text-white dark:bg-[#0D0D0D] ">
        Daily Tasks
      </h2>
      <div className="flex items-center gap-6 mb-4">
        {tabItems.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`pb-2 relative ${
              activeTab === tab.label
                ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                : "text-gray-500"
            }`}
          >
            {tab.label}
            <span className="ml-1 text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
              {tab.count.toString().padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <TaskTable data={filteredTasks[activeTab]} />
    </div>
  );
};

export default TabbedTaskView;
