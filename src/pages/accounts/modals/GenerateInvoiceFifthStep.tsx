import Logo from "../../../../public/logo.png";
import Label from "../../../components/form/Label";
import HeadingTwo from "../../../components/ui/heading/HeadingTwo";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import Paragragh from "../../../components/ui/Paragrapg";

const GenerateInvoiceFifthStep = () => {
  const products = [
    {
      articleCode: "SKU050108",
      description: "Milk 5 Ch 6x20",
      pallet: "1",
      cartons: "50"
    },
    {
      articleCode: "SKU050109",
      description: "Juice Box 12x1L",
      pallet: "2",
      cartons: "100"
    }
  ];

  const deliveryAddress = {
    name: "John",
    address: "123 Main Street\nNew York, NY 10001\nUnited States"
  };

  const deliveryDate = {
    date: "12/01/2025",
    time: "10 PM"
  };

  const orderNotes = "Be careful while loading and offloading the product.";

  const companyInfo = {
    name: "CFR Management Services Limited",
    address: "4 Summerward Road, Northampton, UK",
    email: "service.support@cfrstate.co.uk",
    phone: "07968-28802",
    salesEmail: "sales@cfrstate.co.uk"
  };

  return (
    <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
      {/* Company Logo */}
      <HeadingTwo text="Sales Invoice" />
      <div className="flex justify-center mb-4">
        <img className="w-60 h-20" src={Logo} alt="Company Logo" />
      </div>

      {/* Invoice Header */}
      <div className="flex flex-row justify-between items-center mb-4">
        <HeadingOne text="Sales Invoice: $1,555" />
        <span>
          To: <span className="text-blue-400">Health Co Pvt Ltd</span>
        </span>
      </div>

      {/* Company and Invoice Details */}
      <div className="flex flex-row justify-between mb-6">
        <div>
          <Paragragh para={companyInfo.name} />
          <Paragragh para={companyInfo.address} />
          <Paragragh para={companyInfo.phone} />
          <Paragragh para={companyInfo.email} />
        </div>

        <div className="flex flex-row gap-4">
          <div>
            <Paragragh para="Invoice Number" />
            <Paragragh para="Invoice Date" />
            <Paragragh para="Due" />
            <Paragragh para="Reference" />
          </div>
          <div>
            <Paragragh color="text-black" para="#INV-000123" />
            <Paragragh color="text-black" para="June 23, 2025" />
            <Paragragh color="text-black" para="June 30, 2025" />
            <Paragragh color="text-black" para="REF-5555" />
          </div>
        </div>
      </div>

      {/* Invoice Table Header */}
      <table className="w-full table-auto border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border p-3 text-left">Description</th>
            <th className="border p-3">Qty</th>
            <th className="border p-3">Discount</th>
            <th className="border p-3">Price</th>
            <th className="border p-3">VAT</th>
            <th className="border p-3">Net</th>
          </tr>
        </thead>
        {/* Optional: Static Example Rows */}
        <tbody>
          <tr>
            <td className="border p-3">Milk 5 Ch 6x20</td>
            <td className="border p-3 text-center">50</td>
            <td className="border p-3 text-center">5%</td>
            <td className="border p-3 text-center">$200</td>
            <td className="border p-3 text-center">$10</td>
            <td className="border p-3 text-center">$190</td>
          </tr>
          <tr>
            <td className="border p-3">Juice Box 12x1L</td>
            <td className="border p-3 text-center">100</td>
            <td className="border p-3 text-center">10%</td>
            <td className="border p-3 text-center">$400</td>
            <td className="border p-3 text-center">$20</td>
            <td className="border p-3 text-center">$360</td>
          </tr>
        </tbody>
      </table>

      <div className="grid grid-cols-2 gap-4 bg-[#F2F2FE]/60 p-4">
            <div className="space-y-3">
              <Label children="Discount" />
              <Label children="Net" />
              <Label children="VAT" />
              <Label children="Total" />
            </div>
            <div className="space-y-3 text-right text-sm text-gray-600">
              <Label children="0.00" />
              <Label children="0.00" />
              <Label children="0.00" />
              <Label children="0.00" />
            </div>
          </div>

      {/* Product Details Component */}
      {/* <div className="px-2">
        <ProductDetails
          products={products}
          deliveryAddress={deliveryAddress}
          deliveryDate={deliveryDate}
          orderNotes={orderNotes}
          shippingMethod="WalkerPack"
          priority="High Priority"
          companyInfo={companyInfo}
        />
      </div> */}
    </div>
  );
};

export default GenerateInvoiceFifthStep;
