import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import HeadingFour from "../../../../components/ui/heading/HeadingFour";
import HeadingOne from "../../../../components/ui/heading/HeadinhOne";
import ColorFull from "../../../../components/ui/button/ColorFull";
import Button from "../../../../components/ui/button/Button";
import OutlineBtn from "../../../../components/ui/button/OutLine";
import { Modal } from "../../../../components/ui/modal";
import Form from "../../../../components/form/Form";
import FileInput from "../../../../components/form/input/FileInput";
import Label from "../../../../components/form/Label";
import {useModal} from "../../../../hooks/useModal";
import ProductDetailModal from "./ProductDetailModal";

export default function ModalsJourney() {
  const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(0);
  const [currentModal, setCurrentModal] = useState("");
  const [activeTab, setActiveTab] = useState("Tab1");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const stepLabelsOrder = ["", "", "", "", "", "", ""];
  const stepLabelsInvoice = ["stepLabelsInvoice", "", "stepLabelsInvoice"];
  const stepLabelsInventory = [
    "stepLabelsInventory",
    "stepLabelsInventory",
    "stepLabelsInventory",
  ];

  const handleSave = () => {
    console.log("Saving...");
    closeModal();
    setStep(0);
    setCurrentModal("");
  };

  const setIsModalOpen = (type) => {
    if (!type) {
      closeModal();
      return;
    }
    setCurrentModal(type);
    setStep(0);
    openModal();
  };

  const handleBack = () => setStep((prev) => prev - 1);
  const handleNext = () => setStep((prev) => prev + 1);

  const renderSteps = () => {
    switch (currentModal) {
      case "updateInventory":
        return <>{step === 0 && <ProductDetailModal />}</>;
      //   case "invoice":
      //     return (
      //       <>
      //         {step === 0 && <GenerateManuallyFirstStep />}
      //         {step === 1 && <GenerateManuallySecondStep />}
      //         {step === 2 && <ShippingTableModal />}
      //       </>
      //     );
      //   case "inventory":
      //     return (
      //       <>
      //         {step === 0 && <MultiProductSelection />}
      //         {step === 1 && <ProductTableModal />}
      //         {step === 2 && <ShippingTableModal />}
      //       </>
      //     );
      default:
        return null;
    }
  };

  const renderFooter = () => {
    const labelArray =
      currentModal === "updateInventory"
        ? stepLabelsOrder
        : currentModal === "invoice"
        ? stepLabelsInvoice
        : stepLabelsInventory;

    return (
      <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
        {step > 0 && step < labelArray.length && (
          <Button
            className="w-full mx-5 my-1 bg-gray-200 text-black"
            size="sm"
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        {step < labelArray.length - 1 && (
          <Button
            className="w-full bg-[#5D5FEF] text-white mx-5 my-1"
            size="sm"
            onClick={handleNext}
          >
            Next
          </Button>
        )}
        {step === labelArray.length - 1 && (
          <Button
            className="w-full bg-[#5D5FEF] text-white mx-5 my-1"
            size="sm"
            onClick={handleSave}
          >
            Save
          </Button>
        )}
        {labelArray[step] && (
          <Button className="w-full bg-gray-100 text-black mx-5 my-1" size="sm">
            {labelArray[step]}
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="QuickActionMain px-4 py-4">
      <HeadingFour text="Quick Actions" />

      <div className="pt-4">
        {/* Tabs */}
        <div className="flex justify-between gap-10 mb-4 border-b border-gray-200 font-medium">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`px-4 py-2 ${
              activeTab === "Tab1"
                ? "text-[#151D48]/80 border-b-2 border-[#5D5FEF]"
                : "text-[#151D48]/60"
            }`}
          >
            Update Manually
          </button>
          <button
            onClick={() => setActiveTab("Tab2")}
            className={`px-4 py-2 ${
              activeTab === "Tab2"
                ? "text-[#151D48]/80 border-b-2 border-[#5D5FEF]"
                : "text-[#151D48]/60"
            }`}
          >
            Upload File
          </button>
        </div>

        {activeTab === "Tab1" && (
          <Form className="space-y-5" onSubmit={() => {}}>
            <div className="flex justify-between items-start">
              <HeadingOne fontSize="text-[20px]" text="Update Inventory" />
              <div className="flex flex-col gap-2 sm:flex-row">
                <OutlineBtn
                  className="border-[1px] border-[#555555] text-[#555555] hover:bg-[#5D5FEF] hover:text-black"
                  BtnName="Add new Brand"
                />
                <OutlineBtn
                  className="bg-red-500 border border-[#22C55E] text-white hover:bg-[#22C55E] hover:text-white"
                  BtnName="Add new type"
                />
              </div>
            </div>
            <ProductDetailModal />
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="border-[1px] w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="border-[1px] w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
              >
                Save
              </Button>
            </div>
          </Form>
        )}

        {activeTab === "Tab2" && (
          <div className="space-y-4">
            <Label htmlFor="upload-file">Upload Stock</Label>
            <FileInput id="upload-file" accept=".csv, .xlsx" />
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="border-[1px] w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setIsModalOpen(false);
                  setShowConfirmationModal(true);
                }}
                className="border-[1px] w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ColorFull
          text="Add Product"
          icon={FiPlus}
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          onClick={() => setIsModalOpen("inventory")}
        />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[725px] m-4">
        {renderSteps()}
        {renderFooter()}
      </Modal>
    </div>
  );
}
