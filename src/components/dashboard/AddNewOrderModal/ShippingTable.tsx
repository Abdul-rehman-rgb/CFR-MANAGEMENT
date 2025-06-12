import React from "react";

const ShippingOptions = ({ options, selectedPriority, onPriorityChange }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm  ">
      {/* <h2 className="text-lg font-medium text-gray-800 mb-4">Shipping Options</h2> */}
      
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
            <div>
              <h3 className="font-medium text-gray-800">{option.name}</h3>
            </div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              option.available 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {option.available ? 'Available' : 'Not Available'}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Order Priority</label>
        <select
          value={selectedPriority}
          onChange={(e) => onPriorityChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Order priority</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
    </div>
  );
};

export default ShippingOptions;