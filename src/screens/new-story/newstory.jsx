import React from "react";

const newstory = () => {
  return (
    <>
      <div className="h-[2100px] md:h-[1200px]">
        <div className="flex flex-col md:grid grid-cols-5">
        <div className=" ml-5 md:ml-0 mt-[50px] md:mt-0 md:h-full md:p-8 md:col-span-4">
            <textarea className="border border-black pt-[6px] w-[25rem] md:w-[70rem] " placeholder="Title" name="" id="" cols="150" rows="2"></textarea>
            <textarea className="border border-black w-[25rem] md:w-[70rem]" placeholder="Tell your story..." name="" id="" cols="150" rows="40"></textarea>
        </div>
        <div className="ml-5 md:ml-0 col-span-1">
            <button className="bg-black hover:bg-[#f1aa5c] rounded-lg mt-[3rem] text-white hover:text-black h-[2rem] w-[5rem] transition duration-100" type="submit">Publish</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default newstory;
