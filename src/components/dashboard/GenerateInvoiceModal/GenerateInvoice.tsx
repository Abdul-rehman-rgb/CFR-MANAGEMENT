import React, { useState } from "react";
import Dropdown from "../../../components/form/input/Dropdown";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import DatePicker from "../../form/date-picker";
import TextArea from "../../form/input/TextArea";

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

const PRODUCT_OPTIONS = [
  { value: "", label: "Select Product" },
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
  { value: "product3", label: "Product 3" },
];

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

const GenerateInvoice: React.FC = () => {
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
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-[#0D0D0D] py-6 px-4">
      <div className="flex flex-col">
        <div className="space-y-6 overflow-y-auto px-2 pb-3 custom-scrollbar">
          {products.map((product, idx) => (
            <div key={product.id} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex-1">
                  <Label htmlFor="cust-name" children="Customer Name" />
                  <Dropdown
                    options={PRODUCT_OPTIONS}
                    id={`product-select-${idx}`}
                    value={product.customerName}
                    onChange={(e) =>
                      handleChange(idx, "customerName", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="cust-contact" children="Customer Contact" />
                  <Input
                    type="text"
                    id={`cust-contact-${idx}`}
                    placeholder="Email or Mobile"
                    value={product.customerContact}
                    onChange={(e) =>
                      handleChange(idx, "customerContact", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label children="Invoice Date" />
                  <DatePicker
                    id={`date-picker-${idx}`}
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) =>
                      handleChange(idx, "invoiceDate", currentDateString)
                    }
                  />
                </div>
                <div className="flex-1">
                  <Label children="Due Date" />
                  <DatePicker
                    id={`due-date-picker-${idx}`}
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) =>
                      handleChange(idx, "dueDate", currentDateString)
                    }
                  />
                </div>
              </div>

              <div className="flex-1">
                <Label children="Reference Number" />
                <Input
                  type="text"
                  placeholder="Reference Number"
                  value={product.referenceNumber}
                  onChange={(e) =>
                    handleChange(idx, "referenceNumber", e.target.value)
                  }
                />
              </div>

              <div className="flex-1">
                <Label children="Invoice Address" />
                <TextArea
                  placeholder="Invoice Address"
                  rows={3}
                  value={product.invoiceAddress}
                  onChange={(e) =>
                    handleChange(idx, "invoiceAddress", e.target.value)
                  }
                />
              </div>

              <div className="flex-1">
                <Label children="Delivery Address" />
                <TextArea
                  placeholder="Delivery Address"
                  rows={3}
                  value={product.deliveryAddress}
                  onChange={(e) =>
                    handleChange(idx, "deliveryAddress", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateInvoice;
