/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import imageTumb2 from "../../../public/dhl2.svg";
import imageTumb from "../../../public/dhl.svg";
import logo from "../../../public/logo.png";

const SalesInvoiceModal = () => {
  const [priority, setPriority] = useState("");
  const [shippingOptions] = useState([
    {
      image: imageTumb2,
      name: "Shipping Walkerpack (Northampton)",
      available: true,
    },
    { image: imageTumb, name: "Shipping Greet Bear UK", available: false },
    { image: imageTumb2, name: "Shipping DHL UK", available: false },
  ]);
  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
      <img src={logo} height={150} width={150} />
      <div className="pl-10 px-2 pr-14"></div>
      <div className="flex flex-row justify-between">
        <div>
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Sales Invoice
          </h4>
         <div className="flex flex-col">
             <span className="invoice-text">CFR Management service</span>
          <span className="invoice-text">CFR Management service</span>
          <span className="invoice-text">CFR Management service</span>
         </div>
        </div>
         <div>
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Sales Invoice
          </h4>
          <div className="flex flex-col">
             <span className="invoice-text">CFR Management service</span>
          <span className="invoice-text">CFR Management service</span>
          <span className="invoice-text">CFR Management service</span>
         </div>
        </div>
      </div>
     <table className="w-full mt-6 border border-gray-100">
  <thead className="font-light">
    <tr className="dark:bg-gray-800 border border-gray-100">
      <th className="px-4 py-2 text-left">Description</th>
      <th className="px-4 py-2 text-left">Qty</th>
      <th className="px-4 py-2 text-left">Discount</th>
      <th className="px-4 py-2 text-left">Price</th>
      <th className="px-4 py-2 text-left">VAT</th>
      <th className="px-4 py-2 text-left">Net</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border border-gray-100">
      <td className="px-4 py-2">Brand Design</td>
      <td className="px-4 py-2">1</td>
      <td className="px-4 py-2">0</td>
      <td className="px-4 py-2">2000.00</td>
      <td className="px-4 py-2">0.00</td>
      <td className="px-4 py-2">2,000.00</td>
    </tr>
    <tr className="border border-gray-100">
      <td className="px-4 py-2">Brand Design</td>
      <td className="px-4 py-2">1</td>
      <td className="px-4 py-2">0</td>
      <td className="px-4 py-2">2000.00</td>
      <td className="px-4 py-2">0.00</td>
      <td className="px-4 py-2">2,000.00</td>
    </tr>
  </tbody>
</table>

<div className="flex flex-row justify-between p-4 bg-blue-100">
    <div className="flex flex-col">
        <span>VAT</span>
        <span>Net</span>
        <span>Total</span>
    </div>
    <div className="flex flex-col">
        <span>VAT</span>
        <span>Net</span>
        <span>Total</span>
    </div>
</div>

    </div>
  );
};

export default SalesInvoiceModal;
