import React from 'react'
import PurchaseQty from '../views/PurchaseBodyQty'
import PurchaseProducts from '../views/PurchaseBodyProducts'
import PurchaseUnitPrice from '../views/PurchaseBodyUnitPrice'
import PurchaseItemTotal from '../views/PurchaseBodyItemTotal'
import { PurchaseBodyBookmark } from './PurchaseBodyBookmark'
import { test } from '../testObject'
import PurchaseCardFooter from './PurchaseCardFooter'

const PurchaseCardBody = () => {
  return (
    <div className='bg-white p-2'>
      {test.purchaseFreqNum}
      <div className='z-20'>
        <PurchaseBodyBookmark />
      </div>
      <div className='flex flex-row space-x-2 p-2'>
        <PurchaseQty />
        <PurchaseProducts />
        <PurchaseUnitPrice />
        <PurchaseItemTotal />
      </div>
      <div className='mt-20 p-2'>
        <PurchaseCardFooter />
      </div>
        
    </div>
  )
}

export default PurchaseCardBody
