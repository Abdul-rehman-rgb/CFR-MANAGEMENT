import { useState } from "react";
import SearchInput from "../../../../components/form/SearchInput";
import HeadingOne from "../../../../components/ui/heading/HeadinhOne";
import { FiDownload, FiFilter, FiPlus } from "react-icons/fi";
import Export from "../../../../components/ui/button/Export";
import Paragragh from "../../../../components/ui/Paragrapg";
import ColorFull from "../../../../components/ui/button/ColorFull";
import StockTable from "../../../Tables/ProductManagement/StockTable";
import { Modal } from "../../../../components/ui/modal";
import Button from "../../../../components/ui/button/Button";
import OutlineBtn from "../../../../components/ui/button/OutLine";
import Label from "../../../../components/form/Label";
import FileInput from "../../../../components/form/input/FileInput";
import Form from "../../../../components/form/Form";

import BarcodeModal from "../modals/BarcodeModal";
import LogisticModal from "../modals/LogisticModal";
import PricingModal from "../modals/PricingModal";
import ProductDetailModal from "../modals/ProductDetailModal";
import DimensionModal from "../modals/DimensionModal";

const StepButtons = ({ onNext, onBack }) => (
  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between mt-4">
    <Button
      variant="outline"
      onClick={onBack}
      className="w-full border-[#5D5FEF]"
    >
      Back
    </Button>
    <Button
      variant="primary"
      onClick={onNext}
      className="w-full bg-[#5D5FEF]"
    >
      Save & Continue
    </Button>
  </div>
);

const StockManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingOne text="Stock Management" />
            <Paragragh para="Real-time data on product and manage products." />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export BtnName="Filter" icon={FiDownload} />
              </div>
              <div className="mr-2">
                <Export BtnName="Export" icon={FiFilter} />
              </div>
              <ColorFull
                text="Add Product"
                icon={FiPlus}
                bgColor="bg-[#5D5FEF]"
                textColor="text-white"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>

        <div>
          <StockTable BtnTextTwo="Delete" />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-w-3xl p-6"
        showCloseButton={false}
      >
        {currentStep === 1 && (
          <div className="pt-4">
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
                <StepButtons
                  onNext={() => setCurrentStep(2)}
                  onBack={() => setIsModalOpen(false)}
                />
              </Form>
            )}

            {activeTab === "Tab2" && (
              <div className="space-y-4">
                <Label htmlFor="upload-file">Upload Stock</Label>
                <FileInput id="upload-file" accept=".csv, .xlsx" />
                <StepButtons
                  onNext={() => setCurrentStep(2)}
                  onBack={() => setIsModalOpen(false)}
                />
              </div>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <>
            <HeadingOne text="Assign Customer & Pricing" />
            <PricingModal />
            <StepButtons onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />
          </>
        )}

        {currentStep === 3 && (
          <>
            <HeadingOne text="Logistic Detail" />
            <LogisticModal />
            <StepButtons onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />
          </>
        )}

        {currentStep === 4 && (
          <>
            <HeadingOne text="Barcodes" />
            <BarcodeModal />
            <StepButtons onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />
          </>
        )}

        {currentStep === 5 && (
          <>
            <HeadingOne text="Dimensions & Weight" />
            <DimensionModal />
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(4)}
                className="w-full border-[#5D5FEF]"
              >
                Back
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setCurrentStep(1);
                  setIsModalOpen(false);
                }}
                className="w-full bg-[#5D5FEF]"
              >
                Finish
              </Button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default StockManagement;
