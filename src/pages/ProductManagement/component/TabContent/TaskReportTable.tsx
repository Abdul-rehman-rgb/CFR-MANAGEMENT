/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiDownload, FiFilter } from "react-icons/fi";
import Export from "../../../../components/ui/button/Export";

import StatusTable from "../../../Tables/StatusTable";
import { useState } from "react";

const TaskReportTable = () => {
  const dummyData = [
  {
    id: 1,
    amount: "$56374",
    priority: "High",
    created: "2025-01-24",
    deadline: "2025-01-24",
    status: "Completed",
    notes: "Reduced 20 units of SKU123",
    selected: true,
  },
  {
    id: 2,
    amount: "$3746",
    priority: "Low",
    created: "2025-01-24",
    deadline: "2025-01-24",
    status: "In Progress",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
  {
    id: 3,
    amount: "$4000",
    priority: "Medium",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "Failed",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
    {
    id: 4,
    amount: "$4000",
    priority: "High",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "Completed",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
      {
    id: 5,
    amount: "$4000",
    priority: "Low",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "In Progress",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
  {
    id: 5,
    amount: "$4000",
    priority: "Low",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "In Progress",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },

  {
    id: 6,
    amount: "$4000",
    priority: "Low",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "In Progress",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
  {
    id: 7,
    amount: "$4000",
    priority: "Low",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "In Progress",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
  {
    id: 8,
    amount: "$4000",
    priority: "Low",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "In Progress",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
  {
    id: 9,
    amount: "$4000",
    priority: "Low",
    created: "2025-01-0",
    deadline: "2025-01-1",
    status: "In Progress",
    notes: "Reduced 20 units of SKU123",
    selected: false,
  },
  // ...more rows
];

  const [rows, setRows] = useState(dummyData);

  const toggleSelect = (id: number) => {
    setRows((prev: any[]) =>
      prev.map((r) => (r.id === id ? { ...r, selected: !r.selected } : r))
    );
  };

  
  return (
    <>
      {/* Main UI */}
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-0 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            {/* <HeadingOne text="Stock Management" />
            <Paragragh para="Real-time data on product and manage products." /> */}
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            {/* <SearchInput /> */}
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export BtnName="Filter" icon={FiDownload} />
              </div>

              <div className="mr-2">
                <Export BtnName="Export" icon={FiFilter} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <StatusTable data={rows} onSelect={toggleSelect} rowsPerPage={7} />
        </div>
      </div>
    </>
  );
};

export default TaskReportTable;
