import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      id="contact"
      className="bg-black w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5"
    >
      <h1
        data-aos="zoom-in"
        className="capitalize text-white text-[25px] font-semibold font-poppins"
      >
        Get In Touch With Me
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-gray-300 text-[16px] text-center font-poppins leading-8"
      >
        Jakarta, Indonesia <br></br> fauzanamahdi@gmail.com <br></br> +62
        0808111111
      </p>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full flex justify-center items-center gap-3 mt-6"
      >
        <div className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer">
          <FaFacebook className="fill-white size-6" />
        </div>
        <div className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer">
          <RiInstagramFill className="fill-white size-6" />
        </div>
        <div className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer">
          <FaTwitter className="fill-white size-6" />
        </div>
        <div className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer">
          <FaLinkedinIn className="fill-white size-6" />
        </div>
      </div>

      <p className="text-gray-300 text-[15px] text-center font-poppins leading-8">
        Copyright &copy; 2025, Fauzan Akmal Mahdi
      </p>
      <div
        id="icon-box"
        className="bg-themered text-white p-3 rounded-full hover:bg-black hover:text-themered cursor-pointer fixed bottom-7 right-7"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-7" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
