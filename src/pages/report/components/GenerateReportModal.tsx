import { useState } from "react";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import Form from "../../../components/form/Form";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import DatePicker from "../../../components/form/date-picker";
import TextArea from "../../../components/form/input/TextArea";
import Dropdown from "../../../components/form/input/Dropdown";
import Checkbox from "../../../components/form/input/Checkbox";
import Button from "../../../components/ui/button/Button";
import OutlineBtn from "../../../components/ui/button/OutLine";

const GenerateReportModal = () => {
  const handleSubmit = () => console.log("Submitting form...");
  const [message, setMessage] = useState("");

  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
      <div className="px-2 pr-14">
        <HeadingTwo text="Generate Report" />
      </div>
      <div className="flex flex-col px-3">
        <Form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1">
                <Label htmlFor="Report-Type" children="Report Type" />
                <Dropdown
                  id="Report-Type"
                  name="Report-Type"
                  className="w-full"
                  options={[
                    { value: "", label: "Select" },
                    { value: "customer1", label: "Customer 1" },
                    { value: "customer2", label: "Customer 2" },
                  ]}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="Report-Name" children="Report Name" />
                <Input
                  type="text"
                  id="update-quantity"
                  placeholder="Report Name"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1">
                <Label htmlFor="Report-Duration" children="Report Duration" />
                <DatePicker
                  id="date-picker"
                  placeholder="Select a date"
                  onChange={(dates, currentDateString) => {
                    // Handle your logic
                    console.log({ dates, currentDateString });
                  }}
                />
              </div>
            </div>
            <div className="w-full space-y-2">
              <Label htmlFor="report-fields">Select Report Fields</Label>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 space-y-3">
                <Checkbox label="Customer Name" />
                <Checkbox label="Order Date" />
                <Checkbox label="Total Amount" />
                <Checkbox label="Payment Status" />
                <Checkbox label="Delivery Status" />
              </div>
            </div>

            <div className="w-full space-y-2">
              <Label htmlFor="report-fields">Select Report Fields</Label>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 space-y-3">
                <Checkbox label="Customer Name" />
                <Checkbox label="Order Date" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1">
                <Label children="Invoice Date" />
                <Dropdown
                  id="Report-Type"
                  name="Report-Type"
                  className="w-full"
                  options={[
                    { value: "", label: "Select" },
                    { value: "customer1", label: "Customer 1" },
                    { value: "customer2", label: "Customer 2" },
                  ]}
                />
              </div>
              <div className="flex-1">
                <Label children="Due Date" />
                <Dropdown
                  id="Report-Type"
                  name="Report-Type"
                  className="w-full"
                  options={[
                    { value: "", label: "Select" },
                    { value: "customer1", label: "Customer 1" },
                    { value: "customer2", label: "Customer 2" },
                  ]}
                />
              </div>
            </div>

            <div>
                <OutlineBtn BtnName="Add More Chart" className="px-2 py-2" />
            </div>

            <div className="flex">
              <Button className="w-full" variant="secondary" size="sm">
                Cancel
              </Button>
              <Button className="w-full" size="sm">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default GenerateReportModal;
