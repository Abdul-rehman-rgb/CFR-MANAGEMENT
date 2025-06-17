/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import ProductTable from "./AddNewOrderModal/ProductTable";

const ProductTableModal = () => {
  const [products, setProducts] = useState([
    {
      name: "Product A",
      code: "050108",
      quantity: 50,
      pallet: 1,
      cators: 50,
      availability: "In Stock",
    },
    {
      name: "Product A",
      code: "050108",
      quantity: 50,
      pallet: 1,
      cators: 50,
      availability: "In Stock",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    quantity: "",
    pallet: "",
  });

  const handleAddMore = () => {
    if (newProduct.quantity && newProduct.pallet) {
      setProducts([
        ...products,
        {
          name: "Product A",
          code: "050108",
          quantity: parseInt(newProduct.quantity),
          pallet: parseInt(newProduct.pallet),
          cators: parseInt(newProduct.quantity),
          availability: "In Stock",
        },
      ]);
      setNewProduct({ quantity: "", pallet: "" });
    }
  };

  const handleRemove = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
      <div className="no-scrollbar relative w-full max-w-[725px] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 py-6 px-4">
        <div className="pl-10 px-2 pr-14">
          <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90 font-bold">
            Product Display
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto pb-3">
            <div>
              <div>
                <ProductTable
                  products={products}
                  onAddMore={handleAddMore}
                  onRemove={handleRemove}
                  onQuantityChange={(value: any) =>
                    setNewProduct({ ...newProduct, quantity: value })
                  }
                  onPalletChange={(value: any) =>
                    setNewProduct({ ...newProduct, pallet: value })
                  }
                />
              </div>
            </div>
          </div>
        </form>
    </div>
  );
};

export default ProductTableModal;
