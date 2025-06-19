import React, { useState } from "react";
import LogisticCard from "../../Logistics/components/LogisticCard";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import { FiDownload, FiFilter } from "react-icons/fi";
import Icon from "../../../icons/producticon1.svg";
import TransitIcon from "../../../icons/transit.svg";
import DelayIcon from "../../../icons/delay.svg";
import SuccessIcon from "../../../icons/success.svg";
import OrderTable from "../component/OrderTable";
import OrderManagementHeader from "../../../components/common/OrderManagementHeader";
import { Modal } from "../../../components/ui/modal";
import NewOrderModalView from "../component/NewOrderModalView";
import StackedAreaChart from "../../../components/charts/stacked/StackedAreaChart";
import BarChartTwo from "../../../components/charts/bar/BarChartTwo";

const OrderMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(0);
  };

  const handleSave = () => {
    console.log("Save and Submit Order");
    handleCloseModal();
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
        {/* Header Section */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <OrderManagementHeader
            onExport={handleExport}
            onRefresh={handleRefresh}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onAddNewOrder={() => setIsModalOpen(true)} // <-- pass this
          />
        </div>

        {/* Modal for New Order */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          className="max-w-[724px] p-6"
          showCloseButton={false}
        >
          <NewOrderModalView
            closeModal={handleCloseModal}
            step={currentStep}
            setStep={setCurrentStep}
            onSave={handleSave}
            onNext={handleNext}
            onBack={handleBack}
          />
        </Modal>

        {/* Logistic Cards */}
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
            <OrderTable
              BtnText={"Order Details"}
              BtnTextTwo={"Delivery Note"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        <StackedAreaChart Title={"Demand Prediction"} />
        <BarChartTwo />

      </div>
    </>
  );
};

export default OrderMain;
