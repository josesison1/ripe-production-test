import React from 'react'
import { test } from '../testObject'

const PurchaseFooterAllTotal = () => {
  const { subtotal, discounts, deliveryFee, cannabisTax, salesTax, orderTotal } = test.purchaseInputs[0]
  return (
    <div className="w-52">
      <div className="flex flex-row justify-between">
        Subtotal
        <div>
          {subtotal}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        Delivery Fee
        <div>
          {deliveryFee}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        Discounts
        <div>
          {discounts}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        Cannabis Tax
        <div>
          {cannabisTax}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        Sales Tax
        <div>
          {salesTax}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        Total
        <div>
          {orderTotal}
        </div>
      </div>
    </div>
  )
}

export default PurchaseFooterAllTotal
