import React from "react";



const ProductDetails = ({ 
  products,
  deliveryAddress,
  deliveryDate,
  orderNotes,
  shippingMethod,
  priority,
  companyInfo
}) => {
  return (
    <div className="max-w-4xl mx-auto  bg-white rounded-lg shadow-sm">
      {/* Product Details Section */}
      <section className="mb-0">
        {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Details</h1> */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Product Image</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Article Code</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Products Description</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Pallet</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Cators</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-800">{product.articleCode}</td>
                  <td className="py-3 px-4 text-gray-600">{product.description}</td>
                  <td className="py-3 px-4 text-gray-600">{product.pallet}</td>
                  <td className="py-3 px-4 text-gray-600">{product.cators}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-gray-200 my-1"></div>

      {/* Delivery Address Section */}
      <section className="mb-1">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Delivery Address</h2>
        <div className="bg-gray-50 p-0 rounded-md">
          <ul className="list-disc list-inside space-y-1">
            <li className="font-medium text-gray-700">Name</li>
            <li className="text-gray-600 ml-4">{deliveryAddress.name}</li>
            <li className="font-medium text-gray-700">Address</li>
            <li className="text-gray-600 ml-4 whitespace-pre-line">{deliveryAddress.address}</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Delivery Date</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Date:</p>
              <p className="font-medium">{deliveryDate.date}</p>
            </div>
            <div>
              <p className="text-gray-600">Time:</p>
              <p className="font-medium">{deliveryDate.time}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-600">Order Notes:</p>
          <p className="font-medium mt-1">{orderNotes}</p>
        </div>
      </section>

      <div className="border-t border-gray-200 my-1"></div>

      {/* Shipping Section */}
      <section className="mb-2">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Shipping by {shippingMethod}</h3>
        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
          {priority}
        </span>
      </section>

      <div className="border-t border-gray-200 my-1"></div>

      {/* Quantity Delivered Section */}
      <section className="mb-2">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quantity Delivered</h2>
        <ul className="list-disc list-inside space-y-1">
          <li className="font-medium text-gray-700">Date</li>
          <li className="font-medium text-gray-700">Receliver Name</li>
          <li className="font-medium text-gray-700">Receliver Signature</li>
        </ul>
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