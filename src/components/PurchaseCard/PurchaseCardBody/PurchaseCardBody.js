import React from "react";
import PurchaseQty from "../PurchaseCardBody/PurchaseBodyQty";
import PurchaseProducts from "../PurchaseCardBody/PurchaseBodyProducts";
import PurchaseUnitPrice from "../PurchaseCardBody/PurchaseBodyUnitPrice";
import PurchaseItemTotal from "../PurchaseCardBody/PurchaseBodyItemTotal";
import { PurchaseBodyBookmark } from "../PurchaseCardBody/PurchaseBodyBookmark";
import PurchaseCardFooter from "../PurchaseCardFooter/PurchaseCardFooter";

const PurchaseCardBody = () => {
  return (
    <div className="bg-white p-2 rounded-lg">
      <div className="z-20">
        <PurchaseBodyBookmark />
      </div>
      <div className="text-center font-Montserrat font-bold">
        {this.props.test.purchaseFreqNum}
      </div>
      <div className="flex flex-row space-x-2 p-2 justify-between">
        <PurchaseQty />
        <PurchaseProducts />
        <PurchaseUnitPrice />
        <PurchaseItemTotal />
      </div>
      <div className="mt-20 p-2">
        <PurchaseCardFooter />
      </div>
    </div>
  );
};

export default PurchaseCardBody;
