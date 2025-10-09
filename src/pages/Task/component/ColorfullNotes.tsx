import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";

const colors = [
  { name: "yellow", class: "bg-yellow-200 dark:bg-yellow-800" },
  { name: "pink", class: "bg-pink-200 dark:bg-pink-800" },
  { name: "green", class: "bg-green-200 dark:bg-green-800" },
  { name: "blue", class: "bg-blue-400 dark:bg-blue-800" },
];

export default function ColorfullNotes() {
  const [notes, setNotes] = useState([]);

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
    <div className="p-4">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-full max-w-sm h-24">
          {colors.map((color, index) => {
            const width = 24 + index * 8;
            const height = 40 + index * 8;

            return (
              <div
                key={index}
                className={`${color.class} rounded-md cursor-pointer absolute transition-all duration-300 hover:scale-110`}
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  left: `${index * 20}px`,
                  zIndex: index,
                }}
                onClick={() => addNote(color.class)}
              ></div>
            );
          })}
        </div>
      </div>


      <div className="relative top-[-40px] left-[-230px] w-full sm:min-h-[0px] z-10">
        {notes.map((note, index) => (
          <div
            key={note.id}
            style={{
              top: `${index * 20}px`,
              left: `${index * 20}px`,
              zIndex: index,
            }}
            className={`${note.color} absolute w-48 sm:w-64 min-h-[180px] sm:min-h-[220px] p-2 sm:p-4 rounded-xl shadow-lg text-black dark:text-white transition-all duration-300 hover:scale-105`}
          >
            <button className="absolute top-1 right-1 bg-white dark:bg-gray-700 rounded-full p-2 hover:scale-110 transition z-1">
              <FaRegStar className="text-black dark:text-white w-4 h-4" />
            </button>

            <textarea
              className="w-full h-24 sm:h-32 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-2 rounded-md resize-none text-sm outline-none text-black dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-300"
              value={note.text}
              onChange={(e) => updateNoteText(note.id, e.target.value)}
              placeholder="Write your note..."
            ></textarea>

            <div className="mt-2 sm:mt-4 flex justify-between items-center text-xs text-black dark:text-white">
              <span className="font-medium">{note.date}</span>
              <button
                onClick={() => removeNote(note.id)}
                className="bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <FiEdit2 className="text-black dark:text-white w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
