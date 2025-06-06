import React, { useState } from "react";
import InventoryCard from "../../components/common/InventoryCard";
import { FiDollarSign } from "react-icons/fi";
import ChartImage from "../../../public/chart-green.svg";
import InventoryHeader from "../../components/common/InventoryHeader";

export default function Inventory() {
    const [dateRange, setDateRange] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  
    const handleExport = () => console.log("Exporting data...");
    const handleRefresh = () => console.log("Refreshing data...");
    const handleCustomize = () => console.log("Customizing dashboard...");
  return (
    <>
    <div className="space-y-6">
    <div className="grid grdid-cols-1 gap-6">
    <InventoryHeader
  dateRange={dateRange}
  setDateRange={setDateRange}
  onRefresh={handleRefresh}
  onCustomize={handleCustomize}
  onExport={handleExport}
/>
</div>
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <InventoryCard
        title="Total Inventory Value"
        amount="$13,000"
        subtitle="50% than last Week"
        icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
        iconBgColor="bg-[#22C55E]/5"
        iconWrapperClassName="dark:bg-[#27DA68]/5"
        chart={<img src={ChartImage} alt="Revenue Chart" className="mt-2 h-auto w-[76px]" />}
      />
      <InventoryCard
        title="Number of Items"
        amount="50% out of 100%"
        subtitle="50% than last Week"
        icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
        iconBgColor="bg-[#27A1DA]/5"
        iconWrapperClassName="dark:bg-[#27A1DA]/5"
        chart={<img src={ChartImage} alt="Revenue Chart" className="mt-2 h-auto w-[76px]" />}
      />
      <InventoryCard
        title="Number of Items"
        amount="50% out of 100%"
        subtitle="50% than last Week"
        icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
        iconBgColor="bg-[#27A1DA]/5"
        iconWrapperClassName="dark:bg-[#27A1DA]/5"
        chart={<img src={ChartImage} alt="Revenue Chart" className="mt-2 h-auto w-[76px]" />}
      />
      <InventoryCard
        title="Number of Items"
        amount="50% out of 100%"
        subtitle="50% than last Week"
        icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
        iconBgColor="bg-[#27A1DA]/5"
        iconWrapperClassName="dark:bg-[#27A1DA]/5"
        chart={<img src={ChartImage} alt="Revenue Chart" className="mt-2 h-auto w-[76px]" />}
      />
    </div>
    </div>
    </>
  );
}
