import React from "react";
import UserLogo from "../../assets/logo/profile_icon.svg";
import { Link } from "react-router-dom";
const profile = () => {
  return (
    <>
      <div className="h-[2100px] md:h-[1100px] md:mt-10">
        <p className=" text-center text-2xl  font-mono mt-2 md:mt-0">
          User<span className="bg-black text-white">Profile</span>
        </p>
        <div className=" flex flex-col md:grid md:grid-cols-3 md:gap-2">
          <div className="border border-black md:col-span-2 md:h-[1000px] m-1">
            <div className=""></div>
          </div>
          <div className="md:col-span-1  md:h-[1000px] m-1">
            <div className=" ml-3">
              <img className=" h-[10rem]" src={UserLogo} alt="" />
              <p className="ml-[30px] ">
                <Link to="/user">Anonymous</Link>
              </p>
            </div>
            <div className=" mt-4 ml-[40px] ">
              <h3 className="text-[#47c947]">
                <Link to="#">Edit Profile</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
