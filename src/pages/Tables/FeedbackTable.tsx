import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Modal } from "../../components/ui/modal";
import QuickActionFeedback from "../../components/ui/QuickActionFeedback";

const data = [
  {
    id: "1",
    name: "John Doe",
    type: "Bug Report",
    Category: "Electronics",
    subject: "Issue with login page",
    date: "12/01/2025",
    status: "Delivered",
  },
  {
    id: "2",
    name: "John Doe",
    type: "Bug Report",
    Category: "Electronics",
    subject: "Issue with login page",
    date: "12/01/2025",
    status: "Delivered",
  },
  {
    id: "3",
    name: "John Doe",
    type: "Bug Report",
    Category: "Electronics",
    subject: "Issue with login page",
    date: "12/01/2025",
    status: "Pending",
  },
  {
    id: "4",
    name: "John Doe",
    type: "Bug Report",
    Category: "Electronics",
    subject: "Issue with login page",
    date: "12/01/2025",
    status: "Pending",
  },
  {
    id: "5",
    name: "John Doe",
    type: "Bug Report",
    Category: "Electronics",
    subject: "Issue with login page",
    date: "12/01/2025",
    status: "Pending",
  },
  {
    id: "6",
    name: "John Doe",
    type: "Bug Report",
    Category: "Electronics",
    subject: "Issue with login page",
    date: "12/01/2025",
    status: "Pending",
  },
];

const PAGE_SIZE = 3;

const FeedbackTable = ({ BtnText = "View Details" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeRowId, setActiveRowId] = useState<string | null>(null);

  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const paginatedData = data.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[768px] w-full text-left text-sm">
        <thead className="font-medium text-[12px] text-[#333333]/50 dark:text-[#8E8E9C]">
          <tr>
            <th className="p-4">
              <input
                id="checkbox-all"
                type="checkbox"
                className="h-4 w-4 rounded-sm border-[#EA7D00] bg-gray-100 text-[#EA7D00]"
              />
            </th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Username</th>
            <th className="px-6 py-3">Issue Type</th>
            <th className="px-6 py-3">Subject</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr
              key={item.id}
              className="text-[14px] text-[#666666] dark:text-[#F2F2FE]"
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded-sm border-[#EA7D00] text-[#EA7D00]"
                />
              </td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4 font-medium whitespace-nowrap">
                {item.name}
              </td>
              <td className="px-6 py-4">{item.type}</td>
              <td className="px-6 py-4">{item.subject}</td>
              <td className="px-6 py-4">
                <div className="font-semibold rounded bg-[#DEF7E7] px-2 py-2 text-center text-[11px] text-[#22C55E]">
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setActiveRowId(item.id)}
                  className="font-medium flex bg-[#7476F1] rounded px-4 py-2 text-[11px] text-white transition-colors hover:bg-blue-700"
                >
                  <FiEdit className="mr-1" />
                  {BtnText}
                </button>

                {/* Modal specific to this row */}
                {activeRowId === item.id && (
                  <Modal
                    isOpen={true}
                    onClose={() => setActiveRowId(null)}
                    className="max-w-[600px] m-4"
                    showCloseButton
                  >
                    <QuickActionFeedback onClose={() => setActiveRowId(null)} />
                  </Modal>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

{/* Pagination Controls */}
      <div className="mt-4 flex items-center justify-center space-x-3">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.458 10.6797L11.2288 9.90889L8.72503 7.39969L11.2288 4.89049L10.458 4.11969L7.17796 7.39969L10.458 10.6797Z"
              fill="#151D48"
            />
            <path
              d="M6.85444 10.6797L7.62524 9.90889L5.12151 7.39969L7.62524 4.89049L6.85444 4.11969L3.57444 7.39969L6.85444 10.6797Z"
              fill="#151D48"
            />
          </svg>
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="rounded-[26.24px] dark:text-white border border-[#F5F5F5] px-3 py-3"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.98872 10.6797L9.75952 9.90889L7.25579 7.39969L9.75952 4.89049L8.98872 4.11969L5.70872 7.39969L8.98872 10.6797Z"
              fill="#151D48"
            />
          </svg>
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`rounded-[100px] border border-[#F5F5F5] dark:text-white px-5 py-3 ${
              currentPage === i + 1
                ? "bg-[#5D5FEF] text-white"
                : "rounded-[26.24px] border border-[#F5F5F5] px-5 py-3"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83086 4.11914L5.06006 4.88994L7.56379 7.39914L5.06006 9.90834L5.83086 10.6791L9.11086 7.39914L5.83086 4.11914Z"
              fill="#151D48"
            />
          </svg>
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
        >
          {/* <img src={<FiChevronRight/>} alt="" className="h-6 w-6" /> */}

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.54351 4.11914L2.77271 4.88994L5.27644 7.39914L2.77271 9.90834L3.54351 10.6791L6.8235 7.39914L3.54351 4.11914Z"
              fill="#151D48"
            />
            <path
              d="M7.14702 4.11914L6.37622 4.88994L8.87995 7.39914L6.37622 9.90834L7.14702 10.6791L10.427 7.39914L7.14702 4.11914Z"
              fill="#151D48"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeedbackTable;
