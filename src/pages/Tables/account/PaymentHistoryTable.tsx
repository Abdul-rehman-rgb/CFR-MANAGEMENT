import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import HoverDropdown from "../../../components/ui/button/HoverDropdown";
import { Modal } from "../../../components/ui/modal";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Label from "../../../components/form/Label";
import Paragragh from "../../../components/ui/Paragrapg";
import Button from "../../../components/ui/button/Button";
import ViewDetails from "../../../components/ui/button/ViewDetails";

const data = [
  {
    id: "#456456545",
    name: "Invoice Payment",
    Category: "Sales",
    amount: "$3,434",
    date: "12/01/2025",
    status: "Delivered",
  },
  {
    id: "#456454645",
    name: "Invoice Payment",
    Category: "Sales",
    amount: "$3,434",
    date: "12/01/2025",
    status: "Delivered",
  },
  {
    id: "#456456425",
    name: "Invoice Payment",
    Category: "Sales",
    amount: "$3,434",
    date: "12/01/2025",
    status: "Pending",
  },
  {
    id: "#456415645-1",
    name: "Invoice Payment",
    Category: "Sales",
    amount: "$3,434",
    date: "12/01/2025",
    status: "Pending",
  },
  {
    id: "#456415645-2",
    name: "Invoice Payment",
    Category: "Sales",
    amount: "$3,434",
    date: "12/01/2025",
    status: "Pending",
  },
  {
    id: "#456415645-3",
    name: "Invoice Payment",
    Category: "Sales",
    amount: "$3,434",
    date: "12/01/2025",
    status: "Pending",
  },
];

const PAGE_SIZE = 3;

const PaymentHistoryTable = ({ BtnText = "View Details" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const [activeRowId, setActiveRowId] = useState<string | null>(null);

  const paginatedData = data.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="w-full">
      <table className="min-w-[768px] w-full text-left text-sm">
        <thead className="table-head dark:text-[#8E8E9C]">
          <tr>
            <th className="p-4">
              <input
                id="checkbox-all"
                type="checkbox"
                className="h-4 w-4 rounded-sm border-[#EA7D00] bg-gray-100 text-[#EA7D00]"
              />
            </th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Payment Type</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Status Action</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr
              key={item.id}
              className="text-[14px] text-[#666666] font-medium dark:text-[#F2F2FE]/20"
            >
              <td className="w-4 p-4">
                <input
                  id={`checkbox-table-${item.id}`}
                  type="checkbox"
                  className="h-4 w-4 rounded-sm border-[#EA7D00] text-[#EA7D00]"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.date}
              </td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.Category}</td>
              <td className="px-6 py-4">{item.amount}</td>
              <td className="px-6 py-4 text-[#FFBF00]">
                <HoverDropdown
                  DropdownName="Paid"
                  className="text-[#333333] font-medium leading-[20px] text-[10px] border-[#A9A9A9]/55"
                />
              </td>
              <td className="px-6 py-4">
                <div className="font-semibold rounded bg-[#DEF7E7] px-2 py-2 text-center text-[11px] text-[#22C55E]">
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4">

                <ViewDetails BtnName="View Details" icon={FiEye} onClick={() => setActiveRowId(item.id)} />

                {/* Row-specific Modal */}
                {activeRowId === item.id && (
                  <Modal
                    isOpen={true}
                    onClose={() => setActiveRowId(null)}
                    className="max-w-[725px] m-4"
                    showCloseButton={true}
                  >
                    <div className="p-4">
                      <HeadingOne text="Payment Summary" />
                      <div className="mt-4 flex flex-row justify-between bg-[#F2F2FE]/60 dark:bg-[#0D0D0D] p-4 rounded">
                        <div className="space-y-3">
                          <Label children="Transaction Type" />
                          <Label children="Reference ID" />
                          <Label children="Category" />
                          <Label children="Client/Vendor" />
                          <Label children="Payment Method" />
                          <Label children="Amount" />
                          <Label children="Status" />
                          <Label children="Action" />
                        </div>
                        <div className="space-y-3 text-right text-sm text-gray-600">
                          <Paragragh para="Payment" />
                          <Paragragh para={item.id} />
                          <Paragragh para={item.Category} />
                          <Paragragh para={"Client/Vendor"} />
                          <Paragragh para={"Bank Transfer"} />
                          <Paragragh para={item.amount} />
                          <Paragragh para={item.status} />
                          <Paragragh para={"Record Payment"} />
                        </div>
                      </div>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="outline"
                          className="bg-[#5D5FEF] mx-5 my-1 w-full"
                          size="md"
                        >
                          Print
                        </Button>
                        <Button
                          variant="primary"
                          className="bg-[#5D5FEF] mx-5 my-1 w-full"
                          size="md"
                        >
                          Record Payment
                        </Button>
                      </div>
                    </div>
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

export default PaymentHistoryTable;
