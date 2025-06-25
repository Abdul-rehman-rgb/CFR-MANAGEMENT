import React, { useState } from "react";
import OrderManagementHeader from "../../report/components/ReportHeader";
import { FiDollarSign } from "react-icons/fi";
import image from "../../../../public/images/icons/scale-icon.svg";
import CustomerCard from "../../report/components/ReportCard";
import Tabs from "../component/Tabs";
import { Modal } from "../../../components/ui/modal";
import ModalFlow from "../modals/ModalFlow";

const AccountMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

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

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");
  return (
    <>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <OrderManagementHeader
            headerTitle="Accounts"
            onExport={handleExport}
            onRefresh={handleRefresh}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onAddNewOrder={() => {
              setIsModalOpen(true);
            }}
          />
          {/* Modal for New Order */}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            className="max-w-[724px] p-6"
            showCloseButton={false}
          >
            <ModalFlow
              closeModal={handleCloseModal}
              step={currentStep}
              setStep={setCurrentStep}
              onSave={handleSave}
              onNext={handleNext}
              onBack={handleBack}
            />
          </Modal>
        </div>
        <div className="col-span-1 md:col-span-4 space-y-6">
          <div className="grid grid-cols-1 max-sm:justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <CustomerCard
                  key={i}
                  title="Total Revenue"
                  amount="$1,245"
                  subtitle="2% more than last year"
                  icon={<FiDollarSign className="text-[#22C55E]" size={15} />}
                  iconBgColor="bg-[#22C55E]/5"
                  iconWrapperClassName="dark:bg-[#27DA68]/5"
                  chart={
                    <img
                      src={image}
                      alt="Revenue Chart"
                      className="mt-2 h-auto"
                    />
                  }
                />
              ))}
          </div>
        </div>
      </div>
      <div>
        <Tabs />
      </div>
    </>
  );
};

export default AccountMain;
