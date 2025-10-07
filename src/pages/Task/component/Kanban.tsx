import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
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

    console.log(`Dragging from ${sourceCol} to ${destCol}`);

    // Prevent dragging completed tasks to any other column
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

  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "completed", title: "Completed" },
  ];

  return (
    <div className="p-2 sm:p-4 bg-white dark:bg-[#0D0D0D] min-h-screen">
      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-4 py-2 text-[14px] rounded-t-[16px] ${
              activeTab === tab
                ? "bg-[#5D5FEF] text-white"
                : "bg-[#F2F2FE] dark:bg-[#1a1a1a] text-[#131330] dark:text-white font-medium"
            }`}
          >
            <img src={user} alt="Logo" className="w-6 h-6 rounded-full" />
            <span>{tab}</span>
          </button>
        ))}
        <button
          onClick={addTab}
          className="flex items-center justify-center w-8 h-8 rounded-full text-[#737791] border-1 border-[#737791] hover:text-white hover:bg-[#4a4cd1]"
        >
          <Plus size={18} />
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-1">
          {columns.map((col) => (
            <Droppable key={col.id} droppableId={col.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white dark:bg-[#0D0D0D] p-2 sm:p-4 rounded-lg"
                >
                  <h2 className="font-semibold mb-3 flex items-center gap-2 text-[#131330] dark:text-white">
                    <img src={star} alt="star" />
                    {col.title}
                    <span className="text-[#737791] dark:text-[#a0a0a0] text-[20px] font-medium">
                      {tasks[col.id as keyof TasksState].length}
                    </span>
                  </h2>

                  {/* Scrollable Tasks */}
                  <div className="max-h-[300px] overflow-y-auto pr-1">
                    {tasks[col.id as keyof TasksState].map((task: Task, index: number) => (
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
                            className="bg-[#f2f4fa] dark:bg-[#2a2a2a] p-2 sm:p-3 mb-3 rounded-lg"
                          >
                            <p className="text-[#131330] dark:text-white text-[12px] font-medium mb-2">
                              {task.text}
                            </p>

                            <div className="flex items-center justify-between">
                              <span className="text-[11px] bg-[#FF695B26] text-[#FF695B] px-2 py-1 rounded">
                                {task.priority}
                              </span>

                              <div className="flex items-center gap-2">
                                <MessageCircle
                                  size={12}
                                  className="text-[#969895] dark:text-[#a0a0a0]"
                                />
                                <span className="text-[#969895] dark:text-[#a0a0a0] text-[12px]">
                                  2
                                </span>
                                <img
                                  src={user}
                                  alt="Logo"
                                  className="w-6 h-6 rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
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
