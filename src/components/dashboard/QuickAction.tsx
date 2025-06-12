import { SetStateAction, useState } from "react";
import { FiPlus } from "react-icons/fi";
import ColorFull from "../ui/button/ColorFull";
import HeadingFour from "../ui/heading/HeadingFour";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";

import ProductTableModal from "./ProductTableModal";
import ShippingTableModal from "./ShippingTableModal";
import ConfitmDelivery from "./ConfrimDeliveryModal";
import MultiProductSelection from "./MultiProductSelection";
import ContactAddress from "./AddNewOrderModal/ContactAddress";
import DateTime from "./AddNewOrderModal/DateTime";
import OrderCreatedSuccess from "./AddNewOrderModal/OrderCreatedSuccess";

// Dummy Components for new modals
const GenerateInvoiceModal = () => <div>Generate Invoices</div>;
const UpdateInventoryModal = () => <div>Updated Inventory</div>;

export default function QuickAction() {
  const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(0);
  const [currentModal, setCurrentModal] = useState("");

  const stepLabels = ["", "Continue to Shipping", "Confirm Delivery Details", "Save Order", ""];

  const handleSave = () => {
    console.log("Saving...");
    closeModal();
    setStep(0);
    setCurrentModal("");
  };

  const handleOpenModal = (type: SetStateAction<string>) => {
    setCurrentModal(type);
    setStep(0);
    openModal();
  };

  const handleBack = () => setStep((prev) => prev - 1);
  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div className="QuickActionMain px-4 py-4">
      <HeadingFour text="Quick Actions" />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ColorFull
          text="Add new order"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={() => handleOpenModal("order")}
        />
        <ColorFull
          text="Generate Invoices"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={() => handleOpenModal("invoice")}
        />
        <ColorFull
          text="Updated Inventory"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={() => handleOpenModal("inventory")}
        />
      </div>

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

        {currentModal === "invoice" && <GenerateInvoiceModal />}
        {currentModal === "inventory" && <UpdateInventoryModal />}

        {currentModal === "order" && (
          <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
            {step > 0 && (
              <Button className="w-full mx-5 my-1 bg-gray-200 text-black" size="sm" onClick={handleBack}>
                Back
              </Button>
            )}

            {step < 6 && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm" onClick={handleNext}>
                Next
              </Button>
            )}

            {step === 6 && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm" onClick={handleSave}>
                Save
              </Button>
            )}

            {stepLabels[step] && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm">
                {stepLabels[step]}
              </Button>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
