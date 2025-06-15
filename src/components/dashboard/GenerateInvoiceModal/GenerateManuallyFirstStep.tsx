import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import Form from "../../form/Form";
import FileUploadDropZone from "../../common/FileUploadDropZone";
import TextArea from "../../form/input/TextArea";
import { useState } from "react";
import DatePicker from "../../form/date-picker";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Generate manually");

  const tabs = ["Generate manually", "Upload file"];

  const handleSubmit = () => console.log("Submitting form...");
  const [message, setMessage] = useState("");

  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
      <div className="px-2 pr-14">
        <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
          Generate Invoice
        </h4>
       
      </div>
      <div className="flex flex-col px-3">
        {/* Tabs */}
        <div className="w-full px-4 mb-4 flex gap-1 sm:gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-1/2 px-3 py-1.5 text-[11px] sm:text-[12px] md:text-[13px] font-medium capitalize rounded transition-all duration-200 ${
                activeTab === tab
                  ? "text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
                  : "text-[#8E8E9C] hover:text-[#151D48]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Generate manually" && (
          <Form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex-1">
                  <Label htmlFor="customer-name" children="Customer Name" />
                  <Input
                    type="text"
                    id="current-stock"
                    placeholder="Quantity"
                  />
                </div>
                <div className="flex-1">
                  <Label
                    htmlFor="customer-contact"
                    children="Customer Contact"
                  />
                  <Input
                    type="number"
                    id="update-quantity"
                    placeholder="Quantity"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex-1">
                  <Label children="Invoice Date" />
                  <DatePicker
                    id="date-picker"
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) => {
                      // Handle your logic
                      console.log({ dates, currentDateString });
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Label children="Due Date" />
                  <DatePicker
                    id="date-picker2"
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) => {
                      // Handle your logic
                      console.log({ dates, currentDateString });
                    }}
                  />
                </div>
              </div>
              <Label children="Reference Number" />
              <Input placeholder="e.g., Order number" />

              <div className="col-span-2">
                <Label>Invoice Address</Label>

                <TextArea
                  value={message}
                  onChange={(value) => setMessage(value)}
                  rows={3}
                  placeholder="Add a main address"
                />
              </div>

              <div className="col-span-2">
                <Label>Delivery Address</Label>

                <TextArea
                  value={message}
                  onChange={(value) => setMessage(value)}
                  rows={3}
                  placeholder="Add a delivery address"
                />
              </div>

              {/* <div className="flex flex-wrap items-center gap-4">
                        <Checkbox
                          label="Pallet"
                          checked={true}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="Cartons"
                          checked={false}
                          onChange={() => {}}
                        />

                        
                      </div> */}
            </div>
          </Form>
        )}

        {activeTab === "Upload file" && (
          <div>
            <FileUploadDropZone />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
