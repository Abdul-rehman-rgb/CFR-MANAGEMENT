

import Button from "../ui/button/Button";

export default function QuickAction() {
  return (
    <div className="QuickActionMain">

    <h4>Quick Action</h4>

    <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:gap-4 pt-2 pb-3 ">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl  dark:bg-white/[0.03] ">
        

        <div className="flex items-end justify-between ">
            <Button
              className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
              children={"+ Add new order"}             
              />

          
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl  dark:bg-white/[0.03] ">
        

        <div className="flex items-end justify-between ">
            <Button
              className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
              children={"+ Generate Invoices"}             
              />

          
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl  dark:bg-white/[0.03] ">
        

        <div className="flex items-end justify-between ">
            <Button
              className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
              children={"+ Updated Inventory"}             
              />

          
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
      
    </div>

    </div>
  );
}
