import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo/logo.png"
const navbar = () => {
  return (
    <>
        <div className=" h-[80px] bg-[#f1aa5c] ">
            <nav className='flex items-center md: justify-between '>
                <img className="h-[80px] w-[80px] ml-3" src={Logo} alt="" />
                <h1 className=' text-[38px] md:text-5xl font-semibold mt-[8px] '>My Blog</h1>
                <ul>
                    <li className='text-3xl font-semibold mr-[2px] md:mr-[30px] mt-[15px] bg-black text-white py-[3px] px-2 rounded-[2.5px] '><Link to="/">HOME</Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default navbar