/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const RecordPayment = () => {
  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
      <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
        Record Payment
      </h4>

      <div className="flex flex-row justify-between p-8 bg-blue-100">
        <div className="flex flex-col">
          <span>Amount Paid</span>
          <span>$0.00</span>
        </div>
        <div className="flex flex-col">
          <span>Amount Receive</span>
          <span>$6,000</span>
        </div>
      </div>
    </div>
  );
};

export default RecordPayment;
