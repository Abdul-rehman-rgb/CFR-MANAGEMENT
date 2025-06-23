import React, { useState } from "react";
import ProductHeader from "../../../components/common/ProductHeader";
import Icon from "../../../icons/producticon1.svg";
import ProductCard from "../../../components/common/ProductCard";
import Tabs from "../component/Tabs";
import SalesTrendsRevenueChart from "../component/SalesTrendRevenueChart";
import AIPoweredSuggestions from "../../../components/common/AIPoweredSuggestions";

const ProductMain = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6">
          <ProductHeader
            heading="Product Management"
            onExport={handleExport}
            onRefresh={handleRefresh}
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>
        <div className="col-span-12 space-y-6 mb-4">
          <div className="flex flex-row gap-4">
            <ProductCard
              title="Orders"
              amount="42"
              subtitle="This month"
              icon={<img src={Icon} alt="icon" />}
            />
            <ProductCard
              title="Orders"
              amount="42"
              subtitle="This month"
              icon={<img src={Icon} alt="icon" />}
              navigateTo="/productManagement/low-stock"
            />

            <ProductCard
              title="Total SKUs"
              amount="25"
              subtitle="8 less than last month"
              icon={<img src={Icon} alt="icon" />}
              navigateTo="/productManagement/out-of-stock"

            />
            <ProductCard
              title="Total SKUs"
              amount="25"
              subtitle="8 less than last month"
              icon={<img src={Icon} alt="icon" />}
              navigateTo="/productManagement/near-expiry"
            />
          </div>
        </div>
      </div>
      <Tabs />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 ">
          <SalesTrendsRevenueChart />
        </div>
        <div className="col-span-4 ">
          <AIPoweredSuggestions/>
        </div>
      </div>
    </>
  );
};

export default ProductMain;
