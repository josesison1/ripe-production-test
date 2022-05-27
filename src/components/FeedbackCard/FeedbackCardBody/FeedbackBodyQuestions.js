import React from "react";

export const FeedbackBodyQuestions = ({ test }) => {
  return (
    <>
      <div>
        <div className="py-10 p-5 pb-4">
          {test.surveyQuestions.map((v, index) => (
            <li key={index} className="list-none p-2">
              {" "}
              {v.surveyQuestion}{" "}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
