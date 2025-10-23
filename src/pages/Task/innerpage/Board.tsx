import { useState, useEffect } from "react";
import SearchInput from "../component/SearchInput";
import Export from "../component/Export";
import { FiPlusCircle } from "react-icons/fi";
import ColorFull from "../component/ColorFull";
import HeadingTwo from "../component/HeadingTwo";
import Kanban from "../component/Kanban";
import TaskDrawer from "../component/TaskDrawer";
import FilterModal from "../component/FilterModal";
import BreakButton from "../component/BreakButton";
import ExtraBreakModal from "../component/ExtraBreakModal";
import BreakTimerModal from "../component/BreakTimerModal";
import { IoFilterOutline } from "react-icons/io5";
import { DropResult } from "@hello-pangea/dnd";

type Task = {
  id: string;
  name: string;
  assignee: string;
  priority: string;
  status: string;
  createdAt: Date;
  isTimerActive?: boolean;
  remainingTime?: number;
  description?: string;
};

type TasksState = {
  todo: Task[];
  inprogress: Task[];
  completed: Task[];
};

const initialData: TasksState = {
  todo: [
    { id: "1", name: "Doing research on new logo design", assignee: "John Doe", priority: "High", status: "todo", createdAt: new Date() },
    {
      id: "2",
      name: "Working on new logo design first draft",
      assignee: "Jane Smith",
      priority: "High",
      status: "todo",
      createdAt: new Date(),
    },
    { id: "3", name: "Shariq Sr. Designer", assignee: "Alice Johnson", priority: "High", status: "todo", createdAt: new Date() },
  ],
  inprogress: [
    { id: "4", name: "Task Name", assignee: "Bob Brown", priority: "High", status: "inprogress", createdAt: new Date() },
    { id: "5", name: "Task Name", assignee: "Charlie Wilson", priority: "High", status: "inprogress", createdAt: new Date() },
  ],
  completed: [
    { id: "6", name: "Task Name", assignee: "Diana Lee", priority: "High", status: "completed", createdAt: new Date() },
    { id: "7", name: "Task Name", assignee: "Eve Davis", priority: "High", status: "completed", createdAt: new Date() },
  ],
};

