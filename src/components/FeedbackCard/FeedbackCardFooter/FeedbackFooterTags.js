import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const FeedbackFooterTags = ({ test }) => {
  const [tagValue, setTagValue] = useState("");
  const [addTag, setAddTag] = useState(test.tags);
  // const { tags } = addTag

  const addTags = () => {
    setAddTag([...addTag, tagValue]);
  };

  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="flex mx-2">
          {addTag.map((v, index) => {
            return (
              <div
                key={index}
                className="flex justify-between border-2 border-orange-400 border-w mr-2 text-sm p-2 px-2 bg-white text-orange-400 rounded-full"
              >
                {v}
                <div className="mx-2">
                  {" "}
                  <GrFormClose />{" "}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <input
            className="border-2 border-orange-400 rounded-xl text-md"
            type="text"
            placeholder="Add a tag"
            onChange={(e) => setTagValue(e.target.value)}
          />
        </div>
        <div className="cursor-pointer" onClick={addTags}>
          <FiPlusCircle />
        </div>
      </div>
    </>
  );
};

export default FeedbackFooterTags;
