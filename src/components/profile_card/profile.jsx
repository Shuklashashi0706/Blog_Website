import React from "react";

const blog = (props) => {
  return (
    <>
      <div className="  m-3 ">
        <div className="  bg-[#6B8BB3] text-white shadow-2xl   md:h-[390px] md:mr-[5px] md:w-[420px]  mb-[25px]">
          <div className=" border relative h-[350px] md:h-[250px] w-full ">
            <img
              className="absolute inset-0 w-full h-full object-cover   "
              src={props.img}
              alt="img"
            />
          </div>
          <div className="px-2 py-1 ">
          <h2 className="font-bold text-2xl ">{props.title}</h2>
          <p >{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
