import React from "react";

const FeedbackBodyAnswers = ({ test }) => {
  const { surveyQuestions } = test;
  return (
    <>
      <div>
        <div className="py-10 p-5 pb-4">
          {surveyQuestions.map((v, index) => (
            <li key={index} className="list-none p-2">
              {" "}
              {v.surveyQuestionAnswer}{" "}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeedbackBodyAnswers;
