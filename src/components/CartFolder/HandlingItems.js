import React, { useState } from 'react';

export const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="border border-2px-solid flex items-center p-2 ">
      <button onClick={handleDecrement}className="mr-4">
        -
      </button>
      <span className="mr-4 mx-2">{quantity}</span>
      <button onClick={handleIncrement} >
        +
      </button>
    </div>
  );
};

