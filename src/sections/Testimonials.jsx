import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft } from "react-icons/fa";
import { reviews } from "../export";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      id="testimonials"
      className="w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5"
    >
      <h1
        data-aos="zoom-in"
        className="text-4xl uppercase text-white font-poppins font-semibold"
      >
        Testimonials
      </h1>
      <div data-aos="zoom-in" className="bg-themered h-[3px] w-20"></div>
      <p
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-gray-300 text-lg font-poppins"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-between items-start gap-6 mt-10">
        {reviews.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            key={index}
            className="bg-[#2f2f2f] flex flex-col justify-center items-center gap-6 px-5 py-8 rounded-lg"
          >
            <FaQuoteLeft className="fill-themered size-10 transition-all duration-300 ease-in-out hover:scale-110" />
            <p className="text-gray-300 italic font-poppins text-center">
              {item.about}
            </p>
            <img
              src={item.img}
              alt=""
              className="transition-all duration-300 ease-in-out hover:scale-110"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-xl font-poppins">{item.name}</h1>
              <h1 className="text-gray-200 text-[14px] uppercase font-poppins">{item.post}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
