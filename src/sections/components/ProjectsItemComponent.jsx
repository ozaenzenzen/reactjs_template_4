import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsItemComponent = ({ title, image, isReverse }) => {
  return (
    <div
      className={`w-full flex ${
        isReverse ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col justify-between items-center gap-20 mt-20`}
    >
      <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-white font-semibold text-[32px] leading-10"
          >
            {title}
            {/* Ecommerce Mobile App Developement */}
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="800"
            className="text-gray-300 text-[17px] font-poppins"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>
        <button
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2"
        >
          See Details{" "}
          <span>
            <FaArrowRightLong />
          </span>{" "}
        </button>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="1200"
        className="lg:w-[60%] w-full relative"
      >
        <div className="bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rounded-lg absolute top-[30px] -left-[30px]"></div>
        <img src={image} alt="" className="relative z-20 rounded-lg" />
      </div>
    </div>
  );
};

export default ProjectsItemComponent;
