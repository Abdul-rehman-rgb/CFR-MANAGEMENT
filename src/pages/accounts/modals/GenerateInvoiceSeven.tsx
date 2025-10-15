import { useState } from "react";
import Dropdown from "../../../components/form/input/Dropdown";
import Input from "../../../components/form/input/InputField";
import Label from "../../../components/form/input/Label";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import DatePicker from "../../../components/form/date-picker";

const PRODUCT_OPTIONS = [
  { value: "", label: "Select Product" },
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
  { value: "product3", label: "Product 3" },
];

type ProductEntry = {
  id: string;
  customerName: string;
  customerContact: string;
  invoiceDate: string;
  dueDate: string;
  referenceNumber: string;
  invoiceAddress: string;
  deliveryAddress: string;
};

export default function GenerateInvoiceSeven() {
  const initialEntry = (): ProductEntry => ({
    id: Math.random().toString(36).substr(2, 9),
    customerName: "",
    customerContact: "",
    invoiceDate: "",
    dueDate: "",
    referenceNumber: "",
    invoiceAddress: "",
    deliveryAddress: "",
  });

  const [products, setProducts] = useState<ProductEntry[]>([initialEntry()]);

  const handleChange = (
    idx: number,
    field: keyof ProductEntry,
    value: string
  ) => {
    setProducts((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p))
    );
  };

  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-[#0D0D0D]">
      <div className="px-2 pr-14">
        <HeadingOne text="Record Payment" />
      </div>

      <div className="flex flex-col">
        <div className="space-y-6 overflow-y-auto px-2 pb-3 custom-scrollbar">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex-1">
                <Label
                  htmlFor={`cust-name-${idx}`}
                  children="Amount Received"
                />
                <Input
                  type="number"
                  id={`cust-name-${idx}`}
                  placeholder="Amount Received"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`cust-name-${idx}`} children="Discount" />
                <Input
                  type="number"
                  id={`cust-name-${idx}`}
                  placeholder="0.00"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`cust-name-${idx}`} children="Customer Name" />
                <DatePicker
                  id="date-picker"
                  placeholder="Select a date"
                  onChange={(dates, currentDateString) => {
                    console.log({ dates, currentDateString });
                  }}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`cust-contact-${idx}`} children="Paid Into" />
                <Dropdown
                  options={PRODUCT_OPTIONS}
                  id={`cust-name-${idx}`}
                  value={product.customerName}
                  onChange={(e) =>
                    handleChange(idx, "customerName", e.target.value)
                  }
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`cust-contact-${idx}`} children="Method" />
                <Input type="text" placeholder="Enter A Method" />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor={`cust-contact-${idx}`}
                  children="Reference(Optional)"
                />
                <Input type="text" placeholder="Enter A Method" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
