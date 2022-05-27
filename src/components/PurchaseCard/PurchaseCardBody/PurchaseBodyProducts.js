import React from "react";

const PurchaseBodyProducts = ({ test }) => {
  const { purchaseInputs } = test;
  return (
    <div className="flex flex-col">
      <h1>Products</h1>
      <div className="flex flex-col border-2 border-red-300">
        {purchaseInputs.map((v, index) => {
          return <div key={index}>{v.productType}</div>;
        })}
      </div>
    </div>
  );
};

export default PurchaseBodyProducts;
