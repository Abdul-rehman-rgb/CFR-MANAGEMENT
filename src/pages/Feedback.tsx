/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import HeadingOne from "../components/ui/heading/HeadinhOne";
import Paragragh from "../components/ui/Paragrapg";
import SearchInput from "../components/form/SearchInput";
import Export from "../components/ui/button/Export";
import { FiDownload, FiFilter } from "react-icons/fi";
import FeedbackTable from "./Tables/FeedbackTable";
import FeedbackHeader from "../components/common/FeedbackHeader";
import { Modal } from "../components/ui/modal";
import Dropdown from "../components/form/input/Dropdown";
import Input from "../components/form/input/InputField";
import Label from "../components/form/input/Label";
import TextArea from "../components/form/input/TextArea";
import Button from "../components/ui/button/Button";

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
  const [selectedRows, setSelectedRows] = useState<number[]>(
    feedbackData.map((f) => f.id)
  );

  // Pagination (static for now)
  const [page, setPage] = useState(1);

  const toggleRow = (id: number) => {
    setSelectedRows((rows) =>
      rows.includes(id) ? rows.filter((rowId) => rowId !== id) : [...rows, id]
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(0);
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 mb-5">
          <FeedbackHeader
            onExport={handleExport}
            onRefresh={handleRefresh}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onAddNewOrder={() => setIsModalOpen(true)}
            headerTitle="Feedback"
          />
        </div>
      </div>

      {/* Modal for New Order */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="max-w-[724px] p-6"
        showCloseButton={false}
      >
        <HeadingOne text={"Share Feedback"} />
        <div className="flex flex-col space-y-4">
          <div className="flex-1">
            <Label htmlFor="notes" children="Issue Type" />
            <Dropdown
              id="Compliant"
              name="Compliant"
              options={[
                { value: "", label: "Select" },
                { value: "customer1", label: "Customer 1" },
                { value: "customer2", label: "Customer 2" },
              ]}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="notes" children="Subject" />
            <Input type="text" />
          </div>
          <div className="flex-1">
            <Label htmlFor="notes" children="Description" />
            <TextArea rows={3} />
          </div>
          <div className="flex justify-end gap-2 mt-6">
        <Button variant="outline" size="md" className="w-full">
          Cancel
        </Button>
        <Button variant="primary" size="md" className="w-full">
          Submit
        </Button>
      </div>
        </div>
      </Modal>

      {/* Table and Filters */}
      <div className="col-span-1 md:col-span-4 space-y-6 bg-white p-4 sm:p-6 dark:bg-[#0D0D0D] rounded-xl">
        <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <HeadingOne text="Feedback" />
            <Paragragh para="Real-time data on product and manage products." />
          </div>

          <div className="flex flex-col sm:flex-row max-sm:flex-col sm:items-center gap-3">
            <SearchInput />
            <div className="flex gap-2 justify-start sm:justify-end">
              <Export BtnName="Filter" icon={FiDownload} />
              <Export BtnName="Export" icon={FiFilter} />
            </div>
          </div>
        </div>

        <div>
          <FeedbackTable BtnText={"View Details"} />
        </div>
      </div>
    </>
  );
};

export default FeedbackTablePage;
