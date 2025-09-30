import React, { useState } from "react";
import Board from "../innerpage/Board";
import Training from "../innerpage/Training";
import Notes from "../innerpage/Notes";
import TabButtons from "./TabButtons";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Board");

  const renderContent = () => {
    switch (activeTab) {
      case "Board":
        return <Board />;
      case "Training":
        return <Training />;
      case "Notes":
        return <Notes />;
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
