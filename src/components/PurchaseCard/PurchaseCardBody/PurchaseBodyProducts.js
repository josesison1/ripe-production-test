import React from "react";

const PurchaseBodyProducts = ({ test }) => {
  const { purchaseInputs } = test;
  return (
    <div className="space-y-2">
      <h1>Products</h1>
      <div className="text-center space-y-4">
        {purchaseInputs.map((v, index) => {
          return <div key={index}>{v.productType}</div>
        })}
      </div>
    </div>
  );
};

export default PurchaseBodyProducts;
