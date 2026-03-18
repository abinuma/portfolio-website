import React, { useState } from "react";
import crownwear from "../assets/crownwear.png";
import amazon from "../assets/amazon.svg";
import netflix from "../assets/netflix.svg";
import apple from "../assets/apple.svg";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeUp from "./ScrollFadeUp";

const react = "logos/react.svg";
const tailwind = "logos/tailwind.svg";
const nodejs = "logos/nodejs.svg";
const express = "logos/express.svg";
const mongodb = "logos/mongodb.svg";
const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ecomerce web app ",
      description:
        "This is a full MERN stack ecommerce application... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate unde, dolores ex praesentium molestias ullam ipsum provident neque, numquam at cing elit. Voluptate unde, dolores ",
      github: "#",
      live: "https://crownwearbyabinu.vercel.app/",
      image: crownwear,
    },
    {
      id: 2,
      title: "Apple Clone",
      description:
        "Apple landing page clone built with React... Lorem ipsum dolor, sim! ",
      github: "#",
      live: "#",
      image: apple,
    },
    {
      id: 3,
      title: "Amazon Clone",
      description:
        "Amazon landing page clone built with React... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate unde, dolores ex praesentium molestias ullam ipsum provident neque, numquam at eum facilis error commodi. Ipsam veritatis reprehenderit expedita cum harum! ",
      github: "#",
      live: "#",
      image: amazon,
    },
    {
      id: 4,
      title: "Netflix Clone",
      description:
        "Netflix landing page clone built with React... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate unde, dolores ex praesentium molestias ullam ipsum provident neque, numquam at eum facilis error commodi. Ipsam veritatis reprehenderit expedita cum harum! ",
      github: "#",
      live: "#",
      image: netflix,
    },
  ];

  return (
    <div id="projects">
      <ScrollFadeUp className="flex flex-col items-center my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#d6d0d0] tracking-wide">
          Projects
        </h2>
        {/* Fading underline */}
        <div className="mt-2 w-30 h-px bg-linear-to-r from-transparent via-white to-transparent"></div>
      </ScrollFadeUp>

      <div className="flex sm:flex-col md:flex-row gap-4">
        {/* descritpion */}

        <div className="hidden md:flex items-start w-1/3 text-white p-4 relative ">
          {/* Background Glow (ALWAYS visible on desktop) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-62.5 h-62.5 bg-[radial-gradient(circle,#9333eaCC_0%,#9333ea55_45%,transparent_70%)] blur-3xl"></div>
          </div>
          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative bg-[#1e1330] p-6 rounded-xl w-full min-h-75"
              >
                {/* Center Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-62.5 h-62.5 bg-[radial-gradient(circle,rgba(153,22,185,0.75)_0%,rgba(153,22,185,0.35)_35%,transparent_50%)]  blur-3xl"></div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setActiveId(null)}
                    className="cursor-pointer   top-3 right-3 text-[#f4efef] text-xl   w-10 h-10 flex items-center justify-center z-10"
                  >
                    ✕
                  </button>{" "}
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 flex flex-col pt-4 lg:hidden z-10 relative  w-20  "
                  href={projects.find((p) => p.id === activeId)?.github}
                >
                  github link
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 pt-2 lg:hidden z-10 relative"
                  href={projects.find((p) => p.id === activeId)?.live}
                >
                  live site
                </a>

                <p className="py-8 relative z-10">
                  {projects.find((p) => p.id === activeId)?.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid w-[80%]  mx-auto md:grid-cols-2 lg:grid-cols-3   gap-4 items-stretch p-4  ">
          {/* card 1 */}

          {projects
            .filter((project) => project.id === 1)
            .map((project) => (
              <React.Fragment>
                <div
                  key={project.id}
                  className="relative group rounded-xl overflow-hidden flex flex-col border border-[#331563] h-80"
                >
                  {/* TOP PART */}
                  <div className="bg-white flex-1 flex items-center justify-center">
                    <img
                      className="w-46"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                  {/* TECH STACK + BUTTONS */}
                  <div className="flex-1 flex flex-col justify-center p-2 bg-[#2b1848]">
                    <div className="flex items-center justify-around">
                      <img className="h-10 w-10" src={mongodb} alt="" />
                      <img className="h-10 w-10 ml-1" src={express} alt="" />
                      <img className="h-10 w-10" src={react} alt="" />
                      <img className="h-10 w-10" src={nodejs} alt="" />
                    </div>

                    <div className="flex justify-around text-4xl">
                      <p className="text-[#439934]">M</p>
                      <p className="text-white">E</p>
                      <p className="text-[#61dafb]">R</p>
                      <p className="text-[#83cd29]">N</p>
                    </div>

                    {/* MOBILE + TABLET BUTTON */}
                    <div className="lg:hidden flex mt-3 justify-center">
                      <button
                        onClick={() =>
                          setActiveId(
                            activeId === project.id ? null : project.id,
                          )
                        }
                        className="w-[40%] p-2 bg-black text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1f1c23] hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        More
                      </button>
                    </div>
                  </div>

                  {/* DESKTOP HOVER OVERLAY */}
                  <div className="hidden lg:block absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 transition duration-500 lg:group-hover:opacity-80"></div>

                  {/* DESKTOP POPUP */}
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white rounded-xl shadow-xl w-[80%] h-[75%] flex flex-col items-center justify-center gap-3 transform scale-75 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1.2,0.36,1)] lg:group-hover:scale-100 lg:group-hover:opacity-100 pointer-events-auto">
                      <h3 className="text-lg px-2 font-semibold">
                        {project.title}
                      </h3>

                      <div className="flex flex-col gap-4 text-sm text-blue-600">
                        <a
                          href={project.github}
                          className="hover:text-[#261045]"
                        >
                          🔗 GitHub Link
                        </a>

                        <a href={project.live} className="hover:text-[#261045]">
                          🌐 Live Site
                        </a>
                      </div>

                      <button
                        onClick={() =>
                          setActiveId(
                            activeId === project.id ? null : project.id,
                          )
                        }
                        className=" p-2 bg-black text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#3b3740] hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        Description
                      </button>
                    </div>
                  </div>
                </div>
                {activeId === project.id && (
                  <div className="mt-3 bg-[#1e1330] text-white p-4 rounded-xl relative md:hidden">
                    <button
                      onClick={() => setActiveId(null)}
                      className="cursor-pointer absolute top-2 right-2 text-lg mx-3 "
                    >
                      ✕
                    </button>

                    <div className="mb-3 flex  gap-4 text-blue-400">
                      <a href={project.github}>GitHub</a>
                      <a href={project.live}>Live Site</a>
                    </div>

                    <p>{project.description}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          {/* card 2 */}
          {projects
            .filter((project) => project.id === 2)
            .map((project) => (
              <React.Fragment>
                <div
                  key={project.id}
                  className="relative group rounded-xl overflow-hidden flex flex-col border border-[#331563] h-80"
                >
                  {/* TOP PART */}
                  <div className="bg-white flex-1 flex items-center justify-center">
                    <img
                      className="w-46 h-24"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                  {/* TECH STACK + BUTTONS */}
                  <div className="flex-1 flex flex-col justify-center p-2 bg-[#2b1848]">
                    <div className="flex items-center justify-around">
                      <img className="h-10 w-10" src={mongodb} alt="" />
                      <img className="h-10 w-10 ml-1 " src={express} alt="" />
                      <img className="h-10 w-10" src={react} alt="" />
                      <img className="h-10 w-10" src={nodejs} alt="" />
                    </div>

                    <div className="flex justify-around text-4xl">
                      <p className="text-[#439934]">M</p>
                      <p className="text-white">E</p>
                      <p className="text-[#61dafb]">R</p>
                      <p className="text-[#83cd29]">N</p>
                    </div>

                    {/* MOBILE + TABLET BUTTON */}
                    <div className="lg:hidden flex mt-3 justify-center">
                      <button
                        onClick={() =>
                          setActiveId(
                            activeId === project.id ? null : project.id,
                          )
                        }
                        className=" w-[40%] p-2 bg-black text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1f1c23] hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        More
                      </button>
                    </div>
                  </div>

                  {/* DESKTOP HOVER OVERLAY */}
                  <div className="hidden lg:block absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 transition duration-500 lg:group-hover:opacity-80"></div>

                  {/* DESKTOP POPUP */}
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white rounded-xl shadow-xl w-[80%] h-[75%] flex flex-col items-center justify-center gap-3 transform scale-75 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1.2,0.36,1)] lg:group-hover:scale-100 lg:group-hover:opacity-100 pointer-events-auto">
                      <h3 className=" px-2 text-lg font-semibold">
                        {project.title}
                      </h3>

                      <div className="flex flex-col gap-4 text-sm text-blue-600">
                        <a
                          href={project.github}
                          className="hover:text-[#261045]"
                        >
                          🔗 GitHub Link
                        </a>

                        <a className="hover:text-[#261045]" href={project.live}>
                          🌐 Live Site
                        </a>
                      </div>

                      <button
                        onClick={() =>
                          setActiveId(
                            activeId === project.id ? null : project.id,
                          )
                        }
                        className="p-2 bg-black text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#3b3740] hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        Description
                      </button>
                    </div>
                  </div>
                </div>
                {/* mobile description */}
                {activeId === project.id && (
                  <div className="mt-3 bg-[#1e1330] text-white p-4 rounded-xl relative md:hidden">
                    <button
                      onClick={() => setActiveId(null)}
                      className="cursor-pointer absolute top-2 right-2 mx-3 text-lg"
                    >
                      ✕
                    </button>

                    <div className="mb-3 flex gap-4 text-blue-400">
                      <a href={project.github}>GitHub</a>
                      <a href={project.live}>Live Site</a>
                    </div>

                    <p>{project.description}</p>
                  </div>
                )}
              </React.Fragment>
            ))}

          {/* card 3 */}
          {projects
            .filter((project) => project.id === 3)
            .map((project) => (
              <React.Fragment>
                <div
                  key={project.id}
                  className="relative group rounded-xl overflow-hidden flex flex-col border border-[#331563] h-80"
                >
                  {/* TOP PART */}
                  <div className="bg-white flex-1 flex items-center justify-center">
                    <img
                      className="w-46"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                  {/* TECH STACK + BUTTONS */}
                  <div className="flex-1 flex flex-col justify-center p-2 bg-[#2b1848]">
                    <div className="flex items-center justify-around">
                      <img className="h-10 w-10" src={mongodb} alt="" />
                      <img className="h-10 w-10" src={express} alt="" />
                      <img className="h-10 w-10" src={react} alt="" />
                      <img className="h-10 w-10" src={nodejs} alt="" />
                    </div>

                    <div className="flex justify-around text-4xl">
                      <p className="text-[#439934]">M</p>
                      <p className="text-white">E</p>
                      <p className="text-[#61dafb]">R</p>
                      <p className="text-[#83cd29]">N</p>
                    </div>

                    {/* MOBILE + TABLET BUTTON */}
                    <div className="lg:hidden flex mt-3 justify-center">
                      <button
                        onClick={() =>
                          setActiveId(
                            activeId === project.id ? null : project.id,
                          )
                        }
                        className="w-[40%] p-2 bg-black text-white rounded-md"
                      >
                        More
                      </button>
                    </div>
                  </div>

                  {/* DESKTOP HOVER OVERLAY */}
                  <div className="hidden lg:block absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 transition duration-500 lg:group-hover:opacity-80"></div>

                  {/* DESKTOP POPUP */}
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white rounded-xl shadow-xl w-[80%] h-[75%] flex flex-col items-center justify-center gap-3 transform scale-75 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1.2,0.36,1)] lg:group-hover:scale-100 lg:group-hover:opacity-100 pointer-events-auto">
                      <h3 className="text-lg font-semibold">{project.title}</h3>

                      <div className="flex gap-4 text-sm text-blue-600">
                        <a href={project.github} className="hover:underline">
                          🔗 GitHub Link
                        </a>

                        <a href={project.live} className="hover:underline">
                          🌐 Live Site
                        </a>
                      </div>

                      <button
                        onClick={() => setActiveId(project.id)}
                        className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                      >
                        Description
                      </button>
                    </div>
                  </div>
                </div>
                {activeId === project.id && (
                  <div className="mt-3 bg-[#1e1330] text-white p-4 rounded-xl relative md:hidden">
                    <button
                      onClick={() => setActiveId(null)}
                      className="absolute top-2 right-2 text-lg"
                    >
                      ✕
                    </button>

                    <div className="mb-3 flex gap-4 text-blue-400">
                      <a href={project.github}>GitHub</a>
                      <a href={project.live}>Live Site</a>
                    </div>

                    <p>{project.description}</p>
                  </div>
                )}
              </React.Fragment>
            ))}

          {/* card 4 */}
          {projects
            .filter((project) => project.id === 4)
            .map((project) => (
              <React.Fragment>
                <div
                  key={project.id}
                  className="relative group rounded-xl overflow-hidden flex flex-col border    h-80   "
                >
                  {/* TOP PART */}
                  <div className="bg-[#111111] flex-1 flex items-center justify-center shadow-inner shadow-white/15">
                    <img
                      className="w-40"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                  {/* TECH STACK + BUTTONS */}
                  <div className="flex-1 flex flex-col justify-center p-2 bg-[#2b1848]">
                    <div className="flex items-center justify-around">
                      <img className="h-10 w-10" src={mongodb} alt="" />
                      <img className="h-10 w-10" src={express} alt="" />
                      <img className="h-10 w-10" src={react} alt="" />
                      <img className="h-10 w-10" src={nodejs} alt="" />
                    </div>

                    <div className="flex justify-around text-4xl">
                      <p className="text-[#439934]">M</p>
                      <p className="text-white">E</p>
                      <p className="text-[#61dafb]">R</p>
                      <p className="text-[#83cd29]">N</p>
                    </div>

                    {/* MOBILE + TABLET BUTTON */}
                    <div className="lg:hidden flex mt-3 justify-center">
                      <button
                        onClick={() =>
                          setActiveId(
                            activeId === project.id ? null : project.id,
                          )
                        }
                        className="w-[40%] p-2 bg-black text-white rounded-md"
                      >
                        More
                      </button>
                    </div>
                  </div>

                  {/* DESKTOP HOVER OVERLAY */}
                  <div className="hidden lg:block absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 transition duration-500 lg:group-hover:opacity-80"></div>

                  {/* DESKTOP POPUP */}
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white rounded-xl shadow-xl w-[80%] h-[75%] flex flex-col items-center justify-center gap-3 transform scale-75 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1.2,0.36,1)] lg:group-hover:scale-100 lg:group-hover:opacity-100 pointer-events-auto">
                      <h3 className="text-lg font-semibold">{project.title}</h3>

                      <div className="flex gap-4 text-sm text-blue-600">
                        <a href={project.github} className="hover:underline">
                          🔗 GitHub Link
                        </a>

                        <a href={project.live} className="hover:underline">
                          🌐 Live Site
                        </a>
                      </div>

                      <button
                        onClick={() => setActiveId(project.id)}
                        className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                      >
                        Description
                      </button>
                    </div>
                  </div>
                </div>
                {activeId === project.id && (
                  <div className="mt-3 bg-[#1e1330] text-white p-4 rounded-xl relative md:hidden">
                    <button
                      onClick={() => setActiveId(null)}
                      className="absolute top-2 right-2 text-lg"
                    >
                      ✕
                    </button>

                    <div className="mb-3 flex gap-4 text-blue-400">
                      <a href={project.github}>GitHub</a>
                      <a href={project.live}>Live Site</a>
                    </div>

                    <p>{project.description}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
