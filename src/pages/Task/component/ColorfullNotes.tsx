import { IoClose } from "react-icons/io5";

interface Note {
  id: number;
  color: string;
  text: string;
  date: string;
}

interface ColorfullNotesProps {
  notes: Note[];
  updateNoteText: (id: number, text: string) => void;
  removeNote: (id: number) => void;
}

export default function ColorfullNotes({ notes, updateNoteText, removeNote }: ColorfullNotesProps) {

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`${note.color} w-full min-h-[180px] sm:min-h-[220px] p-2 sm:p-4 rounded-xl shadow-lg text-black dark:text-white transition-all duration-300 hover:scale-105 relative`}
          >
            <button
              onClick={() => removeNote(note.id)}
              className="absolute top-1 right-1 bg-white dark:bg-gray-700 rounded-full p-2 hover:scale-110 transition z-1"
            >
              <IoClose className="text-black dark:text-white w-4 h-4" />
            </button>

            <textarea
              className="w-full h-24 sm:h-32 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-2 rounded-md resize-none text-sm outline-none text-black dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-300"
              value={note.text}
              onChange={(e) => updateNoteText(note.id, e.target.value)}
              placeholder="Write your note..."
            ></textarea>
            <div className="mt-2 sm:mt-4 flex justify-between items-center text-xs text-black dark:text-white">
              <span className="font-medium">{note.date}</span>
              {/* <button
                onClick={() => removeNote(note.id)}
                className="bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <FiEdit2 className="text-black dark:text-white w-4 h-4" />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
