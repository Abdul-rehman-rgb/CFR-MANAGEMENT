// import { Modal } from "../ui/modal";

export default function MultiProductSelection() {

  return (
    <>
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-5">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 mx-auto">
            Order Created Successfully
          </h4>
          {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Update your details to keep your profile up-to-date.
          </p> */}
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div className="col-span-2">
                  <p>
                    Your DN #74365734 has been created successfully, you can check it in order management now!
                  </p>
                </div>
            
          </div>
        </form>
      </div>
    </>
  );
}
