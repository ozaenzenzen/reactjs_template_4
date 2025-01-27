import React, { useEffect } from "react";
import { FaSearchengin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesItemDetailComponent from "./components/ServicesItemDetailComponent";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      id="services"
      className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full flex lg:flex-row flex-col justify-between items-start gap-[100px]"
    >
      <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6 ">
        <h1
          data-aos="zoom-in"
          className="text-4xl uppercase text-white font-poppins font-semibold"
        >
          Services
        </h1>
        <div data-aos="zoom-in" className="bg-themered h-[3px] w-20"></div>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-300 text-lg font-poppins"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      <div className="lg:w-[60%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-12">
        <ServicesItemDetailComponent />
        <ServicesItemDetailComponent />
        <ServicesItemDetailComponent />
        <ServicesItemDetailComponent />
      </div>
    </div>
  );
};

export default Services;
