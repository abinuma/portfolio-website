import React from "react";
// import personal from '../assets/personalNobg.png'

import computerImage from "../assets/computerImage.png";
import ScrollFadeUp from "../components/ScrollFadeUp";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row bg-[#121212] mx-5 ">
      <ScrollFadeUp className="md:w-1/4 flex items-center justify-center ">
        <img src={computerImage} alt="Computer" className="max-w-full h-auto" />
      </ScrollFadeUp>
      <ScrollFadeUp className="relative md:w-3/4 py-8 px-6 md:px-12 flex justify-center text-white overflow-hidden">
        {/* Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-125 h-125 
        bg-[radial-gradient(circle,rgba(153,22,185,0.35)_0%,rgba(153,22,185,0.15)_40%,transparent_70%)] 
        blur-3xl"
          ></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl">
            I'm <span className="text-[#9916b9]">Abinu Mathewos</span>
          </h1>

          <h4 className="text-2xl mt-2">A Full Stack Developer</h4>

          <div className="space-y-6 text-gray-300 leading-relaxed mt-6  ">
            <p>
              I'm a Full Stack Developer passionate about building modern,
              scalable, and efficient web applications that help businesses and
              individuals grow in the digital world.
            </p>

            <p>
              By combining practical development skills with strong algorithmic
              thinking from my Information Systems background, I build solutions
              that are clean, optimized, and reliable.
            </p>

            <p>
              I genuinely enjoy debugging, testing, and refining systems to
              ensure they perform smoothly and deliver a seamless experience for
              users.
            </p>
          </div>
          <a
            href="/Abinu_fullstack_CV.pdf"
            download
            className="mt-16 inline-block border border-[#9916b9] rounded-md   hover:bg-purple-700 hover:text-white   py-3 px-6 transition duration-300   hover:scale-105 ease-in-out"
          >
            Download CV
          </a>
        </div>
      </ScrollFadeUp>
    </div>
  );
};

export default About;
