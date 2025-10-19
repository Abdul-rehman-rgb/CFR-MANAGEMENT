import { useState, useRef, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { MessageCircle, Plus } from "lucide-react";
import user from "../../../../public/images/user/user-38.png";
import star from "../../../../public/images/task/star.png";

type Task = {
  id: string;
  text: string;
  priority: string;
  isTimerActive?: boolean;
  remainingTime?: number;
};

type TasksState = {
  todo: Task[];
  inprogress: Task[];
  completed: Task[];
};

type User = {
  name: string;
  image: string;
};

const users: User[] = [
  { name: "John Doe", image: "../../../../public/images/user/user-01.jpg" },
  { name: "Jane Smith", image: "../../../../public/images/user/user-02.jpg" },
  { name: "Alice Johnson", image: "../../../../public/images/user/user-03.jpg" },
  { name: "Bob Brown", image: "../../../../public/images/user/user-04.jpg" },
  { name: "Charlie Wilson", image: "../../../../public/images/user/user-05.jpg" },
  { name: "Diana Lee", image: "../../../../public/images/user/user-06.jpg" },
  { name: "Eve Davis", image: "../../../../public/images/user/user-07.jpg" },
  { name: "Frank Miller", image: "../../../../public/images/user/user-08.jpg" },
  { name: "Grace Garcia", image: "../../../../public/images/user/user-09.jpg" },
  { name: "Henry Martinez", image: "../../../../public/images/user/user-10.jpg" },
];

export default function Kanban({
  tasks,
  onDragEnd,
}: {
  tasks: TasksState;
  onDragEnd: (result: DropResult) => void;
}) {
  const [tabs, setTabs] = useState(["My Tasks"]);
  const [activeTab, setActiveTab] = useState("My Tasks");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const addTab = (userName?: string) => {
    const newTab = userName || `New Tab ${tabs.length + 1}`;
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
    setIsDropdownOpen(false);
  };


  const closeTab = (tabToClose: string) => {
    const newTabs = tabs.filter((tab) => tab !== tabToClose);
    setTabs(newTabs);
    if (activeTab === tabToClose) {
      setActiveTab(newTabs[0] || "");
    }
  };

  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "completed", title: "Completed" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white dark:bg-[#0D0D0D] w-full relative">
      <div className="relative z-[50]">
        <div className="flex flex-nowrap items-center gap-1 sm:gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-[12px] sm:text-[14px] rounded-t-[12px] sm:rounded-t-[16px] relative whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[#5D5FEF] text-white"
                  : "bg-[#F2F2FE] dark:bg-[#1a1a1a] text-[#131330] dark:text-white font-medium"
              }`}
            >
              <button
                onClick={() => setActiveTab(tab)}
                className="flex items-center gap-1 sm:gap-2 flex-1"
              >
                <img
                  src={user}
                  alt="Logo"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                />
                <span className="truncate max-w-[60px] sm:max-w-[80px] md:max-w-none">
                  {tab}
                </span>
              </button>
              {tab !== "My Tasks" && (
                <button
                  onClick={() => closeTab(tab)}
                  className={`ml-1 sm:ml-2 text-sm sm:text-base ${
                    activeTab === tab
                      ? "text-white hover:text-red-300"
                      : "text-[#131330] dark:text-white hover:text-red-300"
                  }`}
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <div className="relative ml-1 sm:ml-2 flex-shrink-0">
            <button
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full text-[#737791] border border-[#737791] hover:text-white hover:bg-[#4a4cd1]"
            >
              <Plus size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="fixed bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-[99999] w-[90vw] max-sm:w-40 sm:w-65 max-w-[95vw] transition-all duration-300 ease-in-out"
                style={{
                  top: buttonRef.current ? buttonRef.current.getBoundingClientRect().bottom + window.scrollY + 8 : 'auto',
                  left: buttonRef.current ? buttonRef.current.getBoundingClientRect().left + window.scrollX : 'auto',
                }}
              >
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#0D0D0D] text-black dark:text-white text-sm sm:text-base"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {filteredUsers.map((user) => (
                    <div
                      key={user.name}
                      onClick={() => addTab(user.name)}
                      className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] cursor-pointer"
                    >
                      <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full" />
                      <span className="text-sm text-black dark:text-white">{user.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 sm:gap-3 md:gap-1 border-1 border-[#5D5FEF] overflow-visible relative z-[10]">
          {columns.map((col) => (
            <Droppable key={col.id} droppableId={col.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white dark:bg-[#0D0D0D] p-1 sm:p-2 md:p-4 rounded-lg"
                >
                  <h2 className="font-semibold mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2 text-[#131330] dark:text-white text-sm sm:text-base">
                    <img src={star} alt="star" className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="truncate">{col.title}</span>
                    <span className="text-[#737791] dark:text-[#a0a0a0] text-sm sm:text-lg md:text-[20px] font-medium">
                      {tasks[col.id as keyof TasksState].length}
                    </span>
                  </h2>

                  <div className="max-h-[250px] sm:max-h-[300px] md:max-h-[350px] overflow-y-auto pr-1">
                    {tasks[col.id as keyof TasksState].map(
                      (task: Task, index: number) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                zIndex: snapshot.isDragging ? 1000 : 'auto',
                              }}
                              className="bg-gradient-to-r from-[#5D60EF]/10 to-[#BAFF86]/10 dark:bg-[#0D0D0D] p-3 sm:p-3 md:p-4 mb-3 sm:mb-3 md:mb-4 rounded-lg relative"
                            >
                              <div className="flex justify-between items-start mb-2 sm:mb-3">
                                <p className="text-[#131330] dark:text-white text-[11px] sm:text-[12px] md:text-[13px] font-medium leading-snug line-clamp-2 max-w-[75%]">
                                  {task.text}
                                </p>
                                <div className="py-1 px-2 bg-[#5D5FEF26] rounded-md flex items-center justify-center">
                                  <span className="text-[#5D5FEF] font-medium text-xs sm:text-sm">
                                    {task.remainingTime ? formatTime(task.remainingTime) : "00:00"}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#FF695B26] text-[#FF695B] px-2 py-1 rounded-md">
                                  {task.priority}
                                </span>
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <MessageCircle
                                    size={12}
                                    className="text-[#969895] dark:text-[#a0a0a0]"
                                  />
                                  <span className="text-[#969895] dark:text-[#a0a0a0] text-[11px] sm:text-[12px]">
                                    2
                                  </span>
                                  <img
                                    src={user}
                                    alt="Logo"
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      )
                    )}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

