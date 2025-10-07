import React from "react";

const defaultTabs = [
  { id: "Board", label: "Board" },
  { id: "Training", label: "Training" },
  { id: "Notes", label: "Notes" },
];

interface TabButtonsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs?: { id: string; label: string }[];
}

const TabButtons: React.FC<TabButtonsProps> = ({ activeTab, onTabChange, tabs = defaultTabs }) => {
  return (
    <div className="flex flex-row overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <div key={tab.id} className="bg-[#F2F2FE] dark:bg-[#1a1a1a] flex-shrink-0">
          <button
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 font-medium transition-colors rounded-[20px] text-[16px] whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-[#5D5FEF] rounded-[20px] border-b-2 border-blue-600 text-white"
                : "bg-[#F2F2FE] dark:bg-[#1a1a1a] rounded-[20px] text-[#2B2B2B] dark:text-white hover:text-blue-600"
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