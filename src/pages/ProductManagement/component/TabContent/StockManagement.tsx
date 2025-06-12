import SearchInput from "../../../../components/form/SearchInput";
import HeadingOne from "../../../../components/ui/heading/HeadinhOne";
import { FiDownload, FiFilter, FiPlus } from "react-icons/fi";
import Export from "../../../../components/ui/button/Export";
import Paragragh from "../../../../components/ui/Paragrapg";
import ColorFull from "../../../../components/ui/button/ColorFull";
import StockTable from "../../../Tables/ProductManagement/StockTable";
import { useState } from "react";
import { Modal } from "../../../../components/ui/modal";
import Button from "../../../../components/ui/button/Button";
import FileInput from "../../../../components/form/input/FileInput";
import Label from "../../../../components/form/Label";
import Form from "../../../../components/form/Form";
import OutlineBtn from "../../../../components/ui/button/OutLine";
import DimensionModal from "../modals/DimensionModal";
import BarcodeModal from "../modals/BarcodeModal";
import LogisticModal from "../modals/LogisticModal";
import PricingModal from "../modals/PricingModal";
import ProductDetailModal from "../modals/ProductDetailModal";

const StockManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showLogisticModal, setShowLogisticModal] = useState(false);
  const [ShowDimensionModal, SetShowDimensionModal] = useState(false);
  const [ShowBarcodeModal, SetShowBarcodeModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name?.value;
    const brand = e.target["brand-select"]?.value;

    if (name && brand) {
      setIsModalOpen(false); // ✅ Close first modal
      setShowConfirmationModal(true); // ✅ Open second modal
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <>
      {/* Main UI */}
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <HeadingOne text="Stock Management" />
            <Paragragh para="Real-time data on product and manage products." />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
              <div className="mr-2">
                <Export BtnName="Filter" icon={FiDownload} />
              </div>

              <div className="mr-2">
                <Export BtnName="Export" icon={FiFilter} />
              </div>
              <ColorFull
                text="Add Product"
                icon={FiPlus}
                bgColor="bg-[#5D5FEF]"
                textColor="text-white"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div>
          <StockTable BtnTextTwo={"Delete"} />
        </div>
      </div>

      {/* First Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-w-[724px] p-6"
        showCloseButton={false}
      >
        <div className="pt-4">
          {/* Tabs */}
          <div className="flex justify-between gap-10 mb-4 border-b border-gray-200 font-medium">
            <button
              onClick={() => setActiveTab("Tab1")}
              className={`px-4 py-2 ${
                activeTab === "Tab1"
                  ? "text-[#151D48]/80 border-b-2 border-[#5D5FEF]"
                  : "text-[#151D48]/60"
              }`}
            >
              Update Manually
            </button>
            <button
              onClick={() => setActiveTab("Tab2")}
              className={`px-4 py-2 ${
                activeTab === "Tab2"
                  ? "text-[#151D48]/80 border-b-2 border-[#5D5FEF]"
                  : "text-[#151D48]/60"
              }`}
            >
              Upload File
            </button>
          </div>

          {/* Tab 1 - Manual */}
          {activeTab === "Tab1" && (
            <Form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex justify-between items-start">
                <HeadingOne fontSize="text-[20px]" text="Update Inventory" />
                <div className="flex flex-col gap-2 sm:flex-row">
                  <OutlineBtn
                    className="border-[1px] border-[#555555] text-[#555555] hover:bg-[#5D5FEF] hover:text-black"
                    BtnName="Add new Brand"
                  />
                  <OutlineBtn
                    className="bg-red-500 border border-[#22C55E] text-white hover:bg-[#22C55E] hover:text-white transition"
                    BtnName="Add new type"
                  />
                </div>
              </div>

              <ProductDetailModal />

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <Button
                  children="Cancel"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
                />
                <Button
                  variant="primary"
                  children="Save"
                  className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
                />
              </div>
            </Form>
          )}

          {/* Tab 2 - Upload */}
          {activeTab === "Tab2" && (
            <div className="space-y-4">
              <Label htmlFor="upload-file" children="Upload Stock" />
              <FileInput id="upload-file" accept=".csv, .xlsx" />
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <Button
                  children="Cancel"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
                />
                <Button
                  variant="primary"
                  children="Save"
                  onClick={() => {
                    setIsModalOpen(false);
                    setShowConfirmationModal(true);
                  }}
                  className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
                />
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* Second Modal (Confirmation) */}
      <Modal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        className="max-w-xl p-6"
        showCloseButton={false}
      >
        <HeadingOne text="Assign Customer & Pricing" />
        <PricingModal />

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <Button
            children="Cancel"
            variant="outline"
            onClick={() => setShowConfirmationModal(false)}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
          />
          <Button
            variant="primary"
            children="Save"
            onClick={() => {
              setShowConfirmationModal(false);
              setShowLogisticModal(true);
            }}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
          />
        </div>
      </Modal>

      {/* Logistic Detail Modal */}
      <Modal
        isOpen={showLogisticModal}
        onClose={() => setShowLogisticModal(false)}
        className="p-6"
      >
        <HeadingOne text="Logistic Detail" />

        <LogisticModal />
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <Button
            children="Cancel"
            variant="outline"
            onClick={() => setShowConfirmationModal(false)}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
          />
          <Button
            variant="primary"
            children="Save"
            onClick={() => {
              setShowLogisticModal(false);
              SetShowBarcodeModal(true);
            }}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
          />
        </div>
      </Modal>

      {/* Barcode Modal */}
      <Modal
        isOpen={ShowBarcodeModal}
        onClose={() => SetShowBarcodeModal(false)}
        className="max-w-xl p-6"
        showCloseButton={false}
      >
        <HeadingOne text="Barcodes" />

        <BarcodeModal />
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <Button
            children="Cancel"
            variant="outline"
            onClick={() => setShowConfirmationModal(false)}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
          />
          <Button
            variant="primary"
            children="Save"
            onClick={() => {
              SetShowBarcodeModal(false);
              SetShowDimensionModal(true);
            }}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
          />
        </div>
      </Modal>

      <Modal
        isOpen={ShowDimensionModal}
        onClose={() => SetShowDimensionModal(false)}
        className="max-w-xl p-6"
        showCloseButton={false}
      >
        <HeadingOne text={"Dimensions & Weight"} />

        <DimensionModal />
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <Button
            children="Cancel"
            variant="outline"
            onClick={() => setShowConfirmationModal(false)}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white"
          />
          <Button
            variant="primary"
            children="Save"
            onClick={() => {
              SetShowBarcodeModal(false);
              SetShowDimensionModal(false);
            }}
            className="border-[1px] max-sm:w-full w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF]"
          />
        </div>
      </Modal>
    </>
  );
};

export default StockManagement;
