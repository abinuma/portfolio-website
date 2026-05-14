import React from "react";
import SphereCanvas from "./SphereCanvas";
import { useRef, useEffect } from "react";
import ScrollFadeUp from "./ScrollFadeUp";
import { Code2 } from "lucide-react";
import Skill2 from "./Skill2";


const Skills = () => {
  return (
    <section id="skills" className="relative bg-[#11071f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 lg:py-24">
        {/* glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-62.5 h-62.5 bg-[radial-gradient(circle,#9333eaCC_0%,#9333ea55_75%,transparent_70%)] blur-3xl"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-12 xl:gap-16">
          {/* tech skills */}
          <div className="w-full lg:w-1/2 xl:w-1/2   flex items-center justify-center ">
            <div className="w-full h-full max-w-160 lg:max-w-none">
              <Skill2 />
            </div>
          </div>

          {/* soft skills*/}
          <div className="relative lg:ml-20 w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-center lg:pl-4 xl:pl-8">
            <div className="absolute inset-0 flex items-center justify-center  pointer-events-none ml-67 mt-67 ">
              <div className="w-62.5 h-62.5 bg-[radial-gradient(circle,#9333eaCC_0%,#9333ea55_75%,transparent_70%)] blur-3xl"></div>
            </div>
            {/* Actual Card */}
            <div className="relative z-10 max-w-132.5 bg-[#1d0b36]  rounded-2xl  p-8  border border-purple-900/30  transition-all duration-500 hover:-translate-y-0.1 hover:scale-[1.01]">
              {/* Title */}
              <ScrollFadeUp className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-10 tracking-tight relative">
                My Soft Skills
              </ScrollFadeUp>

              {/* Vertical Line */}
              <div
                className="absolute left-10 top-27.5 bottom-10 w-0.5 
                  bg-linear-to-b from-purple-400/80 via-purple-500/50 to-transparent 
                  blur-[0.3px]"
              ></div>

              <ScrollFadeUp className="space-y-6 text-base sm:text-lg lg:text-xl relative">
                {[
                  "Strong Teamwork & Collaboration",
                  "Open to Feedback & Continuous Improvement",
                  "Time, People & Project Management",
                  "High Commitment to Completing Tasks",
                  "Strong verbal and written communication skills",
                  "Adaptability to New Technologies",
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="relative py-2  pl-12 flex items-start group"
                  >
                    {/* Arrow */}
                    <span className="absolute left-6 top-2 text-purple-400 transition-all duration-300 group-hover:text-purple-300 group-hover:translate-x-1   ">
                      →
                    </span>

                    {/* Skill Text */}
                    <span className="transition-colors duration-300 group-hover:text-purple-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ScrollFadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
