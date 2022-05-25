import React from 'react'
import PurchaseCardHeader from './PurchaseCardHeader'
import PurchaseCardBody from './PurchaseCardBody'
import PurchaseCardFooter from './PurchaseCardFooter'

const PurchaseCardContainer = () => {
  return (
    <>
      <div className="flex flex-row max-w-2xl h-2xl bg-green-200 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 w-full">
          <div className="font-bold text-xl mb-2 w-full">
            <PurchaseCardHeader />
            <div className="mt-10 border-2 border-green-400 rounded-lg">
              <PurchaseCardBody />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseCardContainer
