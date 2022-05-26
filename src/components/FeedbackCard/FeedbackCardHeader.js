import React, { useState } from "react";

const FeedbackCardHeader = (props) => {
  const [cardType, setCardType] = useState(props);

  const timestamp = Date.now();
  const timeOnly = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(timestamp);
  // console.log(timestamp)
  return (
    <>
      <div className="flex justify-between">
        <span>{props.test.cardType}</span>
        <div className="flex flex-col">
          <span>{timeOnly}</span>
        </div>
      </div>
    </>
  );
};

export default FeedbackCardHeader;
