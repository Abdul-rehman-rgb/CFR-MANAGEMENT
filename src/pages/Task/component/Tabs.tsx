import React, { useState } from "react";
import Board from "../innerpage/Board";
import Training from "../innerpage/Training";
import TabButtons from "./TabButtons";
import Export from "../../../components/ui/button/Export";
import { FiPlusCircle } from "react-icons/fi";
// import pdfIcon from "../../../../public/images/task/pdf.png";
import ColorfullNotes from "./ColorfullNotes";
import ColorImagePicker from "./ColorImagePicker";

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

  const addNote = (color) => {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        color,
        text: "",
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      },
    ]);
  };

  const updateNoteText = (id, text) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text } : note)));
  };

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-3 w-full">
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className="flex flex-row sm:justify-end sm:flex-row items-center gap-3 w-full sm:w-auto ">
            <Export BtnName="Add Notes" icon={FiPlusCircle} />
            <ColorImagePicker onAddNote={addNote} />

            {/* <div className="flex justify-center sm:justify-end w-full sm:w-auto">
              <img
                src={pdfIcon}
                alt="PDF Icon"
                className="w-[102px] h-12 sm:w-14 sm:h-14 object-contain cursor-pointer hover:scale-110 transition-transform"
              />
            </div> */}
          </div>
        </div>
        <ColorfullNotes
          notes={notes}
          updateNoteText={updateNoteText}
          removeNote={removeNote}
        />
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Tabs;
