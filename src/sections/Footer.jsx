import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: true,
      });
    }, []);

  return (
    <div id='contact'>Footer</div>
  )
}

export default Footer