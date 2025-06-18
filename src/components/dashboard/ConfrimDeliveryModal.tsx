import ProductDetails from "./AddNewOrderModal/ConfirmDelivery";
// import imageTumb from "../../../../public/productThumb.svg";
import Logo from "../../../public/logo.png";
import HeadingTwo from "../ui/heading/HeadingTwo";

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
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
      
        <div className="pl-10 px-2">
          <HeadingTwo text="Review & Confirm Delivery Note" />
          <div className="flex justify-center">
        <img className="w-60 h-20" src={Logo} alt="" />
      </div>
      </div>
      <div>
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
    </div>
  );
};

export default ConfitmDelivery;