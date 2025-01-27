import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";

const ServicesItemDetailComponent = () => {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col justify-center items-start gap-6"
    >
      <div className="bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
        <MdOutlineDesignServices className="fill-white size-9 cursor-pointer" />
      </div>
      <div className="flex flex-col justify-center items-start gap-3">
        <h1 className="text-white font-semibold text-[26px]">Branding</h1>
        <p className="text-gray-300 text-[17px] font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
      <button className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2">
        See Details{" "}
        <span>
          <FaArrowRightLong />
        </span>
      </button>
    </div>
  );
};

export default ServicesItemDetailComponent;
