import React from "react";
import FeedbackCardHeader from "../FeedbackCard/FeedbackCardHeader";
import FeedbackCardBody from "../FeedbackCard/FeedbackCardBody/FeedbackCardBody";

const FeedbackCardContainer = ({ test }) => {
  return (
    <>
      <div className="flex flex-row max-w-2xl h-2xl bg-orange-200 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 w-full">
          <div className="font-bold text-xl mb-2 w-full">
            <FeedbackCardHeader test={test} />
            <div className="mt-10 border-2 border-orange-400 rounded-lg">
              <FeedbackCardBody test={test} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCardContainer;
