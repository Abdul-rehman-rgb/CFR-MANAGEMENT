import React, { useState } from "react";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import Checkbox from "../../form/input/Checkbox";
import Dropdown from "../../form/input/Dropdown";
import SearchBox from "../../form/input/SearchBox";
import Form from "../../form/Form";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Form");
  const [uploadProgress, setUploadProgress] = useState(0);

  const tabs = ["Form", "Upload"];

  const handleSubmit = () => console.log("Submitting form...");


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 200);
  };

  return (
    <div className="h-[380px] overflow-y-auto rounded-lg p-4 sm:p-6 bg-white">
      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-[11px] sm:text-[12px] md:text-[13px] font-medium capitalize rounded transition-all duration-200 ${
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
      {activeTab === "Form" && (
         <Form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <Label htmlFor="product-name" children="Product Name" />
                      <SearchBox placeholder="Enter product name" />

                      <Dropdown
                        options={[
                          { value: "", label: "Select Product" },
                          { value: "product1", label: "Product 1" },
                          { value: "product2", label: "Product 2" },
                          { value: "product3", label: "Product 3" },
                        ]}
                        id="product-select"
                      />

                      <div className="flex flex-wrap items-center gap-4">
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

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                          <div className="flex-1">
                            <Label
                              htmlFor="current-stock"
                              children="Current Stock"
                            />
                            <Input
                              type="number"
                              id="current-stock"
                              placeholder="Quantity"
                            />
                          </div>
                          <div className="flex-1">
                            <Label
                              htmlFor="update-quantity"
                              children="Update Quantity"
                            />
                            <Input
                              type="number"
                              id="update-quantity"
                              placeholder="Quantity"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                        <Button
                          children="Cancel"
                          variant="outline"
                          onClick={() => setIsModalOpen(false)}
                          className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[120px] sm:min-w-[140px] transition-all"
                        />
                        <Button
                          variant="primary"
                          children="Save"
                          className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF] hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[140px] transition-all"
                        />
                      </div> */}
                    </div>
                  </Form>
      )}

      {activeTab === "Upload" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload File
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
            onChange={handleFileUpload}
          />
          {uploadProgress > 0 && (
            <div className="mt-4 h-2 w-full bg-gray-200 rounded">
              <div
                className="h-2 bg-indigo-500 rounded"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tabs;
