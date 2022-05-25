import React from 'react'
import { test } from '../testObject'

const PurchaseFooterOrderInfo = () => {
  const { orderNumber, paymentMethod } = test.purchaseInputs[0]
  return (
    <div>
      Order Number
      <div>{orderNumber}</div>
      Payment Method
      <div>{paymentMethod}</div>
    </div>
  )
}

export default PurchaseFooterOrderInfo
