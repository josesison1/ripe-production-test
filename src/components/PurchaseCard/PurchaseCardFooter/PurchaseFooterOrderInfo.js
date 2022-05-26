import React from "react";

const PurchaseFooterOrderInfo = () => {
  const { orderNumber, paymentMethod } = this.props.test.purchaseInputs[0];
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
