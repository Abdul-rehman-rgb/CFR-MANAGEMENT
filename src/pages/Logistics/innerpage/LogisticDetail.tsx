import React from "react";
import { FiDownload, FiDroplet } from "react-icons/fi";
import Export from "../../../components/ui/button/Export";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import Truck from "../../../../src/icons/truck.svg";
import CarrierImage from "../../../../src/icons/carrier.svg";
import Paragragh from "../../../components/ui/Paragrapg";
import HeadingThree from "../../../components/ui/heading/HeadingThree";
import TransitBtn from "../components/TransitBtn";
import Suggestion from "../components/Suggestion";

const LogisticDetail = () => {
  return (
    <div className="px-4 md:px-6 lg:px-10 py-4 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-[14px] font-medium text-[#5D5FEF]">
          Logistic : UA7345
        </h2>
        <Export
          BtnName="Export"
          icon={FiDownload}
          onClick={() => console.log("Export triggered")}
        />
        <TransitBtn text="Transit" />
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Order Detail Panel */}
        <div className="bg-white dark:bg-[#0D0D0D] border-2 border-[#5251FA] p-4 rounded-[12px] space-y-4">
          <span className="text-[14px] font-semibold text-black/70">
            Order Detail
          </span>
          <div className="flex justify-between items-center border-b border-[#ECECEC] pb-2">
            <div>
              <Paragragh para="Order ID" color="text-black/40" />
              <HeadingTwo
                text="EV-2017002346"
                className="text-[20px] text-black"
              />
            </div>
            <img
              src={Truck}
              alt="truck"
              className="w-[120px] md:w-[155px] h-auto"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-[#22C55E] p-2 rounded-full mr-3">
                  <FiDroplet className="text-white" />
                </div>
                <div>
                  <Paragragh
                    para="Delivery Date"
                    className="text-[12px]"
                    color="text-black/40"
                  />
                  <HeadingThree
                    text="12/01/2025"
                    className="font-semibold text-black"
                    size="text-[16px]"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#E5E5FE] p-2 rounded-full mr-3">
                  <FiDroplet className="text-white" />
                </div>
                <div>
                  <Paragragh
                    para="Delivery Date"
                    className="text-[12px]"
                    color="text-black/40"
                  />
                  <HeadingThree
                    text="12/01/2025"
                    className="font-semibold text-black"
                    size="text-[16px]"
                  />
                </div>
              </div>
            </div>
            <TransitBtn text="Transit" />
          </div>
        </div>

        {/* Product Info Panel */}
        <div className="bg-white dark:bg-[#0D0D0D] p-4 space-y-4 rounded-[12px]">
          <HeadingThree
            text="Product Info"
            className="font-semibold text-black"
            size="text-[16px]"
          />
          <div className="grid grid-cols-2 gap-4">
            <InfoBlock label="Name" value="Product A" />
            <InfoBlock label="Article Number" value="SKU 23434" />
            <InfoBlock label="Category" value="Electronic" />
            <InfoBlock label="Shelf Life(Month)" value="12" />
          </div>
        </div>

        {/* Customer Info Panel */}
        <div className="bg-white dark:bg-[#0D0D0D] p-4 space-y-4 rounded-[12px]">
          <HeadingThree
            text="Customer Info"
            className="font-semibold text-black"
            size="text-[16px]"
          />
          <div className="grid grid-cols-2 gap-4">
            <InfoBlock label="Name" value="John Doe" />
            <InfoBlock label="Contact" value="+1 234 567 890" />
          </div>
          <InfoBlock
            label="Address"
            value="123, Main Street, NY, Noida, India"
          />
        </div>

        {/* Carrier Info Panel */}
        <div className="bg-white dark:bg-[#0D0D0D] p-4 space-y-4 rounded-[12px]">
          <HeadingThree
            text="Carrier Details"
            className="font-semibold text-black"
            size="text-[16px]"
          />
          <div className="bg-[#EFF0F7] p-3 rounded-md flex items-center gap-4">
            <img
              src={CarrierImage}
              alt="carrier"
              className="w-[32px] h-[32px] object-contain"
            />
            <HeadingThree
              text="Shipping Walkerpack (Northampton)"
              weight="font-medium"
              color="text-[#2B2B2B]/80"
              size="text-[14px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InfoBlock label="Email" value="example@mail.com" />
            <InfoBlock label="Contact" value="+1 234 567 890" />
          </div>
          <InfoBlock
            label="Website"
            value="www.shippingwalkerpack.com"
            color="text-[#007AFF]"
          />
        </div>

        {/* Suggestion Panel */}
        <div className="md:col-span-2 lg:col-span-2">
          <Suggestion />
        </div>

        {/* Codes Panel */}
        <div className="bg-white dark:bg-[#0D0D0D] p-4 space-y-4 rounded-[12px]">
          <HeadingThree
            text="Codes"
            className="font-semibold text-black"
            size="text-[16px]"
          />
          <div className="grid grid-cols-2 gap-4">
            <InfoBlock label="HS Code" value="5996071650983" />
            <InfoBlock label="Unit Bar Code" value="5996071650983" />
            <InfoBlock label="Display Bar Code" value="5996071650983" />
            <InfoBlock label="Carton Bar Code" value="5996071650983" />
          </div>
        </div>

        {/* Display Units Panel */}
        <div className="md:col-span-2 bg-white dark:bg-[#0D0D0D] p-4 space-y-4 rounded-[12px]">
          <HeadingThree
            text="Display Units"
            className="font-semibold text-black"
            size="text-[16px]"
          />
          <div className="grid grid-cols-3 gap-4">
            <InfoBlock label="Unit Display" value="12" />
            <InfoBlock label="Inner Display" value="6" />
            <InfoBlock label="Carton Display" value="24" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({ label, value, color = "text-[#2B2B2B]/80" }) => (
  <div className="flex flex-col">
    <Paragragh
      para={label}
      color="text-black/40"
      className="text-[10px] font-medium"
    />
    <HeadingThree
      text={value}
      weight="font-medium"
      color={color}
      size="text-[14px]"
    />
  </div>
);

export default LogisticDetail;
