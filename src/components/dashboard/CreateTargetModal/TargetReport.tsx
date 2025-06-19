
import TaskReportTable from "../../../pages/ProductManagement/component/TabContent/TaskReportTable";

export default function TaskReport() {

  return (
    <>
      <div className="no-scrollbar max-w-[1000px] mx-auto overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Task Report 
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing tasks for This Month
          </p>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
              <TaskReportTable/>
          </div>
        </form>
      </div>
    </>
  );
}
