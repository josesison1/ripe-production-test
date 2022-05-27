import React from "react";

const PurchaseBodyQty = ({ test }) => {
  const { purchaseInputs } = test;
  return (
    <>
      <div className="">
        <h1>Qty.</h1>
        <div className="flex flex-col">
          {purchaseInputs.map((v, index) => {
            return (
              <div className="flex justify-around" key={index}>
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
