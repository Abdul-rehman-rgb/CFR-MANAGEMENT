/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import imageTumb from "../../../../public/productThumb.svg";

const ProductDetails = ({
  products,
  deliveryAddress,
  deliveryDate,
  orderNotes,
  shippingMethod,
  priority,
  companyInfo,
}) => {
  return (
    <div className="max-w-4xl mx-auto  bg-white rounded-lg">
      {/* Product Details Section */}
      <section className="mb-0">
        <h1 className="text-md font-medium text-[#8E8E9C] mb-2">
          Product Details
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-gray-200 bg-[#F2F2FE] rounded-lg">
                <th className=" py-3 px-4 font-medium text-gray-600 text-sm rounded-l-lg text-center">
                  Product Image
                </th>
                <th className="py-3 px-4 font-medium text-gray-600 text-sm text-center">
                  Article Code
                </th>
                <th className="py-3 px-4 font-medium text-gray-600 text-sm text-center">
                  Products Description
                </th>
                <th className="py-3 px-4 font-medium text-gray-600 text-sm text-center">
                  Pallet
                </th>
                <th className="py-3 px-4 font-medium text-gray-600 text-sm rounded-r-lg text-center">
                  Cators
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map(
                (
                  product: {
                    articleCode:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    description:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    pallet:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    cators:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <tr
                    key={index}
                    className="border-b-2 border-dashed  border-gray-200"
                  >
                    <td className="py-3 px-4">
                      <div className="w-22 h-15 bg-gray-200 rounded-md">
                        <img className="w-22 h-16" src={imageTumb} alt="" />
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-800 text-center">
                      {product.articleCode}
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-center">
                      {product.description}
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-center">
                      {product.pallet}
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-center">
                      {product.cators}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex flex-col-2">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 w-full">
          <div className="col-span-2 lg:col-span-1 bg-gray-50 p-4 mt-3 mb-3">
            <h3 className="font-semibold text-[16px] leading-[20px] tracking-[0.01px] font-[Poppins] text-[#8E8E9C] mb-2">
              Delivery Address
            </h3>
            <div className=" p-0 rounded-md">
              <ul className="list-disc list-inside space-y-1">
                <label className="font-medium text-gray-700 text-xs">
                  Name
                </label>
                <div className="font-medium text-[14px] leading-[20px] tracking-[0.01px] font-[Poppins]">
                  {deliveryAddress.name}
                </div>
                <label className="font-medium text-gray-700 text-xs">
                  Address
                </label>
                <div className="font-medium text-[14px] leading-[20px] tracking-[0.01px] font-[Poppins]">
                  {deliveryAddress.address}
                </div>
              </ul>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 bg-gray-50 p-4 mt-3 mb-3">
            <h3 className="font-semibold text-[16px] leading-[20px] tracking-[0.01px] font-[Poppins] text-[#8E8E9C] mb-2">
              Delivery Date
            </h3>
            <div className=" p-0 rounded-md">
              <ul className="list-disc list-inside space-y-1">
                <div className="flex">
                  <div>
                    <label className="font-medium text-gray-700 text-xs">
                      Date
                    </label>
                    <div className="font-medium text-[14px] leading-[20px] tracking-[0.01px] font-[Poppins]">
                      {deliveryAddress.name}
                    </div>
                  </div>
                  <div className="ml-auto mr-10">
                    <label className="font-medium text-gray-700 text-xs">
                      Time
                    </label>
                    <div className="font-medium text-[14px] leading-[20px] tracking-[0.01px] font-[Poppins]">
                      {deliveryAddress.name}
                    </div>
                  </div>
                </div>

                <label className="font-medium text-gray-700 text-xs">
                  Order Notes:
                </label>
                <div className="font-medium text-[14px] leading-[20px] tracking-[0.01px] font-[Poppins]">
                  {orderNotes}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-2">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 w-full">
          <div className="col-span-2 lg:col-span-1 w-full bg-[#EFF0F7] py-3 px-6 rounded-lg">
            <span className="font-medium text-[14px] leading-[18.65px] tracking-[0px] text-left">
              Shipping by {shippingMethod}
            </span>
          </div>
          <div className="col-span-2 lg:col-span-1 w-full bg-[#EF44440D] py-3 px-4 rounded-lg">
            <span className="font-medium text-[14px] leading-[18.65px] tracking-[0px] text-left">
              {priority}
            </span>
          </div>
        </div>
      </div>

      {/* Quantity Delivered Section */}


      <div className="flex flex-col-2">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 w-full">
          <div className="col-span-2 lg:col-span-1 w-full pt-4 pb-2 px-6 rounded-lg">
             <div className="text-center py-5">
                            <hr className="h-0.5 w-[200px] bg-black border-0 mx-auto " />

             <span className="font-medium text-[10px] leading-[20px] tracking-[0.01px]">Quantity Delivered</span>
             </div>

              <div className="text-center py-4">
                           <hr className="h-0.5 w-[200px] bg-black border-0 mx-auto " />

             <span className="font-medium text-[10px] leading-[20px] tracking-[0.01px]">Date</span>
              </div>
          </div>
          <div className="col-span-2 lg:col-span-1 w-full pt-4 pb-2 px-4 rounded-lg">
            <div className="text-center py-5">
                            <hr className="h-0.5 w-[200px] bg-black border-0 mx-auto " />

             <span className="font-medium text-[10px] leading-[20px] tracking-[0.01px]">Receliver Name</span>

            </div>
            <div className="text-center py-4">
              <hr className="h-0.5 w-[200px] bg-black border-0 mx-auto " />
            <span className="font-medium text-[10px] leading-[20px] tracking-[0.01px]">Receliver Signature</span>
              

            </div>
          </div>
        </div>
      </div>


      {/* <section className="mb-2">
        <div className="flex flex-col-2">
          <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-2">
            <div className="col-span-2 lg:col-span-1">
              <li className="font-medium text-gray-700">Date</li>
              <li className="font-medium text-gray-700">Date</li>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <li className="font-medium text-gray-700">Receliver Name</li>
              <li className="font-medium text-gray-700">Receliver Signature</li>
            </div>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-1"></ul>
      </section> */}

      {/* Company Footer */}
      <footer className="text-sm text-gray-600 w-70">
        <p className="font-medium text-[14px] leading-[20px] tracking-[0.01px] text-black">
          {companyInfo.name}
        </p>
        <p className="whitespace-pre-line text-[12px]">{companyInfo.address}</p>
        <div className="flex flex-wrap gap-1 text-[12px]">
          <span>{companyInfo.email}</span>
          <span>{companyInfo.phone}</span>
          <span>{companyInfo.salesEmail}</span>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;
