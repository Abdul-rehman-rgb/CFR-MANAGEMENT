import { useState, useEffect } from "react";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiPlus, FiFilter } from "react-icons/fi";
import ColorFull from "../../../components/ui/button/ColorFull";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import Kanban from "../component/Kanban";
import TaskDrawer from "../component/TaskDrawer";
import FilterModal from "../component/FilterModal";

const Board = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    status: [],
    priority: [],
    assignee: [],
  });
  const [isBreakTimerActive, setIsBreakTimerActive] = useState(false);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(30 * 60); // 30 minutes in seconds

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

  const handleStartBreak = () => {
    setIsBreakTimerActive(true);
    setBreakTimeRemaining(30 * 60);
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    console.log("Applied filters:", filters);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 bg-white dark:bg-[#0D0D0D] p-4 sm:p-6 mt-5 rounded-lg">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Heading */}
          <HeadingTwo text="My Tasks" className="text-[#333333]" />

          {/* Right Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="w-full sm:w-auto">
              <SearchInput />
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-2">
              <Export
                BtnName="Filters"
                icon={FiFilter}
                onClick={() => setIsFilterModalOpen(true)}
              />

              <ColorFull
                text="Add Task"
                icon={FiPlus}
                bgColor="bg-[#5D5FEF]"
                textColor="text-white"
                onClick={() => setIsDrawerOpen(true)}
              />

              {/* Break Buttons Group */}
              <div className="flex flex-col sm:flex-row">
                <button
                  onClick={handleStartBreak}
                  disabled={isBreakTimerActive}
                  className={`text-[14px] font-medium py-2.5 px-4 rounded-tl-xl rounded-bl-xl transition-all duration-300 hover:-translate-y-0.5 ${
                    isBreakTimerActive
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-[#27C840] hover:bg-white hover:text-[#27C840] text-white"
                  }`}
                >
                  {isBreakTimerActive
                    ? `Break: ${formatTime(breakTimeRemaining)}`
                    : "Take Break for 30 mins"}
                </button>

                <button className="bg-[#27C84033] hover:bg-[#27C840] text-[#27C840] hover:text-white font-medium py-2.5 px-4 rounded-tr-xl rounded-br-xl transition-all duration-300 hover:-translate-y-0.5">
                  Take a Short Break
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Kanban Section */}
        <div className="mt-4">
          <Kanban />
        </div>

        {/* Modals */}
        {isDrawerOpen && <TaskDrawer onClose={() => setIsDrawerOpen(false)} />}
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
      </div>
    </>
  );
};

export default Board;
