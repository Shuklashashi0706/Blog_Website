import React from "react";

const blog = (props) => {
  return (
    <>
      <div className=" m-3 ">
        <div className=" bg-[#6B8BB3] text-white shadow-xl  md:h-[500px] md:ml-[100px]  mb-[25px]">
          <div className=" relative h-[300px] w-full ">
            <img
              className="absolute inset-0 w-full h-full object-cover   "
              src={props.img}
              alt="img"
            />
          </div>
          <div className="p-2 ">
          <h2 className="font-bold text-2xl ">{props.title}</h2>
          <p className=" font-semibold">{props.desc}</p>
          <p>{props.para}</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default blog;
