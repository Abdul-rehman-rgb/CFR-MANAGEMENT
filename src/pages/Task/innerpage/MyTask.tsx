import { useState } from "react";
import SearchInput from "../../../components/form/SearchInput";
import { FiFilter, FiPlus } from "react-icons/fi";
import Export from "../../../components/ui/button/Export";
import ColorFull from "../../../components/ui/button/ColorFull";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import Tabs from "../component/Tabs";


const MyTask = () => {

  return (
    <>
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        {/* <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
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
                //onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div> */}

        <div>
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default MyTask;
