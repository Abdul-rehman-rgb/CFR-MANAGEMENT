import FileUploadDropZone from "../../../components/common/FileUploadDropZone";
import { useEffect, useState } from "react";
import GenerateManuallyFirstStep from "../../../components/dashboard/GenerateInvoiceModal/GenerateManuallyFirstStep";
import Button from "../../../components/ui/button/Button";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import GenerateInvoice from "../../../components/dashboard/GenerateInvoiceModal/GenerateInvoice";
import GenerateInvoiceThirdStep from "./GenerateInvoiceThirdStep";
import GenerateInvoiceFourthStep from "./GenerateInvoiceFouthStep";
import GenerateInvoiceFifthStep from "./GenerateInvoiceFifthStep";
import GenerateInvoiceSixthStep from "./GenerateInvoiceSixthStep";
import Payment from "../../../components/dashboard/GenerateInvoiceModal/Payment";
import GenerateInvoiceSeven from "./GenerateInvoiceSeven";

const TabsMain = () => {
  const Tabs = {
    manual: "Generate manually",
    upload: "Upload file",
  } as const;

  type TabKey = keyof typeof Tabs;

  const [activeTab, setActiveTab] = useState<TabKey>("manual");
  const [stepManual, setStepManual] = useState(0);
  const [stepUpload, setStepUpload] = useState(0);
  const [stepSalesInvoice, setStepSalesInvoice] = useState(0);

  const currentStep = activeTab === "manual" ? stepManual : stepUpload;
  const setCurrentStep = activeTab === "manual" ? setStepManual : setStepUpload;
  const stepLabelsManual = ["Details", "Items", "Confirm", "Review", "Invoice"];
  const stepLabelsUpload = ["Upload", "Invoice"];
  const stepLabels = activeTab === "manual" ? stepLabelsManual : stepLabelsUpload;

  useEffect(() => {
    setCurrentStep(0);
    setStepSalesInvoice(0);
  }, [activeTab]);

  const showSalesInvoice =
    (activeTab === "manual" && stepManual === 4) ||
    (activeTab === "upload" && stepUpload === 1);

  const showHeading = !showSalesInvoice;

  return (
    <div>
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl dark:bg-[#0D0D0D]">
        {showHeading && (
          <div className="py-6 px-6 pr-14">
            <HeadingTwo text="Generate Invoice" />
          </div>
        )}

        <div className="flex flex-col">
          {!showSalesInvoice && (
            <div className="flex gap-1 mb-1">
              {Object.entries(Tabs).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as TabKey)}
                  className={`w-1/2 py-1.5 text-[14px] font-regular border-b-2 border-[#E5E5E5]
                  ${
                    activeTab === key
                      ? "text-[#151D48] border-b-2 border-active-[#151D48] focus:border-indigo-400 dark:text-[#B7BFEA]"
                      : "text-[#151D48] hover:text-[#151D48] dark:text-[#B7BFEA]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {activeTab === "manual" && (
            <>
              {stepManual === 0 && <GenerateManuallyFirstStep />}
              {stepManual === 1 && <GenerateInvoice />}
              {stepManual === 2 && <GenerateInvoiceThirdStep />}
              {stepManual === 3 && <GenerateInvoiceFourthStep />}
              {/* stepManual === 4 will show SalesInvoice below */}
            </>
          )}

          {activeTab === "upload" && !showSalesInvoice && (
            <>
              {stepUpload === 0 && <FileUploadDropZone />}
              {/* stepUpload === 1 will show SalesInvoice below */}
            </>
          )}
        </div>

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

            {((activeTab === "manual" && currentStep < 4) ||
              (activeTab === "upload" && currentStep < 1)) && (
              <Button
                className="w-full bg-[#5D5FEF] mx-5 my-1"
                size="sm"
                onClick={() => setCurrentStep((s) => s + 1)}
              >
                Next
              </Button>
            )}

            <Button className="w-full mx-5 my-1" size="sm">
              {stepLabels[currentStep]}
            </Button>
          </div>
        )}
      </div>

      {showSalesInvoice && (
        <div className="SalesInvoice">
          
          {stepSalesInvoice === 0 && <GenerateInvoiceFifthStep />}
          {stepSalesInvoice === 1 && <GenerateInvoiceSixthStep />}
          {stepSalesInvoice === 2 && <GenerateInvoiceSeven />}

          <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
            {stepSalesInvoice > 0 && (
              <Button
                className="w-full bg-gray-200 text-black mx-5 my-1"
                size="sm"
                onClick={() => setStepSalesInvoice((s) => s - 1)}
              >
                Back
              </Button>
            )}
            {stepSalesInvoice < 2 && (
              <Button
                className="w-full bg-[#5D5FEF] mx-5 my-1"
                size="sm"
                onClick={() => setStepSalesInvoice((s) => s + 1)}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabsMain;
