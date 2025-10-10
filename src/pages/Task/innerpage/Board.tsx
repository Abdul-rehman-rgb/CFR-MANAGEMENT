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
import { IoFilterOutline } from "react-icons/io5";


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

  const handleStartBreak = (time) => {
    setIsBreakTimerActive(true);
    setBreakTimeRemaining(time);
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
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <HeadingTwo text="My Tasks" className="text-[#333333]" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex flex-row justify-center sm:justify-end gap-2">
              <SearchInput />

              <Export
                BtnName="Filters"
                icon={IoFilterOutline}
                onClick={() => setIsFilterModalOpen(true)}
              />

              <ColorFull
                text="Add Task"
                icon={FiPlusCircle}
                bgColor="bg-[#5D5FEF]"
                textColor="text-white"
                onClick={() => setIsDrawerOpen(true)}
              />

              <BreakButton
                isBreakTimerActive={isBreakTimerActive}
                breakTimeRemaining={breakTimeRemaining}
                formatTime={formatTime}
                handleStartBreak={handleStartBreak}
                onExtraBreak={() => setIsExtraBreakModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Kanban />
        </div>

        {isDrawerOpen && <TaskDrawer onClose={() => setIsDrawerOpen(false)} />}
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
      </div>
    </>
  );
};

export default Board;
