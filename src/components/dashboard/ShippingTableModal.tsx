/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
// import ProductTable from "./MultiProductSelection/ProductTable";

import ShippingOptions from "./AddNewOrderModal/ShippingTable";
const ShippingTableModal = () => {
  const [priority, setPriority] = useState("");
  const [shippingOptions] = useState([
    { name: "Shipping Walkerpack (Northampton)", available: true },
    { name: "Shipping Greet Bear UK", available: false },
    { name: "Shipping DHL UK", available: false }
  ]);
  return (
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-5">
        <div className="px-2 pr-14">
          <h4 className="mb-7 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Shipping
          </h4>
          {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Update your details to keep your profile up-to-date.
          </p> */}
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div>
              <div className="">
                    <ShippingOptions
                      options={shippingOptions}
                      selectedPriority={priority}
                      onPriorityChange={setPriority}
                    />
              </div>
            </div>
          </div>
        </form>
    </div>
  );
};

export default ShippingTableModal;
