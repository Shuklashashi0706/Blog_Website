import React from "react";
import Btn from "./tag_btn";
const tag = () => {
  return (
    <>
      <div className="  m-3 ">
        <div className="  bg-[#6B8BB3] text-white shadow-2xl   md:h-[200px] md:mr-[5px] md:w-[420px]  mb-[25px]">
          <div className=" w-full bg-[#f0f1f0] h-[60px] ">
            <h1 className="text-black text-3xl px-3 py-2">Tags</h1>
          </div>
          <div className=" p-1 flex flex-col ">
            <div className="grid grid-cols-6 mb-2 gap-2">
              <Btn title="Travel" />
              <Btn title="USA" />
              <Btn title="London" />
              <Btn title="IKEA" />
              <Btn title="Norway" />
              <Btn title="DIY" />
            </div>
            <div className="grid grid-cols-4 mb-2">
              <Btn title="Family" />
              <Btn title="News" />
              <Btn title="Ideas" />
              <Btn title="Clothing" />
            </div>
            <div className="grid grid-cols-3 mb-2">
              <Btn title="Shopping" />
              <Btn title="Sports" />
              <Btn title="Games" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default tag;
