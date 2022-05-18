import React from 'react'
import { test } from '../testObject'

const FeedbackCardContainer = () => {
const timestamp = Date.now();
const timeOnly = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
// console.log(timestamp)
  return (
    <>
    <div className="flex flex-row max-w-2xl h-2xl bg-orange-200 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl mb-2 border-2 border-black w-full flex justify-center h-screen items-center">
        <span>{test.cardType}</span> 
          <span>{timeOnly}</span>
        </div>
      </div>
    </div>
    </> 
    )
}

export default FeedbackCardContainer