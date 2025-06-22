import React, { useState } from "react";

const CARRIAGE_OPTIONS = [
  { value: "", label: "Select" },
  { value: "standard", label: "Standard" },
  { value: "express", label: "Express" },
];

const OrderSummarySection: React.FC = () => {
  const [notes, setNotes] = useState("");
  const [terms, setTerms] = useState("");
  const [carriage, setCarriage] = useState("");
  const [carriageAmount, setCarriageAmount] = useState("0.00");

  // For demo; in real use, these would be calculated or passed as props/state
  const discount = 0.0;
  const net = 0.0;
  const vat = 0.0;
  const total = 0.0;

  return (
    <div className="w-full px-1">
      {/* Notes and Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
            Notes
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-lg p-3 min-h-[70px] bg-white focus:ring-2 focus:ring-indigo-100 outline-none resize-none"
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[12px] text-[#737791] font-medium dark:text-gray-400">
            Terms &amp; Condition
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-lg p-3 min-h-[70px] bg-white focus:ring-2 focus:ring-indigo-100 outline-none resize-none"
            value={terms}
            onChange={e => setTerms(e.target.value)}
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="flex items-center">
            <span className="w-24 font-medium text-[14px] leading-[18px] tracking-[0] text-[#737791]">Carriage</span>
            <div className="relative flex-1 max-w-xs">
              <select
                className="w-full py-2 pl-3 pr-10 rounded-lg border border-gray-200 bg-white text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-100"
                value={carriage}
                onChange={(e) => setCarriage(e.target.value)}
              >
                {CARRIAGE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </span>
            </div>
          </div>
          <div>
            <input
              type="text"
              className="w-full py-2 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              value={carriageAmount}
              onChange={e => setCarriageAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium text-[14px] leading-[18px] tracking-[0] text-[#737791]">Discount</span>
            <span className="text-gray-700 font-medium">{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-[14px] leading-[18px] tracking-[0] text-[#737791]">Net</span>
            <span className="text-gray-700 font-medium">{net.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-[14px] leading-[18px] tracking-[0] text-[#737791]">VAT</span>
            <span className="text-gray-700 font-medium">{vat.toFixed(2)}</span>
          </div>
          <hr className="my-2 border-indigo-100" />
          <div className="flex justify-between items-center">
            <span className="font-medium text-[14px] leading-[18px] tracking-[0] text-[#737791]">Total</span>
            <span className="text-gray-900 font-semibold">{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummarySection;