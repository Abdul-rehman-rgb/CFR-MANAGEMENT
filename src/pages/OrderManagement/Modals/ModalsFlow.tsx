import { SetStateAction, useState } from "react";
import { FiArrowDown, FiDownload, FiPlus } from "react-icons/fi";
import ColorFull from "../../../components/ui/button/ColorFull";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../../components/ui/modal";
import Button from "../../../components/ui/button/Button";

import ProductTableModal from "../../../components/dashboard/ProductTableModal";
import ShippingTableModal from "../../../components/dashboard/ShippingTableModal";
import MultiProductSelection from "../../../components/dashboard/MultiProductSelection";
import GenerateManuallyFirstStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallyFirstStep";
import GenerateManuallySecondStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallySecondStep";
import Export from "../../../components/ui/button/Export";
import SalesInvoiceModal from "../../../components/dashboard/SalesInvoiceModal";
import Payment from "../../../components/dashboard/Payment";
import RecordPayment from "../../../components/dashboard/RecordPayment";

// Dummy Components for new modals
// const GenerateInvoiceModal = () => <div>Generate Invoices</div>;
// const UpdateInventoryModal = () => <div>Updated Inventory</div>;

export default function ModalsFlow() {
  const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(0);
  const [currentModal, setCurrentModal] = useState("");

  const stepLabelsOrder = ["", "", "", "", "", "", ];
  const stepLabelsInvoice = ["stepLabelsInvoice", "", "stepLabelsInvoice", "", "", "Create Order", ];
  const stepLabelsInventory = ["stepLabelsInventory", "stepLabelsInventory", "stepLabelsInventory", "", "", "Create Order", ];

  const nextButtonLabelsOrder = [
  "Next",       // step 0
  "Next",   // step 1
  "Next",    // step 2
  "Next",       // step 3
  "Next",       // step 4
  "Create Order",    // step 5
  "View Delivery note"            // step 6 — no "Next" here
];


  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Export
            BtnName="Export"
            icon={FiDownload}
            onClick={() => console.log("Export triggered")}
          />
          <Export
            BtnName="In Transit"
            icon={FiArrowDown}
            onClick={() => console.log("Transit triggered")}
          />
          <ColorFull
            onClick={() => handleOpenModal("invoice")}
            text="Generate Invoice"
            icon={FiPlus}
            bgColor="bg-[#5D5FEF]"
            textColor="text-white"
          />
          </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[725px] m-4">
        
        {/* Add new Generate Invoice Modal View start*/}

        {currentModal === "invoice" && (
          <>
            {step === 0 && <GenerateManuallyFirstStep />}
            {step === 1 && <GenerateManuallySecondStep />}
            {step === 2 && <SalesInvoiceModal />}
            {step === 3 && <Payment />}
            {step === 4 && <RecordPayment />}
          </>
        )}
        {currentModal === "invoice" && (
          <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
            {step > 0 && (
              <Button className="w-full mx-5 my-1 bg-gray-200 text-black" size="sm" onClick={handleBack}>
                Back
              </Button>
            )}

            {step < 3 && (
              <Button className="w-full bg-[#5D5FEF] bg:hover-red mx-5 my-1" size="sm" onClick={handleNext}>
                Next
              </Button>
            )}

            {step === 2 && (
              <Button className="w-full text-[#5D5FEF] bg:hover-red mx-5 my-1" size="sm" onClick={handleNext}>
                Save
              </Button>
            )}

            {step === 3 && (
              <Button className="w-full text-[#5D5FEF] bg:hover-red mx-5 my-1" size="sm" onClick={handleNext}>
                Record Payment
              </Button>
            )}

            {/* {stepLabelsInvoice[step] && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm">
                {stepLabelsInvoice[step]}
              </Button>
            )} */}
          </div>
        )}

        {/* Add new Generate Invoice Modal View end*/}

        {/* Add new Update Inventory Modal View start*/}

           {currentModal === "inventory" && (
          <>
            {step === 0 && <MultiProductSelection />}
            {step === 1 && <ProductTableModal />}
            {step === 2 && <ShippingTableModal />}
          </>
        )}
         {currentModal === "inventory" && (
          <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
            {step > 0 && (
              <Button className="w-full mx-5 my-1 bg-gray-200 text-black" size="sm" onClick={handleBack}>
                Back
              </Button>
            )}

            {step < 2 && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm" onClick={handleNext}>
                Next
              </Button>
            )}

            {step === 2 && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm" onClick={handleSave}>
                Save
              </Button>
            )}

            {stepLabelsInventory[step] && (
              <Button className="w-full bg:hover-red mx-5 my-1" size="sm">
                {stepLabelsInventory[step]}
              </Button>
            )}
          </div>
        )}

          {/* Add new Update Inventory Modal View end*/}

      </Modal>
    </div>
  );
}
