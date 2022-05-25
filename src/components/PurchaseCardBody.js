import React from 'react'
import PurchaseQty from '../views/PurchaseQty'
import PurchaseProducts from '../views/PurchaseProducts'
import PurchaseUnitPrice from '../views/PurchaseUnitPrice'
import PurchaseItemTotal from '../views/PurchaseItemTotal'
import { PurchaseBodyBookmark } from './PurchaseBodyBookmark'
import { test } from '../testObject'

const PurchaseCardBody = () => {
  return (
    <div>
      {test.purchaseFreqNum}
      <div className='z-20'>
        <PurchaseBodyBookmark />
      </div>
      <div className='flex flex-row space-x-2'>
        <PurchaseQty />
        <PurchaseProducts />
        <PurchaseUnitPrice />
        <PurchaseItemTotal />
      </div>
    </div>
  )
}

export default PurchaseCardBody
