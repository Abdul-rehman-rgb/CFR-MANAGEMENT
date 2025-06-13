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
    <div className="bg-[#F2F2FE99] border rounded-xl shadow-sm p-4 w-full">



      <div className="flex items-start gap-4">

        <div className='grid'>
        <img src={image} alt={name} className="w-16 h-16 rounded object-cover" />
         <p className="text-xs font-medium mt-2 mb-3">{name} ({sku})</p>
          <p className="text-xs text-gray-500">{description}</p>

        </div>
        
        <div className='grid text-right'>
          <p className={`text-xs font-medium float-right ${isOutOfStock ? 'text-red-500' : 'text-green-600'}`}>
            {isOutOfStock
              ? `0 ${unit === 'pallet' ? 'Pallet' : 'Cartons'} (Out of Stock)`
              : `${stock} cartons (In Stock)`}
          </p>

          <div className="mt-4">
        <div className="flex items-center gap-4 text-sm mb-4">
          <label className="flex items-center gap-2 text-xs text-[#2B2B2B]">
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
          <label className="flex items-center gap-2 text-xs text-[#2B2B2B]">
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

        <div className="flex items-center gap-2 w-fit float-right mb-3">
          <button
            className="bg-gray-200 px-2 text-sm rounded text-lg"
            onClick={() => handleQuantityChange(-1)}
          >
            −
          </button>
          <span className="min-w-[2rem] text-sm text-center font-semibold">{quantity}</span>
          <button
            className="bg-gray-200 px-2 rounded text-sm"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>

       

        
      </div>

       <p className="text-xs text-gray-500 mt-1">
          {unit === 'cartons' ? `${quantity} Cartons` : `${quantity} Pallet`}: {unit === 'pallet' ? quantity * 50 : Math.floor(quantity / 50)} Pallet
        </p>
         
        </div>

        
      </div>

      <button
          disabled={isOutOfStock}
          onClick={isSelected ? onRemove : onAdd}
          className={`mt-4 w-full text-xs py-3 rounded-xl  transition ${
            isOutOfStock
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : isSelected
              ? 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
              : 'bg-[#5D5FEF] text-white hover:bg-blue-600'
          }`}
        >
          {isSelected ? 'Remove from Order' : 'Add to Order'}
        </button>
    </div>
  );
};

export default ProductCard;
