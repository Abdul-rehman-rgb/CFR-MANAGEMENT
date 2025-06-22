import React, { useState } from "react";
// import FileUploadDropZone from "../../common/FileUploadDropZone";

type ProductEntry = {
  id: string;
  product: string;
  ledger: string;
  qty: string;
  price: string;
  discount: string;
  vatRate: string;
  vat: string;
  total: string;
  description: string;
};

const PRODUCT_OPTIONS = [
  { value: "", label: "Select" },
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
];

const LEDGER_OPTIONS = [
  { value: "", label: "Select" },
  { value: "ledger1", label: "Ledger 1" },
  { value: "ledger2", label: "Ledger 2" },
];

const VAT_RATE_OPTIONS = [
  { value: "", label: "Select" },
  { value: "0", label: "0%" },
  { value: "5", label: "5%" },
  { value: "15", label: "15%" },
];

const initialEntry = (): ProductEntry => ({
  id: Math.random().toString(36).substr(2, 9),
  product: "",
  ledger: "",
  qty: "",
  price: "",
  discount: "",
  vatRate: "",
  vat: "",
  total: "",
  description: "",
});

const Tabs: React.FC = () => {

  // const [activeTab, setActiveTab] = useState("Generate manually");

  // const tabs = ["Generate manually", "Upload file"];


  const [products, setProducts] = useState<ProductEntry[]>([initialEntry()]);

  const handleChange = (
    idx: number,
    field: keyof ProductEntry,
    value: string
  ) => {
    setProducts((prev) =>
      prev.map((p, i) =>
        i === idx
          ? {
              ...p,
              [field]: value,
            }
          : p
      )
    );
  };

  const addProduct = () => {
    setProducts((prev) => [...prev, initialEntry()]);
  };

  const removeProduct = (idx: number) => {
    setProducts((prev) => prev.filter((_, i) => i !== idx));
  };


  return (

    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900">
      {/* <div className="px-2 pr-14">
        <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
          Generate Invoice
        </h4>
       
      </div> */}
      <div className="flex flex-col px-0">
        {/* Tabs */}
        {/* <div className="w-full px-4 mb-4 flex gap-1 sm:gap-1">
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
        </div> */}

        {/* Tab Content */}
        {/* {activeTab === "Generate manually" && ( */}
          <div className="space-y-6  custom-scrollbar h-[550px] overflow-y-auto pb-3">
      {products.map((product, idx) => (
        <div
          key={product.id}
          className="bg-gray-50 rounded-2xl px-6 py-6 space-y-4 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                Product
              </label>
              <div className="relative">
                <select
                  className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                  value={product.product}
                  onChange={(e) =>
                    handleChange(idx, "product", e.target.value)
                  }
                >
                  {PRODUCT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  ▼
                </span>
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                Ledger Account
              </label>
              <div className="relative">
                <select
                  className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                  value={product.ledger}
                  onChange={(e) =>
                    handleChange(idx, "ledger", e.target.value)
                  }
                >
                  {LEDGER_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  ▼
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                Qty/Hrs
              </label>
              <input
                type="text"
                placeholder="e.g., Order number"
                className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                value={product.qty}
                onChange={(e) => handleChange(idx, "qty", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                Price Rate
              </label>
              <input
                type="text"
                placeholder="e.g., Order number"
                className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                value={product.price}
                onChange={(e) => handleChange(idx, "price", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                Discount
              </label>
              <input
                type="text"
                placeholder="e.g., Order number"
                className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                value={product.discount}
                onChange={(e) => handleChange(idx, "discount", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                VAT Rate
              </label>
              <div className="relative">
                <select
                  className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                  value={product.vatRate}
                  onChange={(e) =>
                    handleChange(idx, "vatRate", e.target.value)
                  }
                >
                  {VAT_RATE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  ▼
                </span>
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                VAT
              </label>
              <input
                type="text"
                placeholder="e.g., Order number"
                className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                value={product.vat}
                onChange={(e) => handleChange(idx, "vat", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
                Total
              </label>
              <input
                type="text"
                placeholder="e.g., Order number"
                className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700"
                value={product.total}
                onChange={(e) => handleChange(idx, "total", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
              Product Description
            </label>
            <textarea
              placeholder="Description"
              className="w-full py-3 px-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-700 resize-none"
              rows={2}
              value={product.description}
              onChange={(e) => handleChange(idx, "description", e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <button
              type="button"
              onClick={addProduct}
              className="border border-gray-300 bg-white text-gray-800 px-4 py-2 rounded shadow-sm hover:bg-gray-50 active:bg-gray-100 transition"
            >
              Add another product
            </button>
            {products.length > 1 && (
              <button
                type="button"
                onClick={() => removeProduct(idx)}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 active:bg-red-700 transition"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
        {/* )} */}

        {/* {activeTab === "Upload file" && (
          <div>
            <FileUploadDropZone />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Tabs;