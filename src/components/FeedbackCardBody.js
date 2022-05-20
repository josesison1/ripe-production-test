import React from 'react'
import { FeedbackBodyQuestions } from '../views/FeedbackBodyQuestions'
import FeedbackBodyAnswers from '../views/FeedbackBodyAnswers'

const FeedbackCardBody = () => {
  return (
    <>
      <div className="flex justify-between">
        <FeedbackBodyQuestions />
        <FeedbackBodyAnswers />
      </div>
    </>
  )
}

export default FeedbackCardBody
