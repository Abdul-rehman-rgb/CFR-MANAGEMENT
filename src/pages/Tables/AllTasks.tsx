import React from "react";
import { FiCheck } from "react-icons/fi";

const data = [
  {
    id: "#1",
    task: "Complete Vendor Contract Review",
    assign: "Team A",
    priority: "high",
    deadline: "2024-01-01",
    action: "Marked as Completed",
    status: "Delivered",
  },
  {
    id: "#2",
    task: "Complete Vendor Contract Review",
    assign: "Team A",
    priority: "high",
    deadline: "2024-01-02",
    action: "Marked as Completed",
    status: "Pending",
  },
  {
    id: "#3",
    task: "Complete Vendor Contract Review",
    assign: "Team A",
    priority: "high",
    deadline: "2024-01-03",
    action: "Marked as Completed",
    status: "Delivered",
  },
  {
    id: "#4",
    task: "Complete Vendor Contract Review",
    assign: "Team A",
    priority: "high",
    deadline: "2024-01-04",
    action: "Marked as Completed",
    status: "Delivered",
  },
  {
    id: "#5",
    task: "Complete Vendor Contract Review",
    assign: "Team A",
    priority: "high",
    deadline: "2024-02-01",
    action: "Marked as Completed",
    status: "Pending",
  },
  {
    id: "#6",
    task: "Complete Vendor Contract Review",
    assign: "Team A",
    priority: "high",
    deadline: "2024-02-02",
    action: "Marked as Completed",
    status: "Delivered",
  },
];

const AllTasks = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-[#0D0D0D] dark:text-[#CECFFA] p-4">
      <table className="min-w-[768px] w-full text-left text-sm">
        <thead className="font-medium text-[12px] text-[#333333]/50 dark:text-[#8E8E9C]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Task
            </th>
            <th scope="col" className="px-6 py-3">
              Assigned To
            </th>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
            <th scope="col" className="px-6 py-3">
              Deadline
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={`text-[14px] text-[#666666] hover:bg-gray-50`}
            >
              <td className="px-6 py-4">{item.task}</td>
              <th
                scope="row"
                className="text[14px] poppins-medium px-6 py-4 whitespace-nowrap text-[#666666]"
              >
                {item.assign}
              </th>
              <td className="px-6 py-4">{item.priority}</td>
              <td className="px-6 py-4">{item.deadline}</td>
              <td className="px-6 py-4">
                <div
                  className={`poppins-semibold rounded px-2 py-2 text-center text-[11px] ${
                    item.status === "Delivered"
                      ? "bg-[#DEF7E7] text-[#22C55E]"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4">
  <div
    className={`font-semibold rounded px-2 py-2 text-center text-white text-[11px] bg-[#22C55E] flex items-center justify-center`}
  >
    <FiCheck className="text-white mr-1 h-5 w-5" />
    {item.action}
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTasks;
