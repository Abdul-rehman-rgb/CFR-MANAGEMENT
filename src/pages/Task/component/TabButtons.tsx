import React from "react";

const tabs = [
  { id: "Board", label: "Board" },
  { id: "Training", label: "Training" },
  { id: "Notes", label: "Notes" },
];

interface TabButtonsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex flex-row">
      {tabs.map((tab) => (
        <div className="bg-[#F2F2FE]">
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-15 py-2 font-medium transition-colors rounded-[20px] text-[16px] ${
              activeTab === tab.id
                ? "bg-[#5D5FEF] rounded-[20px] border-b-2 border-blue-600 text-white"
                : "bg-[#F2F2FE] rounded-[20px] text-[#2B2B2B] hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabButtons;