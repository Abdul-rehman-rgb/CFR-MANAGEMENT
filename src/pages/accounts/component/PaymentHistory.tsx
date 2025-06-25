import React from "react";
import PaymentHistoryTable from "../../Tables/account/PaymentHistoryTable";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiFilter } from "react-icons/fi";
import RevenueChart from "../../Charts/RevenueChart";
import AIPoweredSuggestions from "../../../components/common/AIPoweredSuggestions";

const PaymentHistory = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mb-3 flex flex-col gap-4 max-sm:flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <HeadingOne fontWeight="font-bold" colorClass="text-[#333333]" fontSize="text-[20px]" text="Payment History" />
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
        <PaymentHistoryTable />
      </div>
      
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 ">
           <RevenueChart />
        </div>
        <div className="col-span-4 ">
          <AIPoweredSuggestions/>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
