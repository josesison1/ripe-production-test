import React from "react";
import PurchaseFooterAllTotal from "../views/PurchaseFooterAllTotal";
import PurchaseFooterOrderInfo from "../views/PurchaseFooterOrderInfo";

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
