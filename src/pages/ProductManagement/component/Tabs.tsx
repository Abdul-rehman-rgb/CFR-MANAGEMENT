import React, { useState } from "react";
import TabButtons from "./TabButtons";
import StockManagement from "./TabContent/StockManagement";
import Fifo from "./TabContent/Fifo";
import Escrow from "./TabContent/Escrow";
import BatchTracking from "./TabContent/BatchTracking";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("stock");

  const renderContent = () => {
    switch (activeTab) {
      case "stock":
        return <StockManagement />;
       case "fifo":
         return <Fifo />;
       case "escrow":
         return <Escrow />;
       case "batchtracking":
         return <BatchTracking />;
      default:
        return null;
    }
  };

  return (
    <div>
      <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
