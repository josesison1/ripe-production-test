import React from "react";

const PurchaseBodyUnitPrice = ({ test }) => {
  const { purchaseInputs } = test;
  return (
    <div className="space-y-2">
      <h1>Unit Price</h1>
      <div className="text-center space-y-4">
        {purchaseInputs.map((v, index) => {
          return <div key={index}>${v.unitPrice}</div>
        })}
      </div>
    </div>
  );
};

export default PurchaseBodyUnitPrice;
