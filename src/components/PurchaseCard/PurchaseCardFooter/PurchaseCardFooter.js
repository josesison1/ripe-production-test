import React from "react";
import PurchaseFooterAllTotal from "../PurchaseCardFooter/PurchaseFooterAllTotal";
import PurchaseFooterOrderInfo from "../PurchaseCardFooter/PurchaseFooterOrderInfo";

const PurchaseCardFooter = () => {
  return (
    <>
      <div className="flex flex-row justify-between bg-white">
        <PurchaseFooterOrderInfo />
        <PurchaseFooterAllTotal />
      </div>
    </>
  );
};

export default PurchaseCardFooter;
