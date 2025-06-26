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
import GenerateManuallyMain from "./GenerateInvoiceModal/GenerateManuallyMain";
import UpdateInventoryMain from "./UpdateInventory/UpdateInventoryMain";

// import GenerateManuallyFirstStep from "./GenerateInvoiceModal/GenerateManuallyFirstStep";
// import GenerateManuallySecondStep from "./GenerateInvoiceModal/GenerateManuallySecondStep";
// import GenerateManuallyThirdStep from "./GenerateInvoiceModal/GenerateManuallyThirdStep";

// Dummy Components for new modals
// const GenerateInvoiceModal = () => <div>Generate Invoices</div>;
// const UpdateInventoryModal = () => <div>Updated Inventory</div>;

export default function QuickAction() {
  const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(0);
  const [currentModal, setCurrentModal] = useState("");

  const stepLabelsOrder = ["", "", "", "", "", "", ];
  // const stepLabelsInvoice = ["stepLabelsInvoice", "", "stepLabelsInvoice", "", "", "Create Order", ];
  // const stepLabelsInventory = ["stepLabelsInventory", "stepLabelsInventory", "stepLabelsInventory", "", "", "Create Order", ];

  const nextButtonLabelsOrder = [
  "Next",       // step 0
  "Next",   // step 1
  "Next",    // step 2
  "Next",       // step 3
  "Next",       // step 4
  "Create Order",    // step 5
  "View Delivery note"            // step 6 — no "Next" here
];

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
          className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2"
          text="Add new order"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={() => handleOpenModal("order")}
        />
        <ColorFull 
        className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2"
          text="Generate Invoices"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={() => handleOpenModal("invoice")}
        />
        <ColorFull
        className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2"

          text="Updated Inventory"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={() => handleOpenModal("inventory")}
        />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[725px] m-4">
        
        {/* Add new order Modal View start*/}
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
            {step > 0 && step < 6  && (
              <span className="absolute top-[22px] left-5 w-[34px] flex items-center gap-2 text-sm font-medium cursor-pointer" onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              // <Button className="absolute top-[10px] left-0 w-[50px] mx-5 my-1 bg-gray-200 text-black" size="sm" onClick={handleBack}>
              //   Back
              // </Button>
            )}

            {step < 6 && (
              <Button className="primary w-full mx-4" size="sm" onClick={handleNext}>
                {nextButtonLabelsOrder[step] || "Next"}
              </Button>
            )}

            {step === 6 && (
              <Button className="w-full mx-4 my-1" size="sm" onClick={handleSave}>
                View in Order Management
              </Button>
            )}

            {stepLabelsOrder[step] && (
              <Button className=" w-full bg:hover-red mx-5 my-1" size="sm">
                {stepLabelsOrder[step]}
              </Button>
            )}
          </div>
        )}

        {/* Add new Generate Invoice Modal View start*/}

        {currentModal === "invoice" && (
          <>
            {step === 0 && <GenerateManuallyMain />}
          </>
        )}
       
        {/* Add new Update Inventory Modal View start*/}

           {currentModal === "inventory" && (
          <>
            {step === 0 && <UpdateInventoryMain />}
            
          </>
        )}
         {currentModal === "inventory" && (
          <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
            {step == 0 && (
              <Button className="w-full mx-5 my-1 text-black" size="sm" onClick={handleSave}>
                Cancel
              </Button>
            )}

            {/* {step < 2 && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm" onClick={handleNext}>
                Next
              </Button>
            )} */}

            {step === 0 && (
              <Button className="w-full mx-5 my-1" size="sm" onClick={handleSave}>
                Save
              </Button>
            )}

            {/* {stepLabelsInventory[step] && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm">
                {stepLabelsInventory[step]}
              </Button>
            )} */}
          </div>
        )}

          {/* Add new Update Inventory Modal View end*/}

      </Modal>
    </div>
  );
}
