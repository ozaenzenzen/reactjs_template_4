import React from "react";
import hero from "../assets/hero.png";
import design from "../assets/design.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[100px]"
    >
      {/* Text Section */}
      <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-8">
        <h1 className="text-themered lg:text-3xl text-xl font-semibold">
          Hi, I'm Fauzan Akmal Mahdi
        </h1>
        <h1 className="text-white text-5xl font-semibold font-poppins">
          Software Engineer Mobile, Web, Backend Developer
        </h1>
        <p className="text-gray-300 lg:text-xl text-lg font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
        <button className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-8 py-3 rounded-lg mt-5 font-poppins">
          Contact Me
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-2/5 w-full relative">
        <div className="bg-[#2f2f2f] lg:w-[400px] w-full lg:h-[500px] h-[400px] rounded-lg absolute top-[30px] -left-[30px]">
          <img
            src={hero}
            alt="hero image"
            className="lg:w-[520px] w-full lg:h-[500px] h-[450px] rounded-lg relative z-30"
          />
            <img
            src={design}
            alt=""
            className="absolute -top-7 -right-7 rounded-lg z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
