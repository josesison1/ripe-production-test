import React from 'react'
import { test } from '../testObject'

const PurchaseCardHeader = () => {
  const timestamp = Date.now();
  const timeOnly = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
  // console.log(timestamp)
  return (
    <>
      <div className="flex justify-between ">
        <span>{test.cardType2}</span>
        <div className='flex flex-row space-x-2 justify-between text-sm'>
          <span>{test.customerNme}</span>
          <span>{timeOnly}</span>
        </div>
      </div>
    </>
  )
}

export default PurchaseCardHeader
