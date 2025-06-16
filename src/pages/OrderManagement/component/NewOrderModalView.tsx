// components/dashboard/AddNewOrderModal/NewOrderModalView.tsx


import React from "react";
import MultiProductSelection from "../../../components/dashboard/MultiProductSelection";
import ProductTableModal from "../../../components/dashboard/ProductTableModal";
import ShippingTableModal from "../../../components/dashboard/ShippingTableModal";
import ConfitmDelivery from "../../../components/dashboard/ConfrimDeliveryModal";
import Button from "../../../components/ui/button/Button";
import DateTime from "../../../components/dashboard/AddNewOrderModal/DateTime";
import ContactAddress from "../../../components/dashboard/AddNewOrderModal/ContactAddress";
import OrderCreatedSuccess from "../../../components/dashboard/AddNewOrderModal/OrderCreatedSuccess";


type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  closeModal: () => void;
};

const nextButtonLabelsOrder = [
  "Next", "Next", "Next", "Next", "Next", "Create Order", "View Delivery note"
];

const NewOrderModalView = ({ step, setStep, closeModal }: Props) => {
  const handleBack = () => setStep((prev) => prev - 1);
  const handleNext = () => setStep((prev) => prev + 1);
  const handleSave = () => {
    closeModal();
    setStep(0);
  };

  const renderStep = () => {
    switch (step) {
      case 0: return <MultiProductSelection />;
      case 1: return <ProductTableModal />;
      case 2: return <ShippingTableModal />;
      case 3: return <ContactAddress />;
      case 4: return <DateTime />;
      case 5: return <ConfitmDelivery />;
      case 6: return <OrderCreatedSuccess />;
      default: return null;
    }
  };

  return (
    <>
      {renderStep()}

      <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
        {step > 0 && step < 6 && (
          <span
            className="absolute top-[22px] left-5 w-[34px] flex items-center gap-2 text-sm font-medium cursor-pointer"
            onClick={handleBack}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        )}

        {step < 6 && (
          <Button className="primary w-full mx-4" size="sm" onClick={handleNext}>
            {nextButtonLabelsOrder[step]}
          </Button>
        )}

        {step === 6 && (
          <Button className="w-full mx-4 my-1" size="sm" onClick={handleSave}>
            View in Order Management
          </Button>
        )}
      </div>
    </>
  );
};

export default NewOrderModalView;
