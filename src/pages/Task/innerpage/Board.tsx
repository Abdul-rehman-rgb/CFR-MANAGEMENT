import { useState } from "react";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiFilter, FiPlus } from "react-icons/fi";
import ColorFull from "../../../components/ui/button/ColorFull";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import Kanban from "../component/Kanban";
import TaskDrawer from "../component/TaskDrawer";

const Board = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 bg-while p-6 mt-5 dark:bg-[#0D0D0D] rounded-lg">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingTwo text="My Tasks" className="text-[#333333]" />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export BtnName="Export" icon={FiFilter} />
              </div>
              <ColorFull
                text="Add Task"
                icon={FiPlus}
                bgColor="bg-[#5D5FEF]"
                textColor="text-white"
                onClick={() => setIsDrawerOpen(true)}
              />
            </div>
          </div>
         
        </div>
         <div>
            <Kanban />
          </div>
          {isDrawerOpen && (
            <TaskDrawer onClose={() => setIsDrawerOpen(false)} />
          )}
      </div>
    </>
  );
};

export default Board;
