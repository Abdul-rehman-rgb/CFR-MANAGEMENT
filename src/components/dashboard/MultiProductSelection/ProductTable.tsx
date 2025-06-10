import React from "react";

type ProductTable = {
  products?: number;
  onAddMore?: string;
  onRemove?: string;
  onQuantityChange?: string;
  onPalletChange?: string;
 
};

const ProductTable = ({ products, onAddMore, onRemove, onQuantityChange, onPalletChange }) => {
  return (
    <div className="max-w-4xl mx-auto p-1 bg-white rounded-lg shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-1 font-medium text-gray-600">Product</th>
            <th className="text-left py-3 px-1 font-medium text-gray-600">Quantity(Carton)</th>
            <th className="text-left py-3 px-1 font-medium text-gray-600">Pallet</th>
            <th className="text-left py-3 px-1 font-medium text-gray-600">Cators</th>
            <th className="text-left py-3 px-1 font-medium text-gray-600">Availability</th>
            <th className="text-left py-3 px-1 font-medium text-gray-600">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3 px-1">
                <div className="font-medium text-gray-800">{product.name}</div>
                <div className="text-sm text-gray-500">{product.code}</div>
              </td>
              <td className="py-3 px-1">{product.quantity}</td>
              <td className="py-3 px-1">{product.pallet}</td>
              <td className="py-3 px-1">{product.cators}</td>
              <td className="py-3 px-1">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {product.availability}
                </span>
              </td>
              <td className="py-3 px-4">
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
          onClick={onAddMore}
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Add More Products
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="50 Carots"
            onChange={(e) => onQuantityChange(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pallet</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="2"
            onChange={(e) => onPalletChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;