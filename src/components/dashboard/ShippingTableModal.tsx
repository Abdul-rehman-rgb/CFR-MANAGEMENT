/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import imageTumb2 from "../../../public/dhl2.svg";
import imageTumb from "../../../public/dhl.svg";


import ShippingOptions from "./AddNewOrderModal/ShippingTable";
const ShippingTableModal = () => {
  const [priority, setPriority] = useState("");
  const [shippingOptions] = useState([
    { image: imageTumb2 ,name: "Shipping Walkerpack (Northampton)", available: true },
    { image: imageTumb ,name: "Shipping Greet Bear UK", available: false },
    { image: imageTumb2 ,name: "Shipping DHL UK", available: false }
  ]);
  return (
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl dark:bg-gray-900">
        <div className="pl-10 px-2 pr-14">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Shipping
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div>
              <div>
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
