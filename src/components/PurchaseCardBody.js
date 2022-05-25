import React from 'react'
import PurchaseQty from '../views/PurchaseBodyQty'
import PurchaseProducts from '../views/PurchaseBodyProducts'
import PurchaseUnitPrice from '../views/PurchaseBodyUnitPrice'
import PurchaseItemTotal from '../views/PurchaseBodyItemTotal'
import { PurchaseBodyBookmark } from './PurchaseBodyBookmark'
import PurchaseCardFooter from './PurchaseCardFooter'
import { test } from '../testObject'

const PurchaseCardBody = () => {
  return (
    <div className='bg-white p-2 rounded-lg'>
      <div className='z-20'>
        <PurchaseBodyBookmark />
      </div>
      <div className='text-center font-Montserrat font-bold'>
        {test.purchaseFreqNum}
      </div>
      <div className='flex flex-row space-x-2 p-2 justify-between'>
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
