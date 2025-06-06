import SearchInput from "../../../components/form/SearchInput";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import { FiDownload, FiFilter } from "react-icons/fi";
import Export from "../../../components/ui/button/Export";
import Paragragh from "../../../components/ui/Paragrapg";
import AuditCard from "../../../components/dashboard/AuditCard";
import bookIcon from "../../../icons/book.svg";
import recursiveIcon from "../../../icons/recursive.svg";
import teamIcon from "../../../icons/team.svg";
import Audit from "../../Tables/inventorytables/Audit";

const AuditLog = () => {
  return (
    <>
      <div className="flex flex-row gap-4 md:flex-row max-sm:flex-col mb-5">
        <AuditCard icon={bookIcon} title="Audited Projects" value="25" />
        <AuditCard icon={recursiveIcon} title="Audited Projects" value="25" />
        <AuditCard icon={teamIcon} title="Audited Projects" value="25" />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingOne text="Stock Overview Table" />
            <Paragragh para="Real-time data on stock levels, location, and status." />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export
                  BtnName="Export"
                  icon={FiDownload}
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
          <Audit />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 rounded-sm bg-white">
                    <ProductInventoryChart />
                </div> */}
    </>
  );
};

export default AuditLog;
