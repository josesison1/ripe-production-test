import React from 'react'
import { test } from '../testObject'

const PurchaseFooterAllTotal = () => {
  const { subtotal, discounts, deliveryFee, cannabisTax, salesTax, orderTotal } = test.purchaseInputs[0]
  return (
    <div className="w-52 flex flex-col">
      <div className="flex flex-row justify-between mb-2">
        Subtotal
        <div>
          ${subtotal}
        </div>
      </div>
      <div className="flex flex-row justify-between mb-2">
        Delivery Fee
        <div>
         {deliveryFee}        
        </div>
      </div>
      <div className="flex flex-row justify-between mb-2">
        Discounts
        <div>
          ${discounts}
        </div>
      </div>
      <div className="flex flex-row justify-between mb-2">
        Cannabis Tax
        <div>
          ${cannabisTax}
        </div>
      </div>
      <div className="flex flex-row justify-between mb-2">
        Sales Tax
        <div>
          ${salesTax}
        </div>
      </div>
      <div className=" font-bold flex flex-row justify-between mb-2">
        Total
        <div>
          ${orderTotal}
        </div>
      </div>
    </div>
  )
}

export default PurchaseFooterAllTotal
