import React, { useState, useEffect, useRef } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  backgroundColor: string;
}

const noteColors = [
  'bg-yellow-100 border-yellow-200',
  'bg-pink-100 border-pink-200',
  'bg-blue-100 border-blue-200',
  'bg-green-100 border-green-200',
  'bg-purple-100 border-purple-200',
  'bg-orange-100 border-orange-200',
  'bg-teal-100 border-teal-200',
  'bg-indigo-100 border-indigo-200',
];

const TakeANote: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const savedNotes = localStorage.getItem('taskNotes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes).map((note: Omit<Note, 'createdAt'> & { createdAt: string }) => ({
        ...note,
        createdAt: new Date(note.createdAt),
      }));
      setNotes(parsedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskNotes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false);
      }
      if (editRef.current && !editRef.current.contains(event.target as Node) && editingNoteId) {
        handleSaveEdit();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, editingNoteId]);

  const handleAddNote = () => {
    if (title.trim() || content.trim()) {
      const newNote: Note = {
        id: Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date(),
        backgroundColor: noteColors[Math.floor(Math.random() * noteColors.length)],
      };
      setNotes([newNote, ...notes]);
      setTitle('');
      setContent('');
      setIsExpanded(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddNote();
    }
  };

  const handleEditNote = (note: Note) => {
    setEditingNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleSaveEdit = () => {
    if (editingNoteId) {
      setNotes(notes.map(note =>
        note.id === editingNoteId
          ? { ...note, title: editTitle.trim(), content: editContent.trim() }
          : note
      ));
      setEditingNoteId(null);
      setEditTitle('');
      setEditContent('');
    }
  };

  const handleEditKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveEdit();
    }
  };

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto">
      {/* Take a Note Input */}
      <div className="mb-6">
        {!isExpanded ? (
          <div
            onClick={() => setIsExpanded(true)}
            className="w-full p-2 border border-gray-300 rounded-lg cursor-text hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800 dark:border-gray-600"
          >
            <p className="text-gray-500 dark:text-gray-400 text-[16px]">Take a note...</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-2 transition-all duration-200">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-2 p-2 text-lg font-medium border-none outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
              autoFocus
            />
            <textarea
              placeholder="Take a note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-2 border-none outline-none bg-transparent resize-none placeholder-gray-400 dark:placeholder-gray-500"
              rows={3}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAddNote}
                className="px-6 py-2 bg-[#5D5FEF] text-white rounded-lg hover:bg-[#4a4cd1] transition-colors duration-200 font-medium"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>

      {notes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {notes.map((note) => (
            <div key={note.id} className="h-32">
              {editingNoteId === note.id ? (
                <div
                  ref={editRef}
                  className={`${note.backgroundColor} border rounded-lg p-4 shadow-lg transition-all duration-200 h-full flex flex-col`}
                >
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onKeyPress={handleEditKeyPress}
                    className="w-full mb-2 p-2 text-lg font-medium border-none outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500 flex-shrink-0"
                    placeholder="Title"
                    autoFocus
                  />
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    onKeyPress={handleEditKeyPress}
                    className="w-full p-2 border-none outline-none bg-transparent resize-none placeholder-gray-400 dark:placeholder-gray-500 flex-1 overflow-hidden"
                    placeholder="Take a note..."
                  />
                  <div className="flex justify-end mt-2 flex-shrink-0">
                    <button
                      onClick={handleSaveEdit}
                      className="px-4 py-1 bg-[#5D5FEF] text-white rounded-lg hover:bg-[#4a4cd1] transition-colors duration-200 font-medium text-sm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => handleEditNote(note)}
                  className={`${note.backgroundColor} border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer h-full flex flex-col`}
                >
                  {note.title && (
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                      {note.title}
                    </h3>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {note.content}
                  </p>
                  <div className="mt-auto text-xs text-gray-500 dark:text-gray-400">
                    {note.createdAt.toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TakeANote;