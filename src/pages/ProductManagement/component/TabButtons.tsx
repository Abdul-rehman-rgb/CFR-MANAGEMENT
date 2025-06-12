import React from "react";

const tabs = [
  { id: "stock", label: "Stock Management" },
  { id: "fifo", label: "FIFO" },
  { id: "escrow", label: "Escrow" },
  { id: "batchtracking", label: "Batch Tracking" },
];

const TabButtons = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex flex-row">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-15 py-2 font-medium transition-colors text-[16px] ${
            activeTab === tab.id
              ? "bg-[#5D5FEF] border-b-2 border-blue-600 text-white"
              : "bg-[#F2F2FE] text-gray-500 hover:text-blue-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