const Board = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    status: [],
    priority: [],
    assignee: [],
  });
  const [isBreakTimerActive, setIsBreakTimerActive] = useState(false);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(30 * 60);
  const [isExtraBreakModalOpen, setIsExtraBreakModalOpen] = useState(false);
  const [extraBreakTime, setExtraBreakTime] = useState(5 * 60);
  const [extraBreakReason, setExtraBreakReason] = useState("");
  const [isBreakTimerModalOpen, setIsBreakTimerModalOpen] = useState(false);
  const [breakDuration, setBreakDuration] = useState(10 * 60); // Default 10 minutes
  const [tasks, setTasks] = useState(initialData);
  const [successMessage, setSuccessMessage] = useState("");

  const addTask = (column: keyof TasksState) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name: "Break Task",
      assignee: "John Doe",
      priority: "High",
      status: column,
      createdAt: new Date(),
      isTimerActive: false,
      remainingTime: 0,
    };
    setTasks((prev) => ({
      ...prev,
      [column]: [...prev[column], newTask],
    }));
  };

  useEffect(() => {
    let interval = null;

    if (isBreakTimerActive && breakTimeRemaining > 0) {
      interval = window.setInterval(() => {
        setBreakTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsBreakTimerActive(false);
            alert("Break time is over! Time to get back to work.");
            return 30 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => interval && clearInterval(interval);
  }, [isBreakTimerActive, breakTimeRemaining]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) => {
        const newTasks = { ...prev };
        let hasChanges = false;

        Object.keys(newTasks).forEach((col) => {
          newTasks[col as keyof TasksState] = newTasks[col as keyof TasksState].map((task) => {
            if (task.isTimerActive) {
              hasChanges = true;
              return { ...task, remainingTime: (task.remainingTime || 0) + 1 };
            }
            return task;
          });
        });

        return hasChanges ? newTasks : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleStartBreak = (time) => {
    setIsBreakTimerActive(true);
    setBreakTimeRemaining(time);
    addTask("inprogress");
  };

  const handleOpenBreakModal = (duration) => {
    setBreakDuration(duration);
    setIsBreakTimerModalOpen(true);
  };

  const handleBreakEnd = () => {
    setIsBreakTimerActive(false);
    setBreakTimeRemaining(30 * 60);
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    const sourceCol = source.droppableId as keyof TasksState;
    const destCol = destination.droppableId as keyof TasksState;
    if (sourceCol === destCol && source.index === destination.index) return;

    setTasks((prev) => {
      const newTasks = { ...prev };
      const sourceItems = [...newTasks[sourceCol]];
      const [removed] = sourceItems.splice(source.index, 1);
      newTasks[sourceCol] = sourceItems;
      const destItems = [...newTasks[destCol]];
      destItems.splice(destination.index, 0, removed);
      newTasks[destCol] = destItems;

      const taskIndex = destItems.findIndex(task => task.id === draggableId);
      const updatedTask = { ...removed };

      if (sourceCol === 'todo' && destCol === 'inprogress') {
        updatedTask.isTimerActive = true;
      } else if (sourceCol === 'inprogress' && destCol === 'completed') {
        updatedTask.isTimerActive = false;
      } else if (sourceCol === 'inprogress' && destCol === 'todo') {
        updatedTask.isTimerActive = false;
      } else if (sourceCol === 'completed' && destCol === 'todo') {
        updatedTask.isTimerActive = false;
      } else if (sourceCol === 'completed' && destCol === 'inprogress') {
        updatedTask.isTimerActive = true;
      } else if (sourceCol === 'todo' && destCol === 'completed') {
        updatedTask.isTimerActive = false;
      }

      destItems[taskIndex] = updatedTask;

      return newTasks;
    });
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    console.log("Applied filters:", filters);
  };

  const handleCreateTask = (newTask: Task) => {
    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));
    setSuccessMessage("Task created successfully");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 bg-white dark:bg-[#0D0D0D] rounded-lg">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <HeadingTwo text="My Tasks" className="text-[#333333]" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="grid grid-flow-col justify-center sm:justify-end gap-5 max-sm:grid-rows-2">
              <SearchInput />
              <Export
                BtnName="Filters"
                icon={IoFilterOutline}
                onClick={() => setIsFilterModalOpen(true)}
              />

              <ColorFull
                text="Add Task"
                icon={FiPlusCircle}
                className="text-center"
                bgColor="bg-[#5D5FEF]"
                textColor="text-white"
                onClick={() => setIsDrawerOpen(true)}
              />

              <BreakButton
                isBreakTimerActive={isBreakTimerActive}
                breakTimeRemaining={breakTimeRemaining}
                formatTime={formatTime}
                onOpenModal={handleOpenBreakModal}
                onExtraBreak={() => setIsExtraBreakModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md text-sm">
              {successMessage}
            </div>
          )}
          <Kanban tasks={tasks} onDragEnd={handleDragEnd} />
        </div>

        {isDrawerOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 bg-opacity-30 z-40"
              onClick={() => setIsDrawerOpen(false)}
            />
            <TaskDrawer onClose={() => setIsDrawerOpen(false)} onCreateTask={handleCreateTask} />
          </>
        )}
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
        <ExtraBreakModal
          isOpen={isExtraBreakModalOpen}
          onClose={() => setIsExtraBreakModalOpen(false)}
          extraBreakTime={extraBreakTime}
          setExtraBreakTime={setExtraBreakTime}
          extraBreakReason={extraBreakReason}
          setExtraBreakReason={setExtraBreakReason}
          onStartBreak={handleStartBreak}
        />
        <BreakTimerModal
          isOpen={isBreakTimerModalOpen}
          onClose={() => setIsBreakTimerModalOpen(false)}
          duration={breakDuration}
          onBreakEnd={handleBreakEnd}
        />

      
      </div>
    </>
  );
};

export default Board;
