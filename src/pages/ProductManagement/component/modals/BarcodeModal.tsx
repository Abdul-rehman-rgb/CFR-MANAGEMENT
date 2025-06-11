import React from 'react'
import Label from '../../../../components/form/Label'
import Dropdown from '../../../../components/form/input/Dropdown'

const BarcodeModal = () => {
  return (
    <>
        <div className="flex flex-row gap-2 space-y-4">
          <div className="w-full">
            <Label children="HS Code" />
            <Dropdown
              id="Compliant"
              name="Compliant"
              options={[
                { value: "", label: "Select" },
                { value: "customer1", label: "Customer 1" },
                { value: "customer2", label: "Customer 2" },
              ]}
            />
          </div>
          <div className="w-full">
            <Label children="Unit Barcode" />
            <Dropdown
              id="Origins"
              name="Origins"
              options={[
                { value: "", label: "Months" },
                { value: "customer1", label: "Customer 1" },
                { value: "customer2", label: "Customer 2" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-row gap-2 space-y-4">
          <div className="w-full">
            <Label children="Display Barcode" />
            <Dropdown
              id="Compliant"
              name="Compliant"
              options={[
                { value: "", label: "Select" },
                { value: "customer1", label: "Customer 1" },
                { value: "customer2", label: "Customer 2" },
              ]}
            />
          </div>
          <div className="w-full">
            <Label children="Carton Barcode" />
            <Dropdown
              id="Origins"
              name="Origins"
              options={[
                { value: "", label: "Months" },
                { value: "customer1", label: "Customer 1" },
                { value: "customer2", label: "Customer 2" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <div className="w-full">
            <Label children="Carton Barcode" />
            <Dropdown
              id="Origins"
              name="Origins"
              options={[
                { value: "", label: "Months" },
                { value: "customer1", label: "Customer 1" },
                { value: "customer2", label: "Customer 2" },
              ]}
            />
          </div>
        </div>

    </>
  )
}

export default BarcodeModal