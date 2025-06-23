/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

// Dummy feedback data for demonstration
const feedbackData = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  date: "12/01/2025",
  userName: "John Doe",
  issueType: "Bug Report",
  subject: "Issue with login page",
  status: i < 4 ? "Resolved" : "Pending",
}));

const statusColors: Record<string, string> = {
  Resolved: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const FeedbackTablePage: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>(feedbackData.map(f => f.id));

  // Pagination (static for now)
  const [page, setPage] = useState(1);

  const toggleRow = (id: number) => {
    setSelectedRows((rows) =>
      rows.includes(id) ? rows.filter((rowId) => rowId !== id) : [...rows, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <h2 className="font-semibold text-lg text-[#5D5FEF]">Feedback</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#dadbf5] text-[#5D5FEF] font-medium shadow hover:bg-[#f4f4ff] transition">
            <svg width={20} height={20} className="text-[#5D5FEF]" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="2" rx="1" fill="#5D5FEF" />
              <rect x="11" y="3" width="2" height="18" rx="1" fill="#5D5FEF" />
            </svg>
            Select Date Range
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#dadbf5] text-[#5D5FEF] font-medium shadow hover:bg-[#f4f4ff] transition">
            <svg width={18} height={18} className="text-[#5D5FEF]" fill="none" viewBox="0 0 24 24">
              <path d="M4 4v5h.582M20 20v-5h-.581M5 9A7 7 0 1120 15.87" stroke="#5D5FEF" strokeWidth={2} strokeLinecap="round" />
            </svg>
            Refresh
          </button>
          <button className="px-5 py-2 rounded-lg bg-[#5D5FEF] text-white font-semibold shadow hover:bg-[#3e40a7] transition">
            + Share Feedback
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow p-6">
        {/* Section Title and Search/Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <div className="font-bold text-xl text-[#23235F]">Feedback</div>
            <div className="text-gray-400 text-sm">Real-time data on feedback provide by users.</div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="relative flex items-center">
              <input
                className="pl-9 pr-3 py-2 rounded-lg border border-gray-200 bg-[#f8f8f8] min-w-[210px] focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
                placeholder="Search stocks, product, etc."
                type="search"
              />
              <svg
                className="absolute left-2 top-2.5 text-[#7b7fc1]"
                width={18}
                height={18}
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle cx={11} cy={11} r={8} stroke="#7b7fc1" strokeWidth={2} />
                <path d="M21 21l-3.5-3.5" stroke="#7b7fc1" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </div>
            <button className="flex items-center px-4 py-2 rounded-lg border border-[#dadbf5] bg-white text-[#23235F] font-medium shadow hover:bg-[#f4f4ff] transition">
              Filters
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg border border-[#dadbf5] bg-white text-[#23235F] font-medium shadow hover:bg-[#f4f4ff] transition">
              Export
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[#7b7fc1] text-xs font-semibold">
                <th className="py-3 px-2 text-left">
                  {/* Empty for checkbox */}
                </th>
                <th className="py-3 px-2 text-left">Date</th>
                <th className="py-3 px-2 text-left">User Name</th>
                <th className="py-3 px-2 text-left">Issue Type</th>
                <th className="py-3 px-2 text-left">Subject</th>
                <th className="py-3 px-2 text-left">Status</th>
                <th className="py-3 px-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((item) => (
                <tr key={item.id} className="border-b last:border-0 border-[#f4f4ff] hover:bg-[#f8f8f8]">
                  <td className="py-2 px-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => toggleRow(item.id)}
                      className="accent-[#5D5FEF] w-4 h-4 rounded"
                    />
                  </td>
                  <td className="py-2 px-2 font-medium">{item.date}</td>
                  <td className="py-2 px-2">{item.userName}</td>
                  <td className="py-2 px-2">{item.issueType}</td>
                  <td className="py-2 px-2">{item.subject}</td>
                  <td className="py-2 px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2 px-2">
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#5D5FEF] text-white font-medium text-xs shadow hover:bg-[#3e40a7] transition">
                      <svg width={16} height={16} fill="none" className="mr-1" viewBox="0 0 24 24">
                        <path
                          d="M15.25 11.25L12 14.5m0 0l-3.25-3.25M12 14.5V6"
                          stroke="#fff"
                          strokeWidth={1.7}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 gap-1">
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#5D5FEF] hover:bg-[#f4f4ff]" disabled>
            &laquo;
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#5D5FEF] hover:bg-[#f4f4ff]" disabled>
            &lsaquo;
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-[#5D5FEF] font-bold shadow">
            1
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#5D5FEF] hover:bg-[#f4f4ff]">2</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#5D5FEF] hover:bg-[#f4f4ff]">3</button>
          <span className="mx-2 text-[#7b7fc1]">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#5D5FEF] hover:bg-[#f4f4ff]">10</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#5D5FEF] hover:bg-[#f4f4ff]">&rsaquo;</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#5D5FEF] hover:bg-[#f4f4ff]">&raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTablePage;