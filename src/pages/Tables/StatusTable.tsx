import React, { useMemo, useState } from "react";
import clsx from "clsx";

interface RowData {
  id: number;
  amount: string;
  priority: "High" | "Medium" | "Low";
  created: string;
  deadline: string;
  status: "Completed" | "In Progress" | "Failed";
  notes: string;
  selected: boolean;
}

interface StatusTableProps {
  data: RowData[];
  onSelect: (id: number) => void;
  rowsPerPage?: number;          // ← new (defaults to 7)
}

/* --- colour maps ------------------------------------------------------- */
const statusClasses: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

const priorityColors: Record<string, string> = {
  High: "text-red-500",
  Medium: "text-yellow-500",
  Low: "text-green-500",
};
/* ----------------------------------------------------------------------- */

const StatusTable: React.FC<StatusTableProps> = ({
  data,
  onSelect,
  rowsPerPage = 7,
}) => {
  /* ---------------- pagination state ---------------- */
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(data.length / rowsPerPage));

  const pageData = useMemo(
    () => data.slice((page - 1) * rowsPerPage, page * rowsPerPage),
    [page, rowsPerPage, data]
  );
  /* -------------------------------------------------- */

  return (
    <>
      {/* ---------- TABLE ---------- */}
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-[12px] leading-[18px] text-[#33333380]">
            <tr>
              {["Target Amount", "Priority", "Target Created", "Deadline", "Status", "Notes"].map(
                (h) => (
                  <th key={h} className="p-3 font-medium tracking-normal">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-gray-700">
            {pageData.map((row) => (
              <tr key={row.id}>
                <td className="p-3 whitespace-nowrap">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={row.selected}
                      onChange={() => onSelect(row.id)}
                      className="accent-indigo-500"
                    />
                    <span>{row.amount}</span>
                  </label>
                </td>

                <td className={clsx("p-3 font-medium", priorityColors[row.priority])}>
                  {row.priority}
                </td>

                <td className="p-3 whitespace-nowrap">{row.created}</td>
                <td className="p-3 whitespace-nowrap">{row.deadline}</td>

                <td className="p-3">
                  <span
                    className={clsx(
                      "inline-block rounded-full px-3 py-1 text-xs font-medium",
                      statusClasses[row.status]
                    )}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="p-3 truncate max-w-[16rem]">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- PAGINATION ---------- */}
      <Pagination page={page} pageCount={pageCount} setPage={setPage} />
    </>
  );
};

/* ---------- tiny paginator ------------------------------------------------ */
interface PagerProps {
  page: number;
  pageCount: number;
  setPage: (p: number) => void;
}

const Pagination: React.FC<PagerProps> = ({ page, pageCount, setPage }) => {
  const neighbours = 1; // how many numbers on each side of current
  const numbers: (number | "...")[] = [];

  const push = (n: number | "...") => numbers.push(n);

  if (pageCount <= 5) {
    for (let i = 1; i <= pageCount; i++) push(i);
  } else {
    const start = Math.max(2, page - neighbours);
    const end = Math.min(pageCount - 1, page + neighbours);

    push(1);
    if (start > 2) push("...");
    for (let i = start; i <= end; i++) push(i);
    if (end < pageCount - 1) push("...");
    push(pageCount);
  }

  /* button helpers */
  const btn = (
    label: React.ReactNode,
    target: number,
    disabled = false,
    active = false
  ) => (
    <button
      key={String(label)}
      onClick={() => !disabled && setPage(target)}
      disabled={disabled}
      className={clsx(
        "h-8 w-8 rounded-full border text-xs flex items-center justify-center",
        active
          ? "bg-indigo-500 text-white border-indigo-500"
          : "border-gray-300 text-gray-600 hover:bg-gray-100",
        disabled && "opacity-40 cursor-not-allowed"
      )}
    >
      {label}
    </button>
  );

  return (
    <nav className="mt-4 flex justify-center gap-2">
      {btn("«", 1, page === 1)}
      {btn("‹", page - 1, page === 1)}

      {numbers.map((n) =>
        n === "..."
          ? (
            <span key="ellipsis" className="w-8 h-8 flex items-center justify-center text-gray-400">
              …
            </span>
          )
          : btn(n, n, false, n === page)
      )}

      {btn("›", page + 1, page === pageCount)}
      {btn("»", pageCount, page === pageCount)}
    </nav>
  );
};

export default StatusTable;
