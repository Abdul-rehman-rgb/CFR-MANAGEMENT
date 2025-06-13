import React, { useState } from 'react'
import Button from '../../../../components/ui/button/Button'
import FileInput from '../../../../components/form/input/FileInput'
import Label from "../../../../components/form/Label";
import Input from '../../../../components/form/input/InputField'
import Form from '../../../../components/form/Form';
import SearchBox from '../../../../components/form/input/SearchBox';
import Dropdown from '../../../../components/form/input/Dropdown';
import Checkbox from '../../../../components/form/input/Checkbox';

const GenerateInvoice = () => {
      const [activeTab, setActiveTab] = useState("Tab1");
      
    
  const handleSubmit = () => console.log("Submitting form...");

  return (
    <>
        <div className="pt-4">
              {/* Tabs */}
              <div className="flex justify-center gap-4 mb-4 border-b border-gray-200 font-medium">
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

              {/* Tab Content */}
              <div>
                {activeTab === "Tab1" && (
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

                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
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
                      </div>
                    </div>
                  </Form>
                )}

                {activeTab === "Tab2" && (
                  <div className="space-y-4">
                    <Label htmlFor="upload-file" children="Upload Stock" />
                    {/* <Input type="file" id="upload-file" accept=".csv, .xlsx" /> */}
                    {/* <p className="text-xs text-gray-500">Supported formats: CSV, Excel</p> */}
                    <FileInput id="upload-file" accept=".csv, .xlsx" />
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                      <Button
                        type="button"
                        children="Cancel"
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                        className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[120px] sm:min-w-[140px] transition-all"
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        children="Save"
                        className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF] hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[140px] transition-all"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
    </>
  )
}

export default GenerateInvoice