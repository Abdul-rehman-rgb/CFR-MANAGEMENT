import React, { useState } from "react";
import InventoryCard from "../../components/common/InventoryCard";
import { FiDollarSign } from "react-icons/fi";
import ChartImage from "../../../public/chart-green.svg";
import InventoryHeader from "../../components/common/InventoryHeader";
import { Modal } from "../../components/ui/modal";
import HeadingOne from "../../components/ui/heading/HeadinhOne";
import Label from "../../components/form/Label";
import Form from "../../components/form/Form";
import Dropdown from "../../components/form/input/Dropdown";
import Input from "../../components/form/input/InputField";
import Checkbox from "../../components/form/input/Checkbox";
import Button from "../../components/ui/button/Button";
import SearchBox from "../../components/form/input/SearchBox";
import FileInput from "../../components/form/input/FileInput";
import GenerateInvoice from "./components/modal/GenerateInvoice";

export default function Inventory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleExport = () => console.log("Exporting data...");
  const handleRefresh = () => console.log("Refreshing data...");
  const handleCustomize = () => {
    console.log("Customizing dashboard...");
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="space-y-6">
        <div className="grid grdid-cols-1 gap-6">
          <InventoryHeader
            dateRange={dateRange}
            setDateRange={setDateRange}
            onRefresh={handleRefresh}
            onCustomize={handleCustomize}
            onExport={handleExport}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            className="max-w-xl p-6"
            showCloseButton={false}
            isFullscreen={false}
          >
            <HeadingOne fontSize="text-[20px]" text="Update Inventory" />

            <GenerateInvoice />
          </Modal>
        </div>
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <InventoryCard
            title="Total Inventory Value"
            amount="$13,000"
            subtitle="50% than last Week"
            icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
            iconBgColor="bg-[#22C55E]/5"
            iconWrapperClassName="dark:bg-[#27DA68]/5"
            chart={
              <img
                src={ChartImage}
                alt="Revenue Chart"
                className="mt-2 h-auto w-[76px]"
              />
            }
          />
          <InventoryCard
            title="Number of Items"
            amount="50% out of 100%"
            subtitle="50% than last Week"
            icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
            iconBgColor="bg-[#27A1DA]/5"
            iconWrapperClassName="dark:bg-[#27A1DA]/5"
            chart={
              <img
                src={ChartImage}
                alt="Revenue Chart"
                className="mt-2 h-auto w-[76px]"
              />
            }
          />
          <InventoryCard
            title="Number of Items"
            amount="50% out of 100%"
            subtitle="50% than last Week"
            icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
            iconBgColor="bg-[#27A1DA]/5"
            iconWrapperClassName="dark:bg-[#27A1DA]/5"
            chart={
              <img
                src={ChartImage}
                alt="Revenue Chart"
                className="mt-2 h-auto w-[76px]"
              />
            }
          />
          <InventoryCard
            title="Number of Items"
            amount="50% out of 100%"
            subtitle="50% than last Week"
            icon={<FiDollarSign className="text-[#22C55E]" size={20} />}
            iconBgColor="bg-[#27A1DA]/5"
            iconWrapperClassName="dark:bg-[#27A1DA]/5"
            chart={
              <img
                src={ChartImage}
                alt="Revenue Chart"
                className="mt-2 h-auto w-[76px]"
              />
            }
          />
        </div>
      </div>
    </>
  );
}
