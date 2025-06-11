import React from "react";
import Label from "../../../../components/form/Label";
import Dropdown from "../../../../components/form/input/Dropdown";

const DimensionModal = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 space-y-4">
        <div className="w-full">
          <Label children="Product Width" />
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
          <Label children="Product Height" />
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
          <Label children="Product Length" />
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
          <Label children="Product Weight" />
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
          <Label children="Display Width" />
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
          <Label children="Carton Height" />
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
          <Label children="Display Depth" />
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
          <Label children="Display Weight" />
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
          <Label children="Carton Width" />
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
          <Label children="Carton Height" />
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
          <Label children="Carton Depth" />
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
          <Label children="Carton Height" />
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
          <Label children="Pallet Width" />
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
          <Label children="Pallet Height" />
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
    </div>
  );
};

export default DimensionModal;
