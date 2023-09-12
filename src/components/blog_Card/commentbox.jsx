import React from "react";
import HeartLogo from "../../assets/logo/heart.svg";
import WriteLogo from "../../assets/logo/write.svg";
const CommentBox = ({ comments }) => {
  return (
    <div className=" max-h-[120px] overflow-y-auto ">
      {comments.map((comment, index) => (
        <div key={index} className="text-black flex justify-between px-3">
          <div className="">
          <span className="text-black">{comment}</span>
          </div>
          <div className="flex gap-4">
          <img className="h-[1.5rem] " src={WriteLogo} alt="" />
          <img className="h-[1.5rem] " src={HeartLogo} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
