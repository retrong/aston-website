"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "./Buttons";

interface Slide {
  id: number;
  image: string;
  caption: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero-img1.jpg",
    caption: "Slide 1 Caption",
  },
  {
    id: 2,
    image: "/hero-img2.jpg",
    caption: "Slide 2 Caption",
  },
  {
    id: 3,
    image: "/hero-img1.jpg",
    caption: "Slide 3 Caption",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 3000); // 3000ms or 3s interval

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-start z-10 sm:px-10 px-4 mt-4">
        <div className=" sm:w-[50%] w-[100%]">
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-bold text-white py-3 rounded">
            Transforming Spaces, Elevating Lifestyles
          </h2>
          <div className="flex gap-6 sm:mt-6 mt-8 flex-col md:flex-row">
            <CustomButton
              size="medium"
              variant="primary"
              className="px-4 py-4 w-fit"
            >
              Explore Our Services
            </CustomButton>
            <CustomButton
              size="medium"
              variant="outline"
              className="px-4 py-4 w-fit"
            >
              Contact Us
            </CustomButton>
          </div>
        </div>
      </div>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-screen flex-shrink-0 relative"
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              className=" object-cover"
              layout="fill"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-xl"></div>
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                {slide.caption}
              </h2>
            </div> */}
          </div>
        ))}
      </div>
      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
