// import { Modal } from "../ui/modal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import DatePicker from "../../form/date-picker";
import { TimeIcon } from "../../../icons";
import TextArea from "../../form/input/TextArea";
import { useState } from "react";

export default function MultiProductSelection() {
  const [messageTwo, setMessageTwo] = useState("");

  return (
    <>
      <div className="no-scrollbar max-w-[1000px] mx-auto overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Create Target
          </h4>
          {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Update your details to keep your profile up-to-date.
          </p> */}
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[300px] px-2 pb-3">
            {/* <div className="col-span-2">
                  <Label>Search Product</Label>
                  <Input type="text" value="Product A" />
                </div> */}
                
            <div>
              <div className="mt-3">
                <div className="col-span-2 lg:col-span-2">
                          <Label>Target Amount</Label>
              <Input type="text" value=""  placeholder="Enter target amount"/>
                        </div>
                <form className="flex flex-col">
                  <div className="px-2 pb-3">
                    <div className="mt-4">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        <div className="col-span-2 lg:col-span-1">
                          <Label>Select Delivery Date</Label>
                          <DatePicker
                            id="date-picker"
                            placeholder="Select a date"
                            onChange={(dates, currentDateString) => {
                              // Handle your logic
                              console.log({ dates, currentDateString });
                            }}
                          />
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                          <Label>Delivery time</Label>
                          <div className="relative">
                            <Input
                              type="time"
                              id="tm"
                              name="tm"
                              onChange={(e) => console.log(e.target.value)}
                            />
                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                              <TimeIcon className="size-6" />
                            </span>
                          </div>
                        </div>

                        <div className="col-span-2 lg:col-span-2">
                          <Label>Notes(Optional)</Label>
                          <TextArea
                            rows={3}
                            value={messageTwo}
                            // error
                            onChange={(value) => setMessageTwo(value)}
                            // hint="Please enter a valid message."
                            placeholder="Add additional details"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
