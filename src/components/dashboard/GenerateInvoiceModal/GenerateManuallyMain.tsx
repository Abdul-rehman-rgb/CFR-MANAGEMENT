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

const TabsMain = () => {
  const Tabs = {
    manual: "Generate manually",
    upload: "Upload file",
  } as const;

  type TabKey = keyof typeof Tabs;

  /** which tab is visible */
  const [activeTab, setActiveTab] = useState<TabKey>("manual");
  const [stepManual, setStepManual] = useState(0); // 0‑1‑2
  const [stepUpload, setStepUpload] = useState(0); // 0‑1‑2 (or however many)

  const currentStep = activeTab === "manual" ? stepManual : stepUpload;
  const setCurrentStep = activeTab === "manual" ? setStepManual : setStepUpload;
  const stepLabelsManual = ["Draft", "Review", "Confirm"];
  const stepLabelsUpload = ["Upload", "Validate", "Confirm"];
  const stepLabels =
    activeTab === "manual" ? stepLabelsManual : stepLabelsUpload;

  useEffect(() => {
    setCurrentStep(0);
  }, [activeTab]);
  // const tabs = ["Generate manually", "Upload file"];

  const handleSubmit = () => console.log("Submitting form...");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    console.log("Saving...");
  };

  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
      <div className="px-2 pr-14">
        <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
          Generate Invoice
        </h4>
      </div>
      <div className="flex flex-col px-3">
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

        {/* MANUAL tab content */}
        {activeTab === "manual" && (
          <>
            {stepManual === 0 && <GenerateManuallyFirstStep />}
            {stepManual === 1 && <GenerateManuallySecondStep />}
            {stepManual === 2 && <GenerateManuallyThirdStep />}
            {stepManual === 3 && <SalesInvoice />}

          </>
        )}

        {/* UPLOAD tab content */}
        {activeTab === "upload" && (
          <>
            {stepUpload === 0 && <FileUploadDropZone />}
            {stepUpload === 1 && <SalesInvoice />}
          </>
        )}
      </div>

      {/* navigation buttons */}
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

        {currentStep < 3 && (
          <Button
            className="w-full bg-[#5D5FEF] mx-5 my-1"
            size="sm"
            onClick={() => setCurrentStep((s) => s + 1)}
          >
            Next
          </Button>
        )}

        {currentStep === 3 && (
          <Button className="w-full mx-5 my-1" size="sm" onClick={handleSave}>
            Save
          </Button>
        )}

        {/* optional label button */}
        <Button className="w-full mx-5 my-1" size="sm">
          {stepLabels[currentStep]}
        </Button>
      </div>
    </div>
  );
};

export default TabsMain;
