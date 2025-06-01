import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import profilePic from '../assets/gulfam2.jpeg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen  pt-10 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-1"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-6 mt-10 sm:mt-16 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            GULFAM SHAIR
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-300">
          A passionate Full Stack Developer crafting <br className="hidden sm:block" />
          modern experiences with the power of the MERN Stack.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 sm:space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            View My Work 🚀
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            Get Started 💬
          </a>
        </div>

        {/* Arrow for large screens */}
        <div className="m-44 pt-14 hidden md:flex justify-center sm:justify-start">
          <a
            href="#about"
            className="text-4xl sm:text-5xl text-pink-500 hover:text-pink-400 animate-bounce transition duration-300"
          >
            <IoIosArrowDown />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 mt-10 md:mt-0 flex flex-col items-center">
        <img
          src={profilePic}
          alt="Gulfam Shair"
          className="w-52 h-52 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] rounded-full border-8 border-pink-500 shadow-2xl object-cover hover:scale-105 transition duration-500"
        />

        {/* Arrow for small screens (below image) */}
        <div className="mt-10 flex md:hidden justify-center">
          <a
            href="#about"
            className="text-4xl text-pink-500 hover:text-pink-400 animate-bounce transition duration-300"
          >
            <IoIosArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;