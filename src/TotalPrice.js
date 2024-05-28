import React from 'react';

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="total-price">
      <h2>Total price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default TotalPrice;
