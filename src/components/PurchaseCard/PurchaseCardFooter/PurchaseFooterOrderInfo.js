import React from "react";

const PurchaseFooterOrderInfo = ({ test }) => {
  const { orderNumber, paymentMethod } = test.purchaseInputs[3];
  return (
    <div className="flex flex-col justify-around">
      <div className="flex flex-col">
        <span>Order Number</span>
        <span>{orderNumber}</span>
      </div>
      <div className="flex flex-col">
        <span>Payment Method</span>
        <span>{paymentMethod}</span>
      </div>
    </div>
  );
};

export default PurchaseFooterOrderInfo;
