import React from 'react'
import { test } from '../testObject'

const FeedbackBodyAnswers = () => {
  const { surveyQuestions } = test
  console.log(surveyQuestions)
  return (
    <>
      <div>
        <div className="p-5 pb-4 pt-20">
          {surveyQuestions.map(v => <li className="list-none"> {v.surveyQuestionAnswer} </li>)}
        </div>
      </div>
    </>
  )
}

export default FeedbackBodyAnswers
