// import { Modal } from "../ui/modal";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import ProductList from "./MultiProductSelectionModal";

export default function MultiProductSelection() {
  return (
    <>
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Multi Product Selection
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
              <h5 className="mb-5 text-sm font-medium text-gray-800 dark:text-white/90 lg:mb-1 lg:mt-4">
                Products <span className="text-xs text-gray-400"> (Showing 14 Products) </span>
              </h5>

              <div className="">
                <div>
                  <ProductList />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
