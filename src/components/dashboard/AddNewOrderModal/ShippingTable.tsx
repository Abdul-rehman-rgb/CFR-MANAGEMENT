import React, { useState } from "react";


import Radio from "../../form/input/Radio";
import SingleSelect from "../../form/input/SingleSelect";


type ShippingOptions = {
  options?: number;
  selectedPriority?: string;
  onPriorityChange?: string;
  image?: string;
};

const ShippingOptions = ({ options, selectedPriority, onPriorityChange } : ShippingOptions) => {

  const [selectedValue, setSelectedValue] = useState<string>("option2");
  
    const handleRadioChange = (value: string) => {
      setSelectedValue(value);
    };
  return (
    <div className="w-full bg-white rounded-lg ">
      {/* <h2 className="text-lg font-medium text-gray-800 mb-4">Shipping Options</h2> */}
      
      <div className="space-y-3 mb-6 mt-5">
        {options.map((option, index) => (
          
          <div key={index} className="flex items-center justify-start p-3 border border-gray-200 rounded-md">
           <div className="mr-5">
             <Radio
              id="radio1"
              name="group1"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={handleRadioChange}
              label=""
            />
           </div>
            <img
                  src={option.image}
                  className="w-10 h-10 rounded object-cover mr-5"
                />
            <div>
              
              <h3 className="font-medium text-sm font-medium text-gray-800">{option.name}</h3>
              <span className={`inline-flex items-center  rounded-full text-xs font-normal ${
              option.available 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {option.available ? 'Available' : 'Not Available'}
            </span>
            </div>
            
          </div>
        ))}
      </div>

      <div className="mt-4 w-full">
        <label className="block text-xs font-normal text-gray-600 mb-2">Order Priority</label>
        

        <div className="w-full">
        <SingleSelect
          options={['Option 1', 'Option 2', 'Option 3']}
          onSelect={(value: any) => console.log('Selected:', value)}
        />
        </div>
      </div>
    </div>
  );
};

export default ShippingOptions;