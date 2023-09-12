import React from "react";

const CommentBox = ({ comments }) => {
  return (
    <div className=" max-h-[120px] overflow-y-auto ">
      {comments.map((comment, index) => (
        <div key={index} className="text-black">
          {comment}
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
