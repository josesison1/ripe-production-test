import React from "react";

const PurchaseBodyQty = () => {
  const { purchaseInputs } = this.props.test;
  return (
    <>
      <div className="">
        <h1>Qty.</h1>
        <div className="flex flex-col border-2 border-red-300">
          {purchaseInputs.map((v, index) => {
            return (
              <div className="justify-between" key={index}>
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
