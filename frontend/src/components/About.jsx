import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const About = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/gulfam_shair_cv.pdf";
    link.download = "Gulfam_Shair_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-900 text-white flex items-start justify-center px-6 py-10"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          About <span className="text-pink-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Side: Text */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I'm <span className="font-bold text-pink-500">Gulfam Shair</span>, a passionate and creative Full Stack Developer with a deep love for building sleek, user-focused web applications.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              With experience in the <span className="text-green-400">MERN Stack</span> (MongoDB, Express.js, React, Node.js), I bring both frontend finesse and backend power to every project.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I enjoy solving real-world problems, collaborating with teams, and learning new technologies to stay ahead in the tech world.
            </p>

            {/* Resume Button */}
            <div className="text-center md:text-left">
              <button
                onClick={downloadCV}
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors mb-4"
              >
                My Resume / CV
              </button>
            </div>

            {/* Arrow Icon for large screens */}
            <div className="pt-4 hidden md:flex justify-center md:justify-start">
              <a
                href="#skills"
                className="text-4xl text-pink-500 hover:text-pink-400 animate-bounce transition duration-300"
              >
                <IoIosArrowDown />
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center md:justify-end pr-0 md:pr-[15px]">
            <img
              src="/assets/mern_logo.png"
              alt="Gulfam Shair"
              className="w-64 h-72 rounded shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Arrow Icon for small screens */}
        <div className="mt-10 flex md:hidden justify-center">
          <a
            href="#skills"
            className="text-4xl text-pink-500 hover:text-pink-400 animate-bounce transition duration-300"
          >
            <IoIosArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;