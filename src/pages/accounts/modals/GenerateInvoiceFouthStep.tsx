import React from "react";
import Form from "../../../components/form/Form";
import Label from "../../../components/form/input/Label";
import Dropdown from "../../../components/form/input/Dropdown";
import Input from "../../../components/form/input/InputField";
import TextArea from "../../../components/form/input/TextArea";

const PRODUCT_OPTIONS = [
  { value: "", label: "Select Product" },
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
  { value: "product3", label: "Product 3" },
];

const GenerateInvoiceFourthStep = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-[#F2F2FE]/60 dark:bg-[#0D0D0D] px-4">
        <div className="flex flex-col p-4 space-y-6">

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="notes" children="Notes" />
              <TextArea id="notes" placeholder="Enter any notes..." />
            </div>
            <div className="flex-1">
              <Label htmlFor="ledger" children="Ledger Account" />
              <TextArea id="ledger" placeholder="Enter ledger account..." />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 flex-1">
              <Label children="Qty/Hrs" />
              <Dropdown options={PRODUCT_OPTIONS} value={"product2"} />
            </div>
            <div className="flex-1">
              <Input type="number" placeholder="0.00" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label children="Discount" />
              <Label children="Net" />
              <Label children="VAT" />
              <Label children="Total" />
            </div>
            <div className="space-y-3 text-right text-sm text-gray-600">
              <Label children="0.00" />
              <Label children="0.00" />
              <Label children="0.00" />
              <Label children="0.00" />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default GenerateInvoiceFourthStep;
