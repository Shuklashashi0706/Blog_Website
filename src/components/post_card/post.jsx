import React from "react";
import Postfile from "./post_file";
import img1 from "./img/gondol.jpg";
import img2 from "./img/rock.jpg";
import img3 from "./img/skies.jpg";
import img4 from "./img/workshop.jpg";
const blog = (props) => {
  return (
    <>
      <div className="  m-3 ">
        <div className=" shadow-2xl   md:h-[403px] md:mr-[5px] md:w-[420px]  mb-[25px]">
          <div className=" w-full bg-[#f0f1f0] h-[60px] ">
            <h1 className=" text-3xl px-3 py-2">Popular Posts</h1>
          </div>
          <div className="">
            <Postfile img={img1} heading="Lorem" para="Sed mattis nunc" />
            <Postfile img={img2} heading="Lorem" para="Sed mattis nunc" />
            <Postfile img={img3} heading="Lorem" para="Sed mattis nunc" />
            <Postfile img={img4} heading="Lorem" para="Sed mattis nunc" />
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
