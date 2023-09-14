import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import userLogo from "../../assets/logo/profile_icon.svg";
import writeLogo from "../../assets/logo/write.svg";
import search from "../../assets/logo/search.svg";
const Navbar = () => {
  return (
    <div className="bg-[#f1aa5c]">
      <nav className="container mx-auto flex items-center justify-between py-2 md:py-1">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-14 md:h-20" src={Logo} alt="" />
          </Link>
          <div className="border border-black bg-gray-100 h-[35px] w-[200px] flex rounded-[15px] overflow-hidden ">
            <img className="h-10 md:h-[30px]" src={search} alt="" />
            <input className="w-[168px] " placeholder="Search..." type="text" />
          </div>
        </div>
        <ul className="flex items-center">
          <li className="mr-4 md:mr-6">
            <Link
              to="/"
              className="text-xl md:text-3xl font-semibold text-white hover:text-gray-200 transition duration-300"
            >
              HOME
            </Link>
          </li>
          <li className="mr-4 md:mr-6">
            <Link
              to="/login"
              className="text-xl md:text-3xl font-semibold text-white hover:text-gray-200 transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link to="/newstory">
              <img className="h-5 md:h-10 md:mx-3" src={writeLogo} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/user">
              <img className="h-10 md:h-14 mr-2 " src={userLogo} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
