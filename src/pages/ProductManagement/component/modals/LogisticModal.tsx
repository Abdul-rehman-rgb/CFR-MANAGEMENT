import React from 'react'
import Dropdown from '../../../../components/form/input/Dropdown'
import Label from '../../../../components/form/Label'
import Input from '../../../../components/form/input/InputField'
import Form from '../../../../components/form/Form'

const LogisticModal = () => {
  return (
    <>
        <Form>
          <div className="flex flex-row gap-2 space-y-4">
            <div className="w-full">
              <Label children="Unit/Display" />
              <Input type="text" />
            </div>
            <div className="w-full">
              <Label children="Display/Carton" />
              <Input type="text" />
            </div>
          </div>
          <div className="flex flex-row gap-2 space-y-4">
            <div className="w-full">
              <Label children="Carton/Layer" />
              <Input type="text" />
            </div>
            <div className="w-full">
              <Label children="Layer/Pallet" />
              <Input type="text" />
            </div>
          </div>
          <div className="flex flex-row gap-2 space-y-4">
            <div className="w-full">
              <Label children="Carton/Pallet" />
              <Input type="text" />
            </div>
            <div className="w-full">
              <Label children="Unit/Pallet" />
              <Input type="text" />
            </div>
          </div>
          <div className="flex flex-row gap-2 space-y-4">
            <div className="w-full">
              <Label children="HFSS Compliant" />
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
              <Label children="Country of Origins" />
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
        </Form>
    </>
  )
}

export default LogisticModal