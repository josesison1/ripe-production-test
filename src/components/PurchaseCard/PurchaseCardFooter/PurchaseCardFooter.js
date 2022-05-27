import React from "react";
import PurchaseFooterAllTotal from "../PurchaseCardFooter/PurchaseFooterAllTotal";
import PurchaseFooterOrderInfo from "../PurchaseCardFooter/PurchaseFooterOrderInfo";

const PurchaseCardFooter = ({ test }) => {
  return (
    <>
      <div className="flex flex-row justify-between bg-white">
        <PurchaseFooterOrderInfo test={test} />
        <PurchaseFooterAllTotal test={test} />
      </div>
    </>
  );
};

export default PurchaseCardFooter;
