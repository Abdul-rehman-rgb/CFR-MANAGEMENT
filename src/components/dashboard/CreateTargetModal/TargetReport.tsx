
import TargetReportTable from "../../../pages/ProductManagement/component/TabContent/TargetReportTable";

export default function MultiProductSelection() {

  return (
    <>
      <div className="no-scrollbar min-w-[1000px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Target Report 
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing targets for This Month
          </p>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
              <TargetReportTable/>
          </div>
        </form>
      </div>
    </>
  );
}
