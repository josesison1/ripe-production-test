import React from 'react'
import { test } from '../testObject'

const PurchaseUnitPrice = () => {
  const { purchaseInputs } = test
  return (
    <div className='flex flex-col'>
      <h1>Unit Price</h1>
      <div className='flex flex-col border-2 border-red-300'>
        {
          purchaseInputs.map((v, index) => {
            return (
              <div key={index}>{v.unitPrice}
              </div>
            )
          })
        }
      </div >
    </div >
  )
}

export default PurchaseUnitPrice
