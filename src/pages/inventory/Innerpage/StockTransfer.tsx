import SearchInput from "../../../components/form/SearchInput";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import { FiDownload, FiPlus } from "react-icons/fi";
import Export from "../../../components/ui/button/Export";
import Paragragh from "../../../components/ui/Paragrapg";
import TransferTable from "../../Tables/inventorytables/TransferTable";
import ColorFull from "../../../components/ui/button/ColorFull";
import { useState } from "react";
import { Modal } from "../../../components/ui/modal";
import Form from "../../../components/form/Form";
import Label from "../../../components/form/Label";
import Dropdown from "../../../components/form/input/Dropdown";
import InputField from "../../../components/form/input/InputField";
import TextArea from "../../../components/form/input/TextArea";
import Checkbox from "../../../components/form/input/Checkbox";
import Button from "../../../components/ui/button/Button";

const StockTransfer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    startDate: "",
    endDate: "",
    sourceWarehouse: "",
    destinationWarehouse: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.product) newErrors.product = "Product is required";
    if (!formData.quantity) newErrors.quantity = "Quantity is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    if (!formData.sourceWarehouse)
      newErrors.sourceWarehouse = "Source warehouse is required";
    if (!formData.destinationWarehouse)
      newErrors.destinationWarehouse = "Destination warehouse is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log("Submit successful", formData);
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
      <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <HeadingOne text="Stock Transfer" />
          <Paragragh para="AI generated suggestion to maintain stock levels and avoid shortages." />
        </div>
        <div className="flex items-center gap-2 max-sm:flex-col">
          <SearchInput />
          <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
            <div className="mr-2">
              <Export
                BtnName="Export"
                icon={FiDownload}
                onClick={() => console.log("Export triggered")}
              />
            </div>
            <ColorFull
              text="Transfer Request"
              icon={FiPlus}
              bgColor="bg-[#5D5FEF]"
              textColor="text-white"
              onClick={() => setIsModalOpen(true)}
            />

            {/* Form Modal */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              className="max-w-lg p-6"
              showCloseButton={true}
              isFullscreen={false}
            >
              <HeadingOne
                text="Initiate Transfer"
                colorClass="text-[#483415] dark:text-white"
                fontSize="text-[20px]"
              />
              <Form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <Label children="Product" />
                  <Dropdown
                    options={[
                      { value: "", label: "Select Product" },
                      { value: "product1", label: "Product 1" },
                      { value: "product2", label: "Product 2" },
                      { value: "product3", label: "Product 3" },
                    ]}
                    value={formData.product}
                    onChange={(e) => handleChange("product", e.target.value)}
                    id="product-select"
                  />
                  {errors.product && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.product}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Checkbox
                    label="Pallet"
                    checked={true}
                    onChange={() => {}}
                    disabled
                  />
                  <Checkbox
                    label="Cartons"
                    checked={false}
                    onChange={() => {}}
                    disabled
                  />
                </div>

                <div>
                  <InputField
                    type="text"
                    id="quantity"
                    placeholder="e.g., 200 cartons"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.quantity}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div>
                    <Label children="Select Transfer Date" />
                    <InputField
                      type="date"
                      id="start-date"
                      value={formData.startDate}
                      onChange={(e) =>
                        handleChange("startDate", e.target.value)
                      }
                    />
                    {errors.startDate && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.startDate}
                      </p>
                    )}
                  </div>
                  <div className="mt-5">
                    <span>to</span>
                  </div>
                  <div>
                    <Label children="Transfer time" />
                    <InputField
                      type="date"
                      id="end-date"
                      value={formData.endDate}
                      onChange={(e) => handleChange("endDate", e.target.value)}
                    />
                    {errors.endDate && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.endDate}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label children="Source Warehouse" />
                  <Dropdown
                    options={[
                      { value: "", label: "Select warehouse" },
                      { value: "wh1", label: "Warehouse 1" },
                      { value: "wh2", label: "Warehouse 2" },
                    ]}
                    value={formData.sourceWarehouse}
                    onChange={(e) =>
                      handleChange("sourceWarehouse", e.target.value)
                    }
                    id="source-warehouse-select"
                  />
                  {errors.sourceWarehouse && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.sourceWarehouse}
                    </p>
                  )}
                </div>

                <div>
                  <Label children="Destination Warehouse" />
                  <Dropdown
                    options={[
                      { value: "", label: "Select warehouse" },
                      { value: "wh1", label: "Warehouse 1" },
                      { value: "wh2", label: "Warehouse 2" },
                    ]}
                    value={formData.destinationWarehouse}
                    onChange={(e) =>
                      handleChange("destinationWarehouse", e.target.value)
                    }
                    id="destination-warehouse-select"
                  />
                  {errors.destinationWarehouse && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.destinationWarehouse}
                    </p>
                  )}
                </div>

                <div>
                  <Label children="Description" />
                  <TextArea
                    placeholder="Any special instructions (e.g., temperature-controlled items)"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e)}
                    error={!!errors.description}
                    hint={errors.description}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <Button
                    children="Cancel"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="border-[1px] max-sm:w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[120px] sm:min-w-[140px] transition-all"
                  />
                  <Button
                    type="submit"
                    children="Request Stock Transfer"
                    className="border-[1px] max-sm:w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF] hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[140px] transition-all"
                  />
                </div>
              </Form>
            </Modal>

            {/* Success Modal */}
            <Modal
              isOpen={isSuccessModalOpen}
              onClose={() => setIsSuccessModalOpen(false)}
              className="max-w-xl p-6 text-center"
              showCloseButton={true}
              isFullscreen={false}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <HeadingOne text="Transfer Request Created Successfully" />
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 113.75C45.7446 113.75 32.0731 108.087 21.993 98.0068C11.9129 87.9267 6.25 74.2552 6.25 59.9998C6.25 45.7444 11.9129 32.0729 21.993 21.9928C32.0731 11.9127 45.7446 6.2498 60 6.2498C68.3764 6.22207 76.6385 8.19332 84.1 11.9998C84.54 12.223 84.9316 12.5308 85.2526 12.9054C85.5736 13.28 85.8177 13.7141 85.9709 14.1831C86.1241 14.652 86.1835 15.1465 86.1456 15.6384C86.1077 16.1303 85.9733 16.6099 85.75 17.0498C85.5268 17.4897 85.2191 17.8814 84.8445 18.2024C84.4699 18.5234 84.0357 18.7675 83.5667 18.9207C83.0978 19.0739 82.6033 19.1333 82.1114 19.0954C81.6196 19.0575 81.14 18.923 80.7 18.6998C74.2994 15.401 67.2007 13.6863 60 13.6998C50.8548 13.6998 41.9148 16.4111 34.3101 21.4909C26.7054 26.5707 20.7774 33.791 17.2754 42.2392C13.7734 50.6873 12.8545 59.9841 14.6351 68.9544C16.4156 77.9246 20.8155 86.1656 27.2787 92.6358C33.7419 99.106 41.9781 103.515 50.9465 105.305C59.9148 107.095 69.2126 106.186 77.6645 102.694C86.1165 99.2007 93.3432 93.2805 98.4312 85.6813C103.519 78.0821 106.24 69.1451 106.25 59.9998C106.276 59.5835 106.276 59.1661 106.25 58.7498C106.157 57.7552 106.463 56.7645 107.101 55.9956C107.739 55.2267 108.655 54.7426 109.65 54.6498C110.645 54.557 111.635 54.863 112.404 55.5007C113.173 56.1383 113.657 57.0552 113.75 58.0498V59.9998C113.737 74.2511 108.07 87.915 97.9924 97.9922C87.9152 108.069 74.2514 113.737 60 113.75Z"
                  fill="#24D55F"
                />
                <path
                  d="M59.1006 77.0499C58.6146 77.0571 58.1324 76.9631 57.6848 76.7737C57.2371 76.5843 56.8338 76.3037 56.5006 75.9499L32.3506 52.2499C31.6484 51.5468 31.2539 50.5937 31.2539 49.5999C31.2539 48.6062 31.6484 47.653 32.3506 46.9499C33.0684 46.2564 34.0275 45.8688 35.0256 45.8688C36.0237 45.8688 36.9828 46.2564 37.7006 46.9499L59.1506 68.0999L107.401 20.6499C108.118 19.9565 109.078 19.5688 110.076 19.5688C111.074 19.5688 112.033 19.9565 112.751 20.6499C113.453 21.3531 113.847 22.3062 113.847 23.2999C113.847 24.2937 113.453 25.2468 112.751 25.9499L61.8506 75.9499C61.4927 76.3128 61.0637 76.5978 60.5905 76.7871C60.1173 76.9764 59.61 77.0658 59.1006 77.0499Z"
                  fill="#24D55F"
                />
              </svg>

              <Paragragh
                className="text-[20px] font-regular"
                para="Your request to transfer Product A from warehouse A to warehouse B has been created successfully, you can track it in stock transfer now!"
              />
              <div className="mt-6 flex flex-row gap-4">
                <Button
                  children="Create another request"
                    className="border-[1px] max-sm:w-full border-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[120px] sm:min-w-[140px] transition-all"
                  onClick={() => setIsSuccessModalOpen(false)}
                  variant="outline"
                />
                <Button
                variant="primary"
                  children="Done"
                    className="border-[1px] max-sm:w-full border-[#5D5FEF] bg-[#5D5FEF] text-white hover:bg-white hover:text-[#5D5FEF] hover:border-[#5D5FEF] flex h-9 items-center gap-2 rounded-md px-4 sm:h-10 min-w-[140px] transition-all"
                  onClick={() => setIsSuccessModalOpen(false)}
                />
              </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      {/* Table */}
      <div>
        <TransferTable />
      </div>
    </div>
  );
};

export default StockTransfer;
