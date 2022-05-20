import React from 'react'
import { test } from '../testObject'

export const FeedbackBodyQuestions = () => {
  const { surveyQuestions } = test
  console.log(surveyQuestions)
  return (
    <>
      <div>
        <div className="py-20 p-5 pb-4">
          {surveyQuestions.map(v => <li className="list-none"> {v.surveyQuestion} </li>)}
        </div>
      </div>
    </>
  )
}
