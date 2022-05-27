import React from "react";

const PurchaseBodyQty = ({ test }) => {
  const { purchaseInputs } = test;
  return (
    <>
      <div className="space-y-2">
        <h1>Qty.</h1>
        <div className="text-center space-y-4">
          {purchaseInputs.map((v, index) => {
            return (
              <div className="" key={index}>
                {" "}
                {v.quantities}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PurchaseBodyQty;
