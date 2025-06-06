import React from "react";

const TaskTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-500 uppercase bg-white border-b hover:bg-gray-50 dark:border-gray-800 dark:text-white dark:bg-[#0D0D0D]">
          <tr className="dark:text-white dark:bg-[#0D0D0D] ">
            <th className="px-6 py-3">Task</th>
            <th className="px-6 py-3">Assigned To</th>
            <th className="px-6 py-3">Priority</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:text-white dark:bg-[#0D0D0D]">
          {data.map((task, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 dark:border-gray-800">
              <td className="px-6 py-4">{task.task}</td>
              <td className="px-6 py-4">{task.assignedTo}</td>
              <td className="px-6 py-4">{task.priority}</td>
              <td className="px-6 py-4">{task.deadline}</td>
              <td className="px-6 py-4">
                <span className="text-green-700 bg-green-100 text-xs font-medium px-3 py-1 rounded-full">
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-green-700 bg-green-100 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  ✓ Marked as Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
