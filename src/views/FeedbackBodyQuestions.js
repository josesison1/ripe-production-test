import React from 'react'
import { test } from '../testObject'

export const FeedbackBodyQuestions = () => {
  const { surveyQuestions } = test
  console.log(surveyQuestions)
  return (
    <>
      <div>
        <div className="py-10 p-5 pb-4">
          {surveyQuestions.map((v, index) => <li key={index} className="list-none p-2"> {v.surveyQuestion} </li>)}
        </div>
      </div>
    </>
  )
}
