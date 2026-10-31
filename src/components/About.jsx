import React from "react";
import { FileDown, GraduationCap } from "lucide-react";
import ScrollFadeUp from "./ScrollFadeUp";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-[#0e0717] overflow-hidden text-white"
    >
      {/* Ambient background glow matching hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-80 h-80 bg-purple-800/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <ScrollFadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading & Context Badges */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-purple-400/25 bg-[#1a0f2e]/70 backdrop-blur-md shadow-sm">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-purple-200/90 uppercase">
                    Background
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  A little about{" "}
                  <span className="bg-linear-to-r from-purple-200 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                    me
                  </span>
                </h2>
              </div>

              {/* Education Highlight */}
              <div className="pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-purple-400/15 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/20 flex items-center justify-center text-purple-300 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-300/80 font-medium">Education</p>
                    <p className="text-sm font-semibold text-white">Addis Ababa University</p>
                    <p className="text-xs text-slate-400">4th-Year Information Systems</p>
                  </div>
                </div>
              </div>
              {/* Download CV Button on the left part */}
              <div className="pt-2">
                <a
                  href="/Abinu_Mathewos_fullstack_CV.pdf"
                  download
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium text-[#140b24] bg-[#b79ff2] hover:bg-[#c5b0fa] shadow-[0_4px_22px_rgba(183,159,242,0.32)] hover:shadow-[0_6px_28px_rgba(183,159,242,0.48)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-fit"
                >
                  <FileDown className="w-4 h-4 text-[#140b24]" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Right Column: Narrative Content */}
            <div className="lg:col-span-7 bg-[#150d24]/70 border border-purple-400/20 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.45)] space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I'm a software developer and fourth-year Information Systems student at Addis Ababa University, passionate about building technology that solves real-world problems.
              </p>

              <p>
                Over the past few years, I've focused on turning ideas into functional, user-friendly applications, working across frontend development, backend systems, database design, and API integration. Building complete projects has helped me understand not only how to make applications work, but also how to make them reliable, maintainable, and secure.
              </p>

              <p>
                I'm particularly interested in the intersection of full-stack development. I enjoy exploring new technologies, tackling challenging problems, and continuously improving the way I build software.
              </p>

              <div className="border-l-2 border-[#b79ff2] pl-4 sm:pl-5 py-1">
                <p className="text-purple-200/95 font-medium">
                  I'm looking forward to collaborating with people who value thoughtful engineering, meaningful ideas, and continuous learning.
                </p>
              </div>
            </div>

          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
};

export default About;
