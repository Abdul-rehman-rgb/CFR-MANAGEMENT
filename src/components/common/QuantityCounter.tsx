/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < 99999) setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  const handleChange = (e: { target: { value: any; }; }) => {
    const val = e.target.value;
    if (/^\d{0,5}$/.test(val)) {
      setQuantity(Number(val));
    }
  };

  return (
    <form className="max-w-xs ">
    

      <div className="relative flex items-center max-w-[6rem] text-center mx-auto border-2 border-indigo-300 rounded-lg p-0.5">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  border-gray-300 rounded-s-md p-2 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg className="w-2 h-2 text-blue-800 dark:text-white" viewBox="0 0 18 2" fill="none">
            <path d="M1 1h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <input
          type="text"
          id="quantity-input"
          value={quantity}
          onChange={handleChange}
          className=" h-6 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="999"
        />

        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  border-gray-300 rounded-e-md p-2 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg className="w-2 h-2 text-blue-800 dark:text-white" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 1v16M1 9h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      
    </form>
  );
};

export default QuantityCounter;
