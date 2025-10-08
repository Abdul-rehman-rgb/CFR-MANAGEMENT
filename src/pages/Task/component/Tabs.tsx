import React, { useState } from "react";
import Board from "../innerpage/Board";
import Training from "../innerpage/Training";
import TabButtons from "./TabButtons";
import Export from "../../../components/ui/button/Export";
import { FiPlusCircle } from "react-icons/fi";
import pdfIcon from "../../../../public/images/task/pdf.png";
import ColorfullNotes from "./ColorfullNotes";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Board");

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
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
        <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex flex-wrap gap-3 items-center">
          <Export BtnName="Add Notes" icon={FiPlusCircle} />
          <div className="mt-6">
            <ColorfullNotes />
          </div>
          <img
            src={pdfIcon}
            alt="PDF Icon"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Tabs;
