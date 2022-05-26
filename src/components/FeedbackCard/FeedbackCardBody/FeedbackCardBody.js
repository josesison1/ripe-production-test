import React from "react";
import { FeedbackBodyQuestions } from "../FeedbackCardBody/FeedbackBodyQuestions";
import FeedbackBodyAnswers from "../FeedbackCardBody/FeedbackBodyAnswers";
import FeedbackCardFooter from "../FeedbackCardFooter/FeedbackCardFooter";
import { FeedbackBodyBookmark } from "../FeedbackCardBody/FeedbackBodyBookmark";

const FeedbackCardBody = () => {
  return (
    <>
      <div className="pb-10 bg-white p-5 rounded-lg">
        <div className="z-20">
          <FeedbackBodyBookmark />
        </div>
        <div className="">{this.props.test.customerNme}</div>
        <div className="flex justify-right flex-row">
          <FeedbackBodyQuestions />
          <FeedbackBodyAnswers />
        </div>
        <div className="pt-10">
          <FeedbackCardFooter />
        </div>
      </div>
    </>
  );
};

export default FeedbackCardBody;
