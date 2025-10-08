import React, { useState } from "react";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import SearchInput from "../../../components/form/SearchInput";
import TabButtons from "../component/TabButtons";
import VideoArea from "../component/VideoArea";
import { trainings } from "../component/trainings";
import ColorFull from "../../../components/ui/button/ColorFull";
import { FiPlus } from "react-icons/fi";

const Training = () => {
  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    { id: "basic", label: "Basic" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advance", label: "Advance" },
  ];

  const filteredTrainings = trainings.filter(
    (item) => item.label.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div className="grid grid-cols-1 gap-4 bg-white dark:bg-[#0D0D0D] p-6 rounded-lg">
      <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <HeadingOne text="My Trainings" />
        <div className="flex items-center gap-2 max-sm:flex-col">
          <SearchInput />
          <ColorFull
            text="Add Training"
            icon={FiPlus}
            bgColor="bg-[#5D5FEF]"
            textColor="text-white"
          />
        </div>
      </div>

      <div>
        <TabButtons
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={tabs}
        />
      </div>

      <div className="mt-4">
        {filteredTrainings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTrainings.map((item) => (
              <VideoArea key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10">
            No trainings found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;
