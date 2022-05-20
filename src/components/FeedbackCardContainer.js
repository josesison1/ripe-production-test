import React from 'react'
import FeedbackCardHeader from './FeedbackCardHeader'
import FeedbackCardBody from './FeedbackCardBody'

const FeedbackCardContainer = () => {
  return (
    <>
      <div className="flex flex-row max-w-2xl h-2xl bg-orange-200 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 w-full">
          <div className="font-bold text-xl mb-2 w-full">
            <FeedbackCardHeader />
            <div className="border-2 border-orange-400">
              <FeedbackCardBody />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackCardContainer
