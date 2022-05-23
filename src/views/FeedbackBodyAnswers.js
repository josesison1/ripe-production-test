import React from 'react'
import { test } from '../testObject'

const FeedbackBodyAnswers = () => {
  const { surveyQuestions } = test
  console.log(surveyQuestions)
  return (
    <>
      <div>
        <div className="py-10 p-5 pb-4">
          {surveyQuestions.map(v => <li className="list-none p-2"> {v.surveyQuestionAnswer} </li>)}
        </div>
      </div>
    </>
  )
}

export default FeedbackBodyAnswers
