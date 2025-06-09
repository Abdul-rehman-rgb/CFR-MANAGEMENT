import React, { useState } from "react";
import ProductHeader from "../../../components/common/ProductHeader";
import Icon from "../../../icons/producticon1.svg";
import ProductCard from "../../../components/common/ProductCard";

const ProductMain = () => {
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
          onExport={handleExport}
          onRefresh={handleRefresh}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
      <div className="col-span-12 space-y-6">
        <div className="flex flex-row gap-4">
          <ProductCard
            title="Total SKUs"
            amount="25"
            subtitle="8 less than last month"
            icon={<img src={Icon} alt="icon" />}
            iconBgColor="#5D5FEF"
            iconWrapperClassName="w-[40px] h-[40px] flex items-center justify-center"
          />
          <ProductCard
            title="Total SKUs"
            amount="25"
            subtitle="8 less than last month"
            icon={<img src={Icon} alt="icon" />}
            iconBgColor="#5D5FEF"
            iconWrapperClassName="w-[40px] h-[40px] flex items-center justify-center"
          />
          <ProductCard
            title="Total SKUs"
            amount="25"
            subtitle="8 less than last month"
            icon={<img src={Icon} alt="icon" />}
            iconBgColor="#5D5FEF"
            iconWrapperClassName="w-[40px] h-[40px] flex items-center justify-center"
          />
          <ProductCard
            title="Total SKUs"
            amount="25"
            subtitle="8 less than last month"
            icon={<img src={Icon} alt="icon" />}
            iconBgColor="#5D5FEF"
            iconWrapperClassName="w-[40px] h-[40px] flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
