import React from "react";

const blog = (props) => {
  return (
    <>
      <div className=" bg-[#6B8BB3] text-white hover:bg-[#f0f1f0] hover:text-black md:h-[85px]">
        <div className=" flex items-center md:w-[420px] py-3 px-3 ">
          <div className="relative h-[50px] w-[50px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={props.img}
              alt=""
            />
          </div>
          <div className=" ml-3">
            <p className="text-xl">{props.heading}</p>
            <p className=" font-thin">{props.para}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default blog;
