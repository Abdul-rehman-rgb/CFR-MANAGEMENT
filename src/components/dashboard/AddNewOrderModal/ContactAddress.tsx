// import { Modal } from "../ui/modal";
import { useState } from "react";
import Input from "../../form/input/InputField";
import SingleSelect from "../../form/input/SingleSelect";
import TextArea from "../../form/input/TextArea";
import Label from "../../form/Label";

export default function MultiProductSelection() {
    const [message, setMessage] = useState("");
  return (
    <>
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
        <div className="pl-10 px-2 pr-14 pb-5">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Contact & Address
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-2">
            <div className="col-span-2">
              <Label>Search User or Address</Label>
              <Input type="text" value="Product A" />
            </div>
            <div>
              <div className="mt-3">
                <form className="flex flex-col">
                  <div className="h-[350px]  px-2 pb-3 pt-2">
                    <div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                        <div>
                          <Label>Name</Label>
                          <Input
                            type="text"
                            placeholder="Enter customer full name"
                            // value="https://www.facebook.com/PimjoHQ"
                          />
                        </div>

                        <div>
                          <Label>Phone Number</Label>
                          <Input type="text" 
                          // value="https://x.com/PimjoHQ" 
                          placeholder="Enter customer phone number"/>
                        </div>

                        <div>
                          <Label>Email Address</Label>
                          <Input type="text" 
                          // value="randomuser@pimjo.com" 
                          placeholder="Enter email address" />
                        </div>

                        <div>
                          <Label>Select Country</Label>
                          <div className=" w-full">
        

                        <SingleSelect
                          options={['Country 1', 'Country 2', 'Country 3']}
                          onSelect={(value: any) => console.log('Selected:', value)}
                        />
                      </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                          <Label>PIN Code</Label>
                          <Input type="text" 
                          placeholder="Your area pin code"/>
                        </div>

                        <div>
                          <Label>City</Label>
                          <div className=" w-full">
        

                        <SingleSelect
                          options={['City 1', 'City 2', 'City 3']}
                          onSelect={(value: any) => console.log('Selected:', value)}
                        />
                      </div>
                        </div>

                         <div className="col-span-2">
                          <Label>Shipping Address</Label>
                          
                          <TextArea
                            value={message}
                            onChange={(value) => setMessage(value)}
                            rows={3}
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
