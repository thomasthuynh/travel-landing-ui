import React, { useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <FaArrowAltCircleLeft
        className="icon absolute top-[50%] left-4 cursor-pointer"
        size={25}
        onClick={prevSlide}
      />
      <FaArrowCircleRight
        className="icon absolute top-[50%] right-4 cursor-pointer"
        size={25}
        onClick={nextSlide}
      />
      {sliderData.map(
        (item, index) =>
          index === slide && (
            <div key={index}>
                <img
                  className="w-[90%] rounded-md mx-auto object-cover"
                  src={item.url}
                  alt="/"
                />
            </div>
          )
      )}
    </div>
  );
};

export default Carousel;
