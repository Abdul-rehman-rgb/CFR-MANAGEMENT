import React, { useState } from "react";
import ProductHeader from "../../../components/common/ProductHeader";
import LogisticCard from "../components/LogisticCard";
import LowStockTable from "../../Tables/ProductManagement/LowStockTable";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiDownload, FiFilter } from "react-icons/fi";

const LogisticMain = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6">
        <ProductHeader
          heading="Product Management > Low Stock Products"
          onExport={handleExport}
          onRefresh={handleRefresh}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
      <div className="col-span-12 space-y-6 mb-4">
        <div className="flex flex-row gap-4 item-center">
          <LogisticCard />
          <LogisticCard />
          <LogisticCard />
          <LogisticCard />
        </div>
      </div>
      <div className="col-span-12 space-y-6 bg-white p-6 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingOne text="Low Stock Products" />
            <Paragragh para="Real-time data on product and manage products." />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export BtnName="Filter" icon={FiDownload} />
              </div>
              <Export BtnName="Export" icon={FiFilter} />
            </div>
          </div>
        </div>
        <div>
        <LowStockTable BtnTextOne={"Edit"} BtnTextTwo={"Delete"} />

        </div>
      </div>
    </div>
  );
};

export default LogisticMain;
