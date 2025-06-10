import SearchInput from "../../../../components/form/SearchInput";
import HeadingOne from "../../../../components/ui/heading/HeadinhOne";
import { FiDownload, FiFilter } from "react-icons/fi";
import Export from "../../../../components/ui/button/Export";
import Paragragh from "../../../../components/ui/Paragrapg";
import FifoTable from "../../../Tables/ProductManagement/FifoTable";

const Fifo = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingOne text="FIFO" />
            <Paragragh para="Stock Allocation History" />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export
                  BtnName="Filter"
                  icon={FiDownload}
                  onClick={() => console.log("Export triggered")}
                />
              </div>
              <Export
                BtnName="Export"
                icon={FiFilter}
                onClick={() => console.log("Export triggered")}
              />
              {/* <ColorFull
                text="Transfer Request"
                icon={FiPlus}
                bgColor="bg-[#5D5FEF]"
                textColor="text-white"
              /> */}
            </div>
          </div>
        </div>
        {/* Table */}
        <div>
          <FifoTable/>
        </div>
      </div>
    </>
  );
};

export default Fifo;
