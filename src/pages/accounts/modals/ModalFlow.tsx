import FileUploadDropZone from "../../../components/common/FileUploadDropZone";
import { useEffect, useState } from "react";
import GenerateManuallyFirstStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallyFirstStep";
import GenerateManuallySecondStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallySecondStep";
import GenerateManuallyThirdStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallyThirdStep";
import Button from "../../../components/ui/button/Button";
import SalesInvoice from "../../../components/dashboard/GenerateInvoiceModal/SalesInvoice";
import Payment from "../../../components/dashboard/GenerateInvoiceModal/Payment";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import GenerateInvoice from "../../../components/dashboard/GenerateInvoiceModal/GenerateInvoice";

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
  const [stepSalesInvoice, setStepSalesInvoice] = useState(0);

  const currentStep = activeTab === "manual" ? stepManual : stepUpload;
  const setCurrentStep = activeTab === "manual" ? setStepManual : setStepUpload;
  const stepLabelsManual = ["sss", "ssss", "Confirm", "Invoice"];
  const stepLabelsUpload = ["Upload", "Invoice"];
  const stepLabels =
    activeTab === "manual" ? stepLabelsManual : stepLabelsUpload;

  useEffect(() => {
    setCurrentStep(0);
  }, [activeTab]);

//   const handleSubmit = () => console.log("Submitting form...");
//   const [message, setMessage] = useState("");

//   const handleSave = () => {
//     console.log("Saving...");
//   };

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
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl dark:bg-gray-900">
        {showHeading && (
          <div className="py-6 px-6 pr-14">
            <HeadingTwo text="Generate Invoice" />
          </div>
        )}

        <div className="flex flex-col">
          {/* Only show tabs if not hidden */}
          {!hideTabs && (
            <div className="flex gap-1 mb-4">
              {Object.entries(Tabs).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as TabKey)}
                  className={`w-1/2 py-1.5 text-sm border-b-2 border-[#E5E5E5]
                  ${
                    activeTab === key
                      ? "text-[#5D5FEF] border-b-2 border-active-[#5D5FEF] focus:border-indigo-400"
                      : "text-[#8E8E9C] hover:text-[#151D48] "
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
              {stepManual === 1 && <GenerateInvoice />}
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
            {/* {activeTab === "manual" && currentStep === 3 && (
              <Button
                className="w-full mx-5 my-1"
                size="sm"
                onClick={handleSave}
              >
                Save
              </Button>
            )} */}

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
          <div>
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
