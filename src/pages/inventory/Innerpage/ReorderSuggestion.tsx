import SearchInput from "../../../components/form/SearchInput";
import { FiFilter } from "react-icons/fi";
import Export from "../../../components/ui/button/Export";
import Paragragh from "../../../components/ui/Paragrapg";
import ReorderTable from "../../Tables/inventorytables/ReoderTable";
import ReorderSuggestionChart from "../components/ReorderSuggestionChart";
import AiSuggestion from "../../Tables/AiSuggestion";
import HoverDropdown from "../../../components/ui/button/HoverDropdown";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";

const ReorderSuggestion = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingTwo text="Reorder Suggestion"/>
            <Paragragh para="AI generated suggestion to maintain stock levels and avoid shortages." />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export
                  BtnName="Filters"
                  icon={FiFilter}
                  onClick={() => console.log("Export triggered")}
                />
              </div>
              <Export
                BtnName="Export"
                icon={FiFilter}
                onClick={() => console.log("Export triggered")}
              />
            </div>
          </div>
        </div>
        {/* Table */}
        <div>
          <ReorderTable BtnText={"Reorder Now"} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
  <div className="grid grid-cols-5 gap-4">
    {/* First Column (wider: span 3 of 5) */}
    <div className="col-span-3 bg-white p-6 rounded-[12px] dark:bg-[#0D0D0D]">
      <ReorderSuggestionChart />
    </div>

    {/* Second Column (narrower: span 2 of 5) */}
    <div className="col-span-2">
      <div className="bg-white p-6 rounded-[12px] dark:bg-[#0D0D0D]">
        <div className="flex flex-row justify-between mb-4">
          <HeadingTwo className="text-[#333333]" text="AI Suggestion" />
          <HoverDropdown
            variant="filled"
            DropdownName="Reorder Suggestion"
            bgColor="bg-gradient-to-r from-[#5D5FEF] to-[#353689] text-white"
          />
        </div>
        <AiSuggestion />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ReorderSuggestion;
