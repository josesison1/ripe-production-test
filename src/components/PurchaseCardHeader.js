import React from 'react'
import { test } from '../testObject'

const PurchaseCardHeader = () => {
  const timestamp = Date.now();
  const timeOnly = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
  // console.log(timestamp)
  return (
    <>
      <div className="flex justify-between">
        <span>{test.cardType2}</span>
        <div>{test.customerNme}</div>
        <div className='flex flex-col'><span>{timeOnly}</span>
        </div>
      </div>
    </>
  )
}

export default PurchaseCardHeader
