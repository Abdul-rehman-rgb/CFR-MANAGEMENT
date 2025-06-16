/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import imageTumb from "../../../../public/productThumb.svg";
import QuantityCounter from "../../common/QuantityCounter";

type ProductTable = {
  products?: number;
  onAddMore?: string;
  onRemove?: string;
  onQuantityChange?: string;
  onPalletChange?: string;
  image?: string;
};

const ProductTable = ({
  products,
  onAddMore,
  onRemove,
  onQuantityChange,
  onPalletChange,
  image,
} : ProductTable) => {
  return (
    <div className="pt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-gray-200 bg-[#F2F2FE]">
            <th className="text-left text-sm py-3 px-3 font-medium text-[#131330]">
              Product
            </th>
            <th className="text-left text-sm py-3 px-3 font-medium text-[#131330]">
              Quantity(Carton)
            </th>
            <th className="text-left text-sm py-3 px-3 font-medium text-[#131330]">
              Pallet
            </th>
            <th className="text-left text-sm py-3 px-3 font-medium text-[#131330]">
              Cators
            </th>
            <th className="text-left text-sm py-3 px-3 font-medium text-[#131330]">
              Availability
            </th>
            <th className="text-left text-sm py-3 px-3 font-medium text-[#131330]">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b-2 border-dashed  border-gray-200"
            >
              <td className="py-3 px-1">
                <img
                  src={imageTumb}
                  className="w-16 h-16 rounded object-cover mb-2"
                />

                <div className="text-xs text-[#131330] text-gray-800 font-medium">
                  {product.name} ({product.code})
                </div>
              </td>
              <td className="py-3 px-1 text-center ">
                <QuantityCounter />
              </td>
              <td className="py-3 px-1 text-center text-base font-semibold">
                {product.pallet}
              </td>
              <td className="py-3 px-1 text-center text-base font-semibold">
                {product.cators}
              </td>
              <td className="py-3 px-1 text-center">
                <span className="inline-flex items-center px-2 py-1 rounded-full font-medium text-[#0CB91D] text-base">
                  {product.availability}
                </span>
              </td>
              <td className="py-3 px-4 text-center">
                <button
                  onClick={() => onRemove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button
          // onClick={onAddMore}
          className="text-indigo-500 hover:text-white hover:bg-indigo-500 font-medium border-1 rounded-lg py-2 px-4 border-indigo-500 rounded-lg text-xs"
        >
          Add More Products
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 w-full px-6">
        <div>
          <label className="block text-sm font-normal text-gray-500 mb-1">
            Quantity
          </label>
          <label className="block text-sm font-normal text-gray-500 mb-1">
            Pallet
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-right text-gray-700 mb-1">
            2
          </label>
          <label className="block text-sm font-medium text-right text-gray-700 mb-1">
            50
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
