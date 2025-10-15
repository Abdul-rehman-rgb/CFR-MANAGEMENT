import React from "react";
import Form from "../../../components/form/Form";
import Label from "../../../components/form/input/Label";
import Dropdown from "../../../components/form/input/Dropdown";
import Input from "../../../components/form/input/InputField";
import TextArea from "../../../components/form/input/TextArea";
import Button from "../../../components/ui/button/Button";

const PRODUCT_OPTIONS = [
  { value: "", label: "Select Product" },
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
  { value: "product3", label: "Product 3" },
];

const GenerateInvoiceThirdStep = () => {
  const handleChange = (idx: number, field: string, value: string) => {
    console.log(`Index: ${idx}, Field: ${field}, Value: ${value}`);
  };


  return (
    <Form onSubmit={onclick}>
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-[#F2F2FE]/60 dark:bg-[#0D0D0D] px-2">
        <div className="flex flex-col p-4">
          <div className="space-y-4">
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="cust-name" children="Product" />
                <Dropdown options={PRODUCT_OPTIONS} value={"product1"} />
              </div>
              <div className="flex-1">
                <Label htmlFor="cust-contact" children="Ledger Account" />
                <Dropdown options={PRODUCT_OPTIONS} value={"product2"} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor={`date-picker-${idx}`} children="Qty/Hrs" />
                <Input type="text" placeholder="e.g., 5" />
              </div>
              <div className="flex-1">
                <Label htmlFor={`date-picker-${idx}`} children="Qty/Hrs" />
                <Input type="text" placeholder="e.g., 5" />
              </div>
              <div className="flex-1">
                <Label htmlFor={`date-picker-${idx}`} children="Qty/Hrs" />
                <Input type="text" placeholder="e.g., 5" />
              </div>
            </div>

              <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor={`date-picker-${idx}`} children="VAT Rates" />
                 <Dropdown options={PRODUCT_OPTIONS} value={"product2"} />

              </div>
              <div className="flex-1">
                <Label htmlFor={`date-picker-${idx}`} children="VAT" />
                <Input type="text" placeholder="e.g., 5" />
              </div>
              <div className="flex-1">
                <Label htmlFor={`date-picker-${idx}`} children="Total" />
                <Input type="text" placeholder="e.g., 5" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor={`date-picker-${idx}`} children="VAT" />
                <Input type="text" placeholder="e.g., €43" />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor={`due-date-picker-${idx}`}
                  children="Invoice Total"
                />
                <Input type="text" placeholder="e.g., €43" />
              </div>
            </div>
            <div>
              <Label htmlFor="description" children="Notes" />
              <TextArea placeholder="Invoice Notes" />
            </div>
            <div className="flex flex-row justify-between">
                <div>
                  <Button variant="outline" size="sm">Add Another Product</Button>
                </div>
                <div>
                  <Button variant="primary" className="bg-red-500" size="sm">Add Another Product</Button>

                </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default GenerateInvoiceThirdStep;
