import React from 'react'
import { test } from '../testObject'

export const FeedbackBodyQuestions = () => {
  const { surveyQuestions } = test
  console.log(surveyQuestions)
  return (
    <>
      <div>
        <div className="p-5">
          {test.customerNme}
        </div>
        <div className="p-5 pb-4">
          {surveyQuestions.map(v => <li className="list-none"> {v.surveyQuestion} </li>)}
        </div>
      </div>
    </>
  )
}
