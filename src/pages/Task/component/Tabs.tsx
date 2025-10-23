import React, { useState } from "react";
import Board from "../innerpage/Board";
import Training from "../innerpage/Training";
import TabButtons from "./TabButtons";
import TakeANote from "./TakeANote";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Board");
  const [notes, setNotes] = useState([]);

  const renderContent = () => {
    switch (activeTab) {
      case "Board":
        return <Board />;
      case "Training":
        return <Training />;
      default:
        return null;
    }
  };


  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-3 w-full">
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className="flex flex-row sm:justify-end sm:flex-row items-center gap-3 w-full sm:w-auto ">
            <TakeANote />
          </div>
        </div>

        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Tabs;
