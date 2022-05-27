import React from "react";

const PurchaseBodyItemTotal = ({ test }) => {
  const { purchaseInputs } = test;
  return (
    <div className="space-y-2">
      <h1>Total</h1>
      <div className="text-center space-y-4">
        {purchaseInputs.map((v, index) => {
          return <div key={index}>${v.totalItemPrice}</div>
        })}
      </div>
    </div>
  );
};

export default PurchaseBodyItemTotal;
