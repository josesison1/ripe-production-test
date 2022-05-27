import React from "react";
import FeedbackFooterTags from "../FeedbackCardFooter/FeedbackFooterTags";

const FeedbackCardFooter = ({ test }) => {
  return (
    <>
      <div className="bg-white">
        <FeedbackFooterTags test={test} />
      </div>
    </>
  );
};

export default FeedbackCardFooter;
