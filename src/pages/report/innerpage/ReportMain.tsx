import React, { useState } from "react";
import OrderManagementHeader from "../../../components/common/OrderManagementHeader";
import CustomerCard from "../components/ReportCard";
import { FiDollarSign, FiDownload, FiFilter } from "react-icons/fi";
import image from "../../../../public/images/icons/scale-icon.svg";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";
import SearchInput from "../../../components/form/SearchInput";
import Export from "../../../components/ui/button/Export";
import ReportTable from "../components/ReportTable";
import { useNavigate } from "react-router";
import { Modal } from "../../../components/ui/modal";
import { useModal } from "../../../hooks/useModal";
import GenerateReportModal from "../components/GenerateReportModal";

const ReportMain = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const { isOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate();
  const HandleMoveToPage = () => {
    navigate("report-detail");
  };

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");

  return (
    <>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <OrderManagementHeader
            headerTitle="Reporting"
            onExport={handleExport}
            onRefresh={handleRefresh}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onAddNewOrder={() => {
              openModal(true);
            }}
          />
        </div>

        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[725px] m-4"
        >
          <GenerateReportModal />
        </Modal>

        {/* Revenue Cards Grid */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <div className="grid grid-cols-1 max-sm:justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <CustomerCard
                  key={i}
                  title="Total Revenue"
                  amount="$1,245"
                  subtitle="2% more than last year"
                  icon={<FiDollarSign className="text-[#22C55E]" size={15} />}
                  iconBgColor="bg-[#22C55E]/5"
                  iconWrapperClassName="dark:bg-[#27DA68]/5"
                  chart={
                    <img
                      src={image}
                      alt="Revenue Chart"
                      className="mt-2 h-auto"
                    />
                  }
                />
              ))}
          </div>
        </div>
      </div>

      {/* Table & Filters Section */}
      <div className="col-span-1 md:col-span-4 space-y-6 bg-white p-4 sm:p-6 dark:bg-[#0D0D0D] rounded-xl">
        {/* Heading & Filters */}
        <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <HeadingOne text="Low Stock Products" />
            <Paragragh para="Real-time data on product and manage products." />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
            <SearchInput />
            <div className="flex gap-2">
              <Export BtnName="Filter" icon={FiFilter} />
              <Export BtnName="Export" icon={FiDownload} />
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <ReportTable
            MoveToPage={HandleMoveToPage}
            BtnText={"Download"}
            BtnTextTwo={"View Report"}
          />
        </div>
      </div>
    </>
  );
};

export default ReportMain;
