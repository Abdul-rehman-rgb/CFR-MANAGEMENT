import React, { useState } from 'react';

type ProductCardProps = {
  image: string;
  name: string;
  sku: string;
  description: string;
  stock: number;
  unitType: 'cartons' | 'pallets';
  isSelected?: boolean;
  onAdd: () => void;
  onRemove: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  sku,
  description,
  stock,
  unitType,
  isSelected = false,
  onAdd,
  onRemove,
}) => {
  const [unit, setUnit] = useState<'pallet' | 'cartons'>(unitType === 'pallets' ? 'pallet' : 'cartons');
  const [quantity, setQuantity] = useState(unit === 'pallet' ? 1 : 50);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const isOutOfStock = stock === 0;

  return (
    <div className="bg-[white] border rounded-xl shadow-sm p-4 w-full">
      <div className="flex items-start gap-4">
        <img src={image} alt={name} className="w-16 h-16 rounded object-cover" />
        <div className="flex-1">
          <p className={`text-sm font-medium ${isOutOfStock ? 'text-red-500' : 'text-green-600'}`}>
            {isOutOfStock
              ? `0 ${unit === 'pallet' ? 'Pallet' : 'Cartons'} (Out of Stock)`
              : `${stock} cartons (In Stock)`}
          </p>
          <p className="font-semibold mt-1">{name} ({sku})</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-4 text-sm mb-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={unit === 'pallet'}
              onChange={() => {
                setUnit('pallet');
                setQuantity(1);
              }}
            />
            Pallet
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={unit === 'cartons'}
              onChange={() => {
                setUnit('cartons');
                setQuantity(50);
              }}
            />
            Cartons
          </label>
        </div>

        <div className="flex items-center gap-2 w-fit">
          <button
            className="bg-gray-200 px-2 rounded text-lg"
            onClick={() => handleQuantityChange(-1)}
          >
            −
          </button>
          <span className="min-w-[2rem] text-center font-semibold">{quantity}</span>
          <button
            className="bg-gray-200 px-2 rounded text-lg"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-1">
          {unit === 'cartons' ? `${quantity} Cartons` : `${quantity} Pallet`}: {unit === 'pallet' ? quantity * 50 : Math.floor(quantity / 50)} Pallet
        </p>

        <button
          disabled={isOutOfStock}
          onClick={isSelected ? onRemove : onAdd}
          className={`mt-4 w-full py-2 rounded-xl font-semibold transition ${
            isOutOfStock
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : isSelected
              ? 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSelected ? 'Remove from Order' : 'Add to Order'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
