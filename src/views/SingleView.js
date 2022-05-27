import React, { useEffect, useState } from "react";
import FeedbackCardContainer from "../components/FeedbackCard/FeedbackCardContainer";
import PurchaseCardContainer from "../components/PurchaseCard/PurchaseCardContainer";
import { test } from "../testObject";

const SingleView = () => {
  //intializing state for test object setting it to null
  const [data, setData] = useState(null);
  //initializing state for rendering and setting to true
  const [loading, setLoading] = useState(true);

  //similar to componentDidMount which renders the test obj
  useEffect(() => {
    //updating the state to the test obj
    setData(test);
    //updating the state to false
    setLoading(false);
  }, []);
  console.log(data);

  return (
    //allows it to rerender the screen from loading to populating the data
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <FeedbackCardContainer test={data[0]} />
          <PurchaseCardContainer test={data[1]} />
        </div>
      )}
    </div>
  );
};

export default SingleView;
