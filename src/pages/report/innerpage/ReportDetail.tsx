import React, { useState } from "react";
import StockTable from "../../Tables/ProductManagement/StockTable";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiDownload, FiFilter } from "react-icons/fi";
import LogisticCard from "../../Logistics/components/LogisticCard";
import Icon from "../../../icons/producticon1.svg";
import TransitIcon from "../../../icons/transit.svg";
import DelayIcon from "../../../icons/delay.svg";
import SuccessIcon from "../../../icons/success.svg";
import OrderManagementHeader from "../components/ReportHeader";
import StackedAreaChart from "../../../components/charts/stacked/StackedAreaChart";
import BarChartTwo from "../../../components/charts/bar/BarChartTwo";

const ReportDetail = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleRefresh = () => {
    console.log("Refreshing data...");
  };
  const handleExport = () => {
    console.log("handleExport data...");
  };
  return (
    <>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <OrderManagementHeader
            headerTitle="Reporting : Sale Report 1"
            onExport={handleExport}
            onRefresh={handleRefresh}
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>

        <div className="col-span-1 md:col-span-4 space-y-6 mb-4">
          <div className="flex flex-row max-sm:flex-col gap-4 justify-between">
            <LogisticCard
              para="Total Delivery"
              value="1,245"
              progress={false}
              showProgress={false}
              Icon={Icon}
            />
            <LogisticCard
              para="In Transit"
              value="512"
              showProgress={false}
              green={false}
              customText={false}
              Icon={TransitIcon}
            />
            <LogisticCard
              para="Delivery Delayed"
              value="78"
              showProgress={false}
              green={false}
              customText={false}
              Icon={DelayIcon}
            />
            <LogisticCard
              para="Delivery Success"
              value="92%"
              showProgress={false}
              green={false}
              customText={false}
              Icon={SuccessIcon}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingOne text="Report Detail" />
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
          <StockTable />
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        <StackedAreaChart Title="Sales Performance" />
        <BarChartTwo />
      </div>
    </>
  );
};

export default ReportDetail;
