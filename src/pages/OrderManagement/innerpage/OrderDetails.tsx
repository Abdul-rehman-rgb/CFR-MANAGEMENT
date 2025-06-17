import React, { useState } from "react";
import Paragragh from "../../../components/ui/Paragrapg";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import TransitBtn from "../../Logistics/components/TransitBtn";
import ModalsFlow from "../Modals/ModalsFlow";
//import mobile from "../../../assets/images/mobile.png";

const OrderDetails = () => {
  return (
    <>
      {/* Top Header */}
      <div className="flex flex-row md:flex-row justify-between items-center mb-4">
        <div>
          <h2 className="text-[14px] font-medium text-[#5D5FEF]">
            Order Management : #9645761
          </h2>
        </div>
        {/* <div className="flex gap-2">
          <Export
            BtnName="Export"
            icon={FiDownload}
            onClick={() => console.log("Export triggered")}
          />
          <Export
            BtnName="In Transit"
            icon={FiArrowDown}
            onClick={() => console.log("Transit triggered")}
          />
          <ColorFull
            onClick={onCustomize}
            text="Generate Invoice"
            icon={FiPlus}
            bgColor="bg-[#5D5FEF]"
            textColor="text-white"
          />
          {isModalOpen && <ModalsFlow />}
        </div> */}
        <ModalsFlow />
      </div>
      <div className="mt-5 mb-5 bg-white p-5">
        <div className="gap-2 flex mb-5">
          <TransitBtn text="Transit" />
          <TransitBtn text="Paid" />
        </div>
        <div className="flex flex-row mb-5 justify-between rounded-md border border-[#5D5FEF] bg-[#5D5FEF]/8 px-6 py-6 sm:flex-row">
          <div>
            <h2 className="poppins-regular text-[20px] text-[#131330]">
              #9645sssss9761
            </h2>
            <Paragragh
              color={"text-[#475156]"}
              para={"1 Product  · Order Placed on 17 Jan, 2021 at 7:32 PM"}
            />
          </div>
          <div>
            <h2 className="poppins-regular text-[20px] text-[#131330]">Yes</h2>
            <Paragragh
              color={"text-[#475156]"}
              para={"Invoice sent to customer"}
            />
          </div>
          <div>
            <HeadingOne
              text={"$ 1,000.00"}
              fontSize=" text-[28px]"
              fontWeight="font-semibold"
              colorClass="text-[#0CB91D]"
            />
          </div>
        </div>

        <Paragragh para={"Order expected delivery: 23 Jan, 2021"} />
        <h1 className="mt-4 mb-2 text-lg font-semibold text-gray-800">
          Product
        </h1>

        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
            <thead className="poppins-medium bg-[#E4E7E9] text-[12px] text-[#475156] uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Article number
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Shelf life
                </th>
                <th scope="col" className="px-6 py-3">
                  Sub-Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 bg-white">
                <th
                  scope="row"
                  className="poppins-medium px-6 py-4 text-[14px] whitespace-nowrap text-[#475156]"
                >
                  <div className="flex items-center gap-4">
                    {/* <img
                                            src={mobile}
                                            alt="Google Pixel 6 Pro"
                                            className="h-12 w-12 object-contain"
                                        /> */}
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        SMARTPHONE
                      </h4>
                      <Paragragh
                        color={"text-[#475156]"}
                        para={"Google Pixel 6 Pro - 5G Android Phone"}
                      />
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 text-gray-700">SKU3434</td>
                <td className="px-6 py-4 text-gray-700">$899</td>
                <td className="px-6 py-4 text-gray-700">x1 carton</td>
                <td className="px-6 py-4 text-gray-700">2 Months</td>
                <td className="px-6 py-4 text-gray-700">$899</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] poppins-medium mt-20 mb-10 bg-white">
          <div className="border-r border-r-[#E4E7E9] border-r-2 pr-4">
            <h3 className="text-[18px] text-thirdColor">Billing Address</h3>
            <div className="flex flex-col space-y-5 space-x-3">
              <h4 className="text-thirdColor">Kevin Gilbert</h4>
              <Paragragh
                color="text-[#5F6C72]"
                para={
                  "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"
                }
              />
              <div>
                <strong className="text-thirdColor poppins-medium text-[14px]">
                  Phone Number:
                </strong>
                <span className="text-[#5F6C72] poppins-regular">
                  {" "}
                  +1-202-555-0118
                </span>
              </div>
              <div>
                <strong className="text-thirdColor poppins-medium text-[14px]">
                  Email:
                </strong>
                <span className="text-[#5F6C72] poppins-regular">
                  {" "}
                  kevin.gilbert@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="border-r border-r-[#E4E7E9] border-r-2 pr-4">
            <h3 className="text-[18px] text-thirdColor">Billing Address</h3>
            <div className="flex flex-col space-y-5 space-x-3">
              <h4 className="text-thirdColor">Kevin Gilbert</h4>
              <Paragragh
                color="text-[#5F6C72]"
                para={
                  "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"
                }
              />
              <div>
                <strong className="text-thirdColor poppins-medium text-[14px]">
                  Phone Number:
                </strong>
                <span className="text-[#5F6C72] poppins-regular">
                  {" "}
                  +1-202-555-0118
                </span>
              </div>
              <div>
                <strong className="text-thirdColor poppins-medium text-[14px]">
                  Email:
                </strong>
                <span className="text-[#5F6C72] poppins-regular">
                  {" "}
                  kevin.gilbert@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="border-r border-r-[#E4E7E9] border-r-2 pr-4">
            <h3 className="text-[18px] text-thirdColor">Billing Address</h3>
            <div className="flex flex-col space-y-5 space-x-3">
              <h4 className="text-thirdColor">Kevin Gilbert</h4>
              <Paragragh
                color="text-[#5F6C72]"
                para={
                  "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"
                }
              />
              <div>
                <strong className="text-thirdColor poppins-medium text-[14px]">
                  Phone Number:
                </strong>
                <span className="text-[#5F6C72] poppins-regular">
                  {" "}
                  +1-202-555-0118
                </span>
              </div>
              <div>
                <strong className="text-thirdColor poppins-medium text-[14px]">
                  Email:
                </strong>
                <span className="text-[#5F6C72] poppins-regular">
                  {" "}
                  kevin.gilbert@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
