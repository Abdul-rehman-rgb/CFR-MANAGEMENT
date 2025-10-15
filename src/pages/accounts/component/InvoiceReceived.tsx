import React from "react";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiCloud, FiFilter } from "react-icons/fi";
import InvoiceReceivedTable from "../../Tables/account/InvoiceReceivedTable";
import ColorFull from "../../../components/ui/button/ColorFull";

const InvoiceReceived = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <HeadingOne text="Invoices" />
          <Paragragh para="Real-time data on stock levels, location, and status." />
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
            <div className="mr-2">

            <Export
              BtnName="Export"
              icon={FiFilter}
              onClick={() => console.log("Export triggered")}
            />
            </div>
             <ColorFull
            text="Upload Invoice"
            icon={FiCloud}
            bgColor="bg-[#5D5FEF]"
            textColor="text-white"
            onClick={() => {console.log("Export triggered")}}
          />
          </div>
        </div>
      </div>
      <div>
        <InvoiceReceivedTable />
      </div>
    </div>
  );
};

export default InvoiceReceived;
