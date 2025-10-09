import { useState } from "react";
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
};

type TasksState = {
  todo: Task[];
  inprogress: Task[];
  completed: Task[];
};

const initialData: TasksState = {
  todo: [
    { id: "1", text: "Doing research on new logo design", priority: "High" },
    {
      id: "2",
      text: "Working on new logo design first draft",
      priority: "High",
    },
    { id: "3", text: "Shariq Sr. Designer", priority: "High" },
  ],
  inprogress: [
    { id: "4", text: "Task Name", priority: "High" },
    { id: "5", text: "Task Name", priority: "High" },
  ],
  completed: [
    { id: "6", text: "Task Name", priority: "High" },
    { id: "7", text: "Task Name", priority: "High" },
  ],
};

export default function Kanban() {
  const [tabs, setTabs] = useState(["My Tasks", "John Doe"]);
  const [activeTab, setActiveTab] = useState("My Tasks");
  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId as keyof TasksState;
    const destCol = destination.droppableId as keyof TasksState;

    if (sourceCol === "completed") return;

    const sourceItems = [...tasks[sourceCol]];
    const [removed] = sourceItems.splice(source.index, 1);
    const destItems = [...tasks[destCol]];
    destItems.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [sourceCol]: sourceItems,
      [destCol]: destItems,
    });
  };

  const addTab = () => {
    const newTab = `New Tab ${tabs.length + 1}`;
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
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

  return (
    <div className="p-1 sm:p-2 md:p-4 bg-white dark:bg-[#0D0D0D] w-full">
      <div className="flex flex-nowrap items-center gap-1 sm:gap-2 overflow-x-auto pb-2 sm:pb-3">
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
            <button
              onClick={() => closeTab(tab)}
              className="text-white hover:text-red-300 ml-1 sm:ml-2 text-sm sm:text-base"
            >
              ×
            </button>
          </div>
        ))}
        <button
          onClick={addTab}
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full text-[#737791] border border-[#737791] hover:text-white hover:bg-[#4a4cd1] ml-1 sm:ml-2 flex-shrink-0"
        >
          <Plus size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 border-1">
          {columns.map((col) => (
            <Droppable key={col.id} droppableId={col.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white dark:bg-[#0D0D0D] p-1 sm:p-2 md:p-4 rounded-lg"
                >
                  <h2 className="font-semibold mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2 text-[#131330] dark:text-white text-sm sm:text-base">
                    <img
                      src={star}
                      alt="star"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <span className="truncate">{col.title}</span>
                    <span className="text-[#737791] dark:text-[#a0a0a0] text-sm sm:text-lg md:text-[20px] font-medium">
                      {tasks[col.id as keyof TasksState].length}
                    </span>
                  </h2>

                  <div className="max-h-[250px] sm:max-h-[300px] md:max-h-[350px] overflow-y-auto pr-1">
                    {tasks[col.id as keyof TasksState].map(
                      (task: Task, index: number) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-[#f2f4fa] dark:bg-[#2a2a2a] p-1 sm:p-2 md:p-3 mb-2 sm:mb-3 rounded-lg shadow-sm"
                            >
                              <p className="text-[#131330] dark:text-white text-[10px] sm:text-[11px] md:text-[12px] font-medium mb-1 sm:mb-2 line-clamp-2">
                                {task.text}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-[9px] sm:text-[10px] md:text-[11px] bg-[#FF695B26] text-[#FF695B] px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                                  {task.priority}
                                </span>
                                <div className="flex items-center gap-1 sm:gap-2">
                                  <MessageCircle
                                    size={10}
                                    className="sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#969895] dark:text-[#a0a0a0]"
                                  />
                                  <span className="text-[#969895] dark:text-[#a0a0a0] text-[10px] sm:text-[11px] md:text-[12px]">
                                    2
                                  </span>
                                  <img
                                    src={user}
                                    alt="Logo"
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
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
  );
}
