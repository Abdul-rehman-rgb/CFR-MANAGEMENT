import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import Form from "../../form/Form";
// import FileUploadDropZone from "../../common/FileUploadDropZone";
import TextArea from "../../form/input/TextArea";
import { useState } from "react";
import DatePicker from "../../form/date-picker";
// import HeadingFour from "../../ui/heading/HeadingFour";
// import HeadingThree from "../../ui/heading/HeadingThree";
// import HeadingTwo from "../../ui/heading/HeadingTwo";

const Tabs = () => {


  const handleSubmit = () => console.log("Submitting form...");
  const [message, setMessage] = useState("");

  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto bg-white dark:bg-[#0D0D0D] py-6">
      <div className="flex flex-col px-2">
          <Form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex-1">
                  <Label htmlFor="customer-name" children="Customer Name" />
                  <Input
                    type="text"
                    id="current-stock"
                    placeholder="Quantity"
                  />
                </div>
                <div className="flex-1">
                  <Label
                    htmlFor="customer-contact"
                    children="Customer Contact"
                  />
                  <Input
                    type="number"
                    id="update-quantity"
                    placeholder="Quantity"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex-1">
                  <Label children="Invoice Date" />
                  <DatePicker
                    id="date-picker"
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) => {
                      // Handle your logic
                      console.log({ dates, currentDateString });
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Label children="Due Date" />
                  <DatePicker
                    id="date-picker2"
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) => {
                      // Handle your logic
                      console.log({ dates, currentDateString });
                    }}
                  />
                </div>
              </div>
              <Label children="Reference Number" />
              <Input placeholder="e.g., Order number" />

              <div className="col-span-2">
                <Label>Invoice Address</Label>

                <TextArea
                  value={message}
                  onChange={(value) => setMessage(value)}
                  rows={3}
                  placeholder="Add a main address"
                />
              </div>

              <div className="col-span-2">
                <Label>Delivery Address</Label>

                <TextArea
                  value={message}
                  onChange={(value) => setMessage(value)}
                  rows={3}
                  placeholder="Add a delivery address"
                />
              </div>

              {/* <div className="flex flex-wrap items-center gap-4">
                        <Checkbox
                          label="Pallet"
                          checked={true}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="Cartons"
                          checked={false}
                          onChange={() => {}}
                        />

                        
                      </div> */}
            </div>
          </Form>

       
      </div>
    </div>
  );
};

export default Tabs;
