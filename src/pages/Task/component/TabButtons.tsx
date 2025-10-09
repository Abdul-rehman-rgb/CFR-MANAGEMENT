import React from "react";

const defaultTabs = [
  { id: "Board", label: "Board" },
  { id: "Training", label: "Training" },
];

interface TabButtonsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs?: { id: string; label: string }[];
}

const TabButtons: React.FC<TabButtonsProps> = ({
  activeTab,
  onTabChange,
  tabs = defaultTabs,
}) => {
  return (
    <>
    <div className="inline-flex items-center gap-1 sm:gap-2 bg-[#F2F2FE] dark:bg-[#1a1a1a] rounded-full p-1 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-3 sm:px-5 py-1 sm:py-2 font-medium text-[12px] sm:text-[15px] whitespace-nowrap transition-all duration-300 rounded-full ${
            activeTab === tab.id
              ? "bg-[#5D5FEF] text-white shadow-md"
              : "text-[#2B2B2B] dark:text-white hover:text-[#5D5FEF]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    </>
  );
};

export default TabButtons;
