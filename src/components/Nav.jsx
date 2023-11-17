import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  }

  return (
    <div className="flex justify-between items-center h-20 px-4 absolute z-10 w-full text-white">
      <div>
        <h1 className={logo ? "hidden" : "block"}>BEACHES.</h1>
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>

      <div className="hidden md:flex">
        <BsPerson size={25} className="mr-4"/>
        <BiSearch size={25} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={25}/> : <HiMenu size={25} />}
      </div>

      {/* Mobile Dropdown */}
      <div className={nav ? "absolute w-full text-black left-[0] top-0 bg-gray-100/90 px-4 py-6 flex flex-col transition-all duration-300": "absolute w-full left-[-100%] top-0 opacity-0 transition-all duration-300"}>
        <ul>
          <h1 className="mb-4">BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
        </ul>

        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>

        <div className="flex justify-between p-8">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
