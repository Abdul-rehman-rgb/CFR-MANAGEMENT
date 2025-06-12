// import { Modal } from "../ui/modal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";

export default function MultiProductSelection() {
  return (
    <>
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-5">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Contact & Address
          </h4>
          {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Update your details to keep your profile up-to-date.
          </p> */}
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div className="col-span-2">
              <Label>Search Product</Label>
              <Input type="text" value="Product A" />
            </div>
            <div>
              <div className="mt-3">
                <form className="flex flex-col">
                  <div className="h-[450px]  px-2 pb-3">
                    <div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        <div>
                          <Label>Facebook</Label>
                          <Input
                            type="text"
                            value="https://www.facebook.com/PimjoHQ"
                          />
                        </div>

                        <div>
                          <Label>X.com</Label>
                          <Input type="text" value="https://x.com/PimjoHQ" />
                        </div>

                        <div>
                          <Label>Linkedin</Label>
                          <Input
                            type="text"
                            value="https://www.linkedin.com/company/pimjo"
                          />
                        </div>

                        <div>
                          <Label>Instagram</Label>
                          <Input
                            type="text"
                            value="https://instagram.com/PimjoHQ"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-7">
                      <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                        Personal Information
                      </h5>

                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        <div className="col-span-2 lg:col-span-1">
                          <Label>First Name</Label>
                          <Input type="text" value="Musharof" />
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                          <Label>Last Name</Label>
                          <Input type="text" value="Chowdhury" />
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                          <Label>Email Address</Label>
                          <Input type="text" value="randomuser@pimjo.com" />
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                          <Label>Phone</Label>
                          <Input type="text" value="+09 363 398 46" />
                        </div>

                        <div className="col-span-2">
                          <Label>Bio</Label>
                          <Input type="text" value="Team Manager" />
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
