import { SetStateAction, useState } from "react";
import { FiArrowDown, FiDownload, FiPlus } from "react-icons/fi";
import ColorFull from "../../../components/ui/button/ColorFull";
import HeadingFour from "../../../components/ui/heading/HeadingFour";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../../components/ui/modal";
import Button from "../../../components/ui/button/Button";

import ProductTableModal from "../../../components/dashboard/ProductTableModal";
import ShippingTableModal from "../../../components/dashboard/ShippingTableModal";
import ConfitmDelivery from "../../../components/dashboard/ConfrimDeliveryModal";
import MultiProductSelection from "../../../components/dashboard/MultiProductSelection";
import ContactAddress from "../../../components/dashboard/AddNewOrderModal/ContactAddress";
import DateTime from "../../../components/dashboard/AddNewOrderModal/DateTime";
import OrderCreatedSuccess from "../../../components/dashboard/AddNewOrderModal/OrderCreatedSuccess";
import GenerateManuallyFirstStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallyFirstStep";
import GenerateManuallySecondStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallySecondStep";
import Export from "../../../components/ui/button/Export";

export default function ModalsJourney() {
  const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(0);
  const [currentModal, setCurrentModal] = useState("");

  const stepLabelsOrder = ["", "", "", "", "", ""];
  const stepLabelsInvoice = [
    "stepLabelsInvoice",
    "",
    "stepLabelsInvoice",
    "",
    "",
    "Create Order",
  ];
  const stepLabelsInventory = [
    "stepLabelsInventory",
    "stepLabelsInventory",
    "stepLabelsInventory",
    "",
    "",
    "Create Order",
  ];

  const nextButtonLabelsOrder = [
    "Next", // step 0
    "Next", // step 1
    "Next", // step 2
    "Next", // step 3
    "Next", // step 4
    "Create Order", // step 5
    "View Delivery note", // step 6 — no "Next" here
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    console.log("Saving...");
    closeModal();
    setStep(0);
    setCurrentModal("");
  };

  //   const onCustomize = () => {
  //   console.log("Customize triggered");
  //   setIsModalOpen(true);
  // };

  const handleOpenModal = (type: SetStateAction<string>) => {
    setCurrentModal(type);
    setStep(0);
    openModal();
  };

  const handleBack = () => setStep((prev) => prev - 1);
  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div className="QuickActionMain px-4 py-4">
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[725px] m-4">
        {currentModal === "order" && (
          <>
            {step === 0 && <MultiProductSelection />}
            {step === 1 && <ProductTableModal />}
            {step === 2 && <ShippingTableModal />}
            {step === 3 && <ContactAddress />}
            {step === 4 && <DateTime />}
            {step === 5 && <ConfitmDelivery />}
            {step === 6 && <OrderCreatedSuccess />}
          </>
        )}
        {currentModal === "order" && (
          <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
            ...
          </div>
        )}
      </Modal>
    </div>
  );
}
