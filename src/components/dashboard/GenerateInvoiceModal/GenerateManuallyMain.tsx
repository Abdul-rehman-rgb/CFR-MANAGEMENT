/* eslint-disable @typescript-eslint/no-unused-vars */
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import Form from "../../form/Form";
import FileUploadDropZone from "../../common/FileUploadDropZone";
import TextArea from "../../form/input/TextArea";
import { useEffect, useState } from "react";
import DatePicker from "../../form/date-picker";
import GenerateManuallyFirstStep from "./GenerateManuallyFirstStep";
import GenerateManuallySecondStep from "./GenerateManuallySecondStep";
import GenerateManuallyThirdStep from "./GenerateManuallyThirdStep";
import Button from "../../ui/button/Button";
import SalesInvoice from "./SalesInvoice";
import OrderCreatedSuccess from "../AddNewOrderModal/OrderCreatedSuccess";
import Payment from "./Payment";

const TabsMain = () => {
  const Tabs = {
    manual: "Generate manually",
    upload: "Upload file",
  } as const;

  type TabKey = keyof typeof Tabs;

  /** which tab is visible */
  const [activeTab, setActiveTab] = useState<TabKey>("manual");
  const [stepManual, setStepManual] = useState(0); // 0‑1‑2‑3
  const [stepUpload, setStepUpload] = useState(0); // 0‑1
  const [stepSalesInvoice , setStepSalesInvoice] = useState(0);

  const currentStep = activeTab === "manual" ? stepManual : stepUpload;
  const setCurrentStep = activeTab === "manual" ? setStepManual : setStepUpload;
  const stepLabelsManual = ["Draft", "Review", "Confirm", "Invoice"];
  const stepLabelsUpload = ["Upload", "Invoice"];
  const stepLabels =
    activeTab === "manual" ? stepLabelsManual : stepLabelsUpload;

  useEffect(() => {
    setCurrentStep(0);
  }, [activeTab]);

  const handleSubmit = () => console.log("Submitting form...");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    console.log("Saving...");
  };

  // Determine whether to hide tab buttons and show SalesInvoice standalone
  const hideTabs =
    (activeTab === "manual" && stepManual === 3) ||
    (activeTab === "upload" && stepUpload === 1);
  const showSalesInvoice =
    (activeTab === "manual" && stepManual === 3) ||
    (activeTab === "upload" && stepUpload === 1);

  // Remove heading if SalesInvoice is shown
  const showHeading = !showSalesInvoice;


  return (
    <div>
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 ">
      {showHeading && (
        <div className="py-6 px-6 pr-14">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Generate Invoice
          </h4>
        </div>
      )}

      <div className="flex flex-col px-3">
        {/* Only show tabs if not hidden */}
        {!hideTabs && (
          <div className="flex gap-1 mb-4">
            {Object.entries(Tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as TabKey)}
                className={`w-1/2 py-1.5 text-sm rounded
                  ${
                    activeTab === key
                      ? "text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
                      : "text-[#8E8E9C] hover:text-[#151D48]"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* MANUAL tab content */}
        {activeTab === "manual" && !showSalesInvoice && (
          <>
            {stepManual === 0 && <GenerateManuallyFirstStep />}
            {stepManual === 1 && <GenerateManuallySecondStep />}
            {stepManual === 2 && <GenerateManuallyThirdStep />}
            {/* stepManual === 3 handled separately below */}
          </>
        )}

        {/* UPLOAD tab content */}
        {activeTab === "upload" && !showSalesInvoice && (
          <>
            {stepUpload === 0 && <FileUploadDropZone />}
            {/* stepUpload === 1 handled separately below */}
          </>
        )}
      </div>

      {/* navigation buttons, only show if not on standalone SalesInvoice */}
      {!showSalesInvoice && (
        <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
          {currentStep > 0 && (
            <Button
              className="w-full mx-5 my-1 bg-gray-200 text-black"
              size="sm"
              onClick={() => setCurrentStep((s) => s - 1)}
            >
              Back
            </Button>
          )}

          {/* Adjust next step limits for both tabs */}
          {((activeTab === "manual" && currentStep < 3) ||
            (activeTab === "upload" && currentStep < 1)) && (
            <Button
              className="w-full bg-[#5D5FEF] mx-5 my-1"
              size="sm"
              onClick={() => setCurrentStep((s) => s + 1)}
            >
              Next
            </Button>
          )}

          {/* Only on the last step for manual */}
          {activeTab === "manual" && currentStep === 3 && (
            <Button className="w-full mx-5 my-1" size="sm" onClick={handleSave}>
              Save
            </Button>
          )}

          {/* optional label button */}
          <Button className="w-full mx-5 my-1" size="sm">
            {stepLabels[currentStep]}
          </Button>
        </div>
      )}

    
      
    </div>

    <div className="SalesInvoice">
        {/* Show SalesInvoice standalone if on step 3 manual or step 1 upload */}
      {showSalesInvoice && (
        <div className="">
          <>
            {stepSalesInvoice === 0 && <SalesInvoice />}
            {stepSalesInvoice === 1 && <Payment />}
          </>
          
           <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
           <Button
              className="w-full bg-[#5D5FEF] mx-5 my-1"
              size="sm"
              onClick={() => setStepSalesInvoice((s) => s + 1)}
            >
              Next
            </Button>

            <Button
              className="w-full bg-[#5D5FEF] mx-5 my-1"
              size="sm"
              onClick={() => setStepSalesInvoice((s) => s - 1)}
            >
              Back
            </Button>
            </div>
        </div>
      )}
    </div>

    </div>
  );
};

export default TabsMain;