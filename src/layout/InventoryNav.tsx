import React from "react";
import { useLocation, useNavigate } from "react-router";

const inventoryTabs = [
  { name: "Stock Overview", path: "/inventoryManagement" },
  { name: "Reorder Suggestion", path: "/inventoryManagement/reorder-suggestion" },
  { name: "Stock Transfer", path: "/inventoryManagement/stock-transfer" },
  { name: "Audit Logs", path: "/inventoryManagement/audit-log" },
];


const InventoryNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) =>
    location.pathname === path || location.pathname === path + "/";

  return (
    <div className="mb-6 overflow-x-auto whitespace-nowrap">
      <div className="flex gap-4 min-w-max">
        {inventoryTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => navigate(tab.path)}
            className={`px-3 sm:px-4 py-2 text-sm sm:text-[20px] font-medium border-b-2 transition-colors duration-300 dark:text-[#F2F2FE] ${
              isActive(tab.path)
                ? "border-[#7476F1] text-secondary"
                : "border-transparent text-gray-500 hover:text-secondary"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InventoryNav;
