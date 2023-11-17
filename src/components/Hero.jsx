import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>

      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form className="flex justify-between items-center w-full max-w-[700px] border rounded-md p-1 text-black bg-gray-100/90">
          <div className="w-[80%] sm:w-[90%]">
            <input className="bg-transparent w-full focus:outline-none" type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button><AiOutlineSearch size={20} className="icon"/></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
