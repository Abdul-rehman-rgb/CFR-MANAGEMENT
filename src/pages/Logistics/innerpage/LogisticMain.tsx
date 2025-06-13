import React, { useState } from "react";
import ProductHeader from "../../../components/common/ProductHeader";
import LogisticCard from "../components/LogisticCard";
import LowStockTable from "../../Tables/ProductManagement/LowStockTable";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiDownload, FiFilter } from "react-icons/fi";
import Icon from "../../../icons/producticon1.svg";
import TransitIcon from "../../../icons/transit.svg";
import DelayIcon from "../../../icons/delay.svg";
import SuccessIcon from "../../../icons/success.svg";
import LogisticTable from "../components/LogisticTable";

const LogisticMain = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
      {/* Header Section */}
      <div className="col-span-1 md:col-span-4 space-y-6">
        <ProductHeader
          heading="Product Management > Low Stock Products"
          onExport={handleExport}
          onRefresh={handleRefresh}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>

      {/* Logistic Cards */}
      <div className="col-span-1 md:col-span-4  space-y-6 mb-4">
        <div className="flex flex-row max-sm:flex-col gap-4 justify-between">
          <LogisticCard
            para="Total Delivery"
            value="1,245"
            progress={70}
            showProgress={true}
            Icon={Icon}
          />
          <LogisticCard
            para="In Transit"
            value="512"
            showProgress={false}
            green={"95%"}
            customText="On-Time Deliveries"
            Icon={TransitIcon}
          />
          <LogisticCard
            para="Delivery Delayed"
            value="78"
            showProgress={false}
            green={"Average"}
            customText="delay: 30 mins"
            Icon={DelayIcon}
          />
          <LogisticCard
            para="Delivery Success"
            value="92%"
            showProgress={false}
            green={"Goal:"}
            customText="95% Success Rate"
            Icon={SuccessIcon}
          />
        </div>
      </div>

      {/* Table and Filters */}
      <div className="col-span-1 md:col-span-4 space-y-6 bg-white p-4 sm:p-6 dark:bg-[#0D0D0D] rounded-xl">
        <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <HeadingOne text="Low Stock Products" />
            <Paragragh para="Real-time data on product and manage products." />
          </div>

          <div className="flex flex-col sm:flex-row max-sm:flex-col sm:items-center gap-3">
            <SearchInput />
            <div className="flex gap-2 justify-start sm:justify-end">
              <Export BtnName="Filter" icon={FiDownload} />
              <Export BtnName="Export" icon={FiFilter} />
            </div>
          </div>
        </div>

        <div>
          <LogisticTable BtnText={"View Details"} />
        </div>
      </div>
    </div>
  );
};

export default LogisticMain;
