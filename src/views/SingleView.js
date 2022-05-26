import React from "react";
import FeedbackCardContainer from "../components/FeedbackCard/FeedbackCardContainer";
import PurchaseCardContainer from "../components/PurchaseCard/PurchaseCardContainer";
import { test } from "../testObject";

const SingleView = () => {
  return (
    <div>
      <FeedbackCardContainer test={test} />
      <PurchaseCardContainer test={test} />
    </div>
  );
};

export default SingleView;
