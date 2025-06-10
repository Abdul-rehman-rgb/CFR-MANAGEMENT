import React, { useState } from "react";
import ProductCard from "../dashboard/MultiProductSelection/MultiProductCard";

const ProductList = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      image: "./productThumb.svg",
      name: "Product A",
      sku: "050108",
      description: "Milk 5 Ch 6x20",
      stock: 40,
      unitType: "cartons" as const,
    },
    {
      id: 2,
      image: "./productThumb.svg",

      name: "Product B",
      sku: "050108",
      description: "Milk 5 Ch 6x20",
      stock: 0,
      unitType: "pallets" as const,
    },
    {
      id: 3,
      image: "./productThumb.svg",

      name: "Product C",
      sku: "050108 C",
      description: "Milk 5 Ch 6x20",
      stock: 20,
      unitType: "cartons" as const,
    },
    {
      id: 2,
      image: "./productThumb.svg",
      name: "Product D",
      sku: "050108",
      description: "Milk 5 Ch 6x20",
      stock: 0,
      unitType: "pallets" as const,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          isSelected={selected.includes(product.id)}
          onAdd={() => setSelected([...selected, product.id])}
          onRemove={() =>
            setSelected(selected.filter((id) => id !== product.id))
          }
        />
      ))}
    </div>
  );
};

export default ProductList;
