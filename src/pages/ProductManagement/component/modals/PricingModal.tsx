import React, { useState } from 'react'
import Input from '../../../../components/form/input/InputField'
import Label from '../../../../components/form/Label'
import Dropdown from '../../../../components/form/input/Dropdown'
import Radio from '../../../../components/form/input/Radio'

const PricingModal = () => {
      const [selectedValue, setSelectedValue] = useState("option1");
    
  return (
    <>
        <div className="space-y-4">
          <div>
            <Label children="Assign to" />
            <Dropdown
              id="assign"
              name="assign"
              options={[
                { value: "", label: "Select Customer" },
                { value: "customer1", label: "Customer 1" },
                { value: "customer2", label: "Customer 2" },
              ]}
            />
          </div>
          <div className="flex gap-2">
            <div className="bg-[#5D5FEF]/5 py-2 text-[#5D5FEF] text-[12px] font-medium rounded-sm px-2">
              Asda X
            </div>
            <div className="bg-[#5D5FEF]/5 py-2 text-[#5D5FEF] text-[12px] font-medium rounded-sm px-2">
              Ajay X
            </div>
          </div>
          <div className="flex gap-4">
            <Radio
              id="radio1"
              name="radio"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={(val) => setSelectedValue(val)}
              label="Normal Product"
              className="text-[12px] font-regular text-[#2B2B2B]"
            />
            <Radio
              id="radio2"
              name="radio"
              value="option2"
              label="Promo Product"
              checked={selectedValue === "option2"}
              onChange={(val) => setSelectedValue(val)}
              className="text-[12px] font-regular text-[#2B2B2B]"
            />
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <Label htmlFor="actualprice" children="Actual Price" />
              <Input
                type="text"
                id="Originalprice"
                name="Originalprice"
                placeholder="Original price"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="promo" children="Promo Price" />
              <Input
                type="text"
                id="discount"
                name="discount"
                placeholder="Discount price"
                className="w-full"
              />
            </div>
          </div>
          </div>
    </>
  )
}

export default PricingModal;