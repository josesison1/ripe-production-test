import React from 'react'
import { test } from '../testObject'

const PurchaseItemTotal = () => {
  const { purchaseInputs } = test
  return (
    <div className='flex flex-col'>
      <h1>Total</h1>
      <div className='flex flex-col border-2 border-red-300'>
        {
          purchaseInputs.map((v, index) => {
            return (
              <div key={index}>{v.totalItemPrice}
              </div>
            )
          })
        }
      </div >
    </div >
  )
}

export default PurchaseItemTotal
