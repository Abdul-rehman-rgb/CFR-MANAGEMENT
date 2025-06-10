import React from "react";
import ProductDetails from "./../dashboard/MultiProductSelection/ConfirmDelivery";
// import ProductTable from "./../dashboard/MultiProductSelection/ProductTable";

const ConfitmDelivery = () => {
  const products = [
    {
      articleCode: "SKU050108",
      description: "Milk 5 Ch 6x20",
      pallet: "1",
      cators: "50"
    },
    {
      articleCode: "SKU050108",
      description: "Milk 5 Ch 6x20",
      pallet: "1",
      cators: "50"
    }
  ];

  const deliveryAddress = {
    name: "John",
    address: "123 Main Street\nNew York, NY 10001\nUnited States"
  };

  const deliveryDate = {
    date: "12/01/2025",
    time: "10 Pm"
  };

  const orderNotes = "Be careful while loading and offloading the product.";

  const companyInfo = {
    name: "CFR Management Services Limited",
    address: "for Regents Positive, 4. Summarizeward Road Northampton, Northampton after March 18th.",
    email: "service.support@",
    phone: "07968-28802",
    salesEmail: "sales@cfrstate.co.uk"
  };

  return (
    <div className="p-6">
      <ProductDetails
        products={products}
        deliveryAddress={deliveryAddress}
        deliveryDate={deliveryDate}
        orderNotes={orderNotes}
        shippingMethod="WalkerPack"
        priority="High Priority"
        companyInfo={companyInfo}
      />
    </div>
  );
};

export default ConfitmDelivery;