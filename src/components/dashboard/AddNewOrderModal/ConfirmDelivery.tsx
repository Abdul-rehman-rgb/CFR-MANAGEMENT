/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

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
    <div className="max-w-4xl mx-auto  bg-white rounded-lg shadow-sm">
      {/* Product Details Section */}
      <section className="mb-0">
        <h1 className="text-md font-bold text-[#8E8E9C] mb-4">
          Product Details
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-1 px-4 font-medium text-gray-600 text-sm">
                  Product Image
                </th>
                <th className="text-left py-1 px-4 font-medium text-gray-600 text-sm">
                  Article Code
                </th>
                <th className="text-left py-1 px-4 font-medium text-gray-600 text-sm">
                  Products Description
                </th>
                <th className="text-left py-1 px-4 font-medium text-gray-600 text-sm">
                  Pallet
                </th>
                <th className="text-left py-1 px-4 font-medium text-gray-600 text-sm">
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
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {product.articleCode}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.description}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.pallet}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.cators}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-gray-200 my-1"></div>

      <div className="flex flex-col-2">
        <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-2">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Delivery Address
            </h3>
            <div className="bg-gray-50 p-0 rounded-md">
              <ul className="list-disc list-inside space-y-1">
                <label className="font-medium text-gray-700 text-xs">
                  Name
                </label>
                <div className="text-gray-600 text-sm">
                  {deliveryAddress.name}
                </div>
                <label className="font-medium text-gray-700 text-xs">
                  Address
                </label>
                <div className="text-gray-600  text-sm">
                  {deliveryAddress.address}
                </div>
              </ul>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Delivery Date
            </h3>
            <div className="bg-gray-50 p-0 rounded-md">
              <ul className="list-disc list-inside space-y-1">
                <label className="font-medium text-gray-700 text-xs">
                  Name
                </label>
                <div className="text-gray-600 text-sm">
                  {deliveryAddress.name}
                </div>
                <label className="font-medium text-gray-700 text-xs">
                  Order Notes:
                </label>
                <div className="text-gray-600  text-sm">{orderNotes}</div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-1"></div>

      {/* Shipping Section */}
      <section className="mb-2 flex">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Shipping by {shippingMethod}
        </h3>
        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
          {priority}
        </span>
      </section>

      <div className="border-t border-gray-200 my-1"></div>

      {/* Quantity Delivered Section */}

      <section className="mb-2">
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
      </section>

      {/* Company Footer */}
      <footer className="text-sm text-gray-600 mt-1">
        <p>{companyInfo.name}</p>
        <p className="whitespace-pre-line">{companyInfo.address}</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <span>{companyInfo.email}</span>
          <span>{companyInfo.phone}</span>
          <span>{companyInfo.salesEmail}</span>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;
