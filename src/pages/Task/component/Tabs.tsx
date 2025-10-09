import React, { useState } from "react";
import Board from "../innerpage/Board";
import Training from "../innerpage/Training";
import TabButtons from "./TabButtons";
import Export from "../../../components/ui/button/Export";
import { FiPlusCircle } from "react-icons/fi";
import pdfIcon from "../../../../public/images/task/pdf.png";
import ColorfullNotes from "./ColorfullNotes";

const colors = [
  { name: "yellow", class: "bg-yellow-200 dark:bg-yellow-800" },
  { name: "pink", class: "bg-pink-200 dark:bg-pink-800" },
  { name: "green", class: "bg-green-200 dark:bg-green-800" },
  { name: "blue", class: "bg-blue-400 dark:bg-blue-800" },
];

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

          <div className="flex flex-row sm:justify-end sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Export BtnName="Add Notes" icon={FiPlusCircle} />
            <div className="flex flex-wrap justify-center">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`${color.class} w-8 h-8 sm:w-10 sm:h-10 rounded-md cursor-pointer transition-all duration-300 hover:scale-110`}
                  onClick={() => addNote(color.class)}
                ></div>
              ))}
            </div>
            <div className="flex justify-center sm:justify-end w-full sm:w-auto">
              <img
                src={pdfIcon}
                alt="PDF Icon"
                className="w-[102px] h-12 sm:w-14 sm:h-14 object-contain cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
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
