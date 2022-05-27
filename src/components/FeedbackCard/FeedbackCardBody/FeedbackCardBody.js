import React from "react";
import { FeedbackBodyQuestions } from "../FeedbackCardBody/FeedbackBodyQuestions";
import FeedbackBodyAnswers from "../FeedbackCardBody/FeedbackBodyAnswers";
import FeedbackCardFooter from "../FeedbackCardFooter/FeedbackCardFooter";
import { FeedbackBodyBookmark } from "../FeedbackCardBody/FeedbackBodyBookmark";

const FeedbackCardBody = ({ test }) => {
  return (
    <>
      <div className="pb-10 bg-white p-5 rounded-lg">
        <div className="z-20">
          <FeedbackBodyBookmark />
        </div>
        <div className="">{test.customerNme}</div>
        <div className="flex justify-right flex-row">
          <FeedbackBodyQuestions test={test} />
          <FeedbackBodyAnswers test={test} />
        </div>
        <div className="pt-10">
          <FeedbackCardFooter test={test} />
        </div>
      </div>
    </>
  );
};

export default FeedbackCardBody;
