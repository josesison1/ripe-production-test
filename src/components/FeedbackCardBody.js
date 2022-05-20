import React from 'react'
import { FeedbackBodyQuestions } from '../views/FeedbackBodyQuestions'
import FeedbackBodyAnswers from '../views/FeedbackBodyAnswers'
import FeedbackCardFooter from './FeedbackCardFooter'
import { FeedbackBodyBookmark } from './FeedbackBodyBookmark'
import { test } from '../testObject'

const FeedbackCardBody = () => {
  return (
    <>
      <div className='pb-10 bg-white p-5'>
        <div className='z-20'>
          <FeedbackBodyBookmark />
        </div>
        <div className="">
          {test.customerNme}
        </div>
        <div className="flex justify-right flex-row">
          <FeedbackBodyQuestions />
          <FeedbackBodyAnswers />
        </div>
        <div className='pt-10'>
          <FeedbackCardFooter />
        </div>
      </div>
    </>
  )
}

export default FeedbackCardBody
