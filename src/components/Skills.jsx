import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Network,
  Cloud,
  Terminal,
} from "lucide-react";

const interpersonalSkills = [
  "Strong Teamwork & Collaboration",
  "Open to Feedback & Continuous Improvement",
  "Time, People & Project Management",
  "High Commitment to Completing Tasks",
  "Strong Verbal & Written Communication",
  "Adaptability to New Technologies",
];

const technicalCapabilities = [
  {
    title: "Frontend Development",
    description:
      "Architecting responsive, high-performance, and interactive interfaces with modern web standards.",
    icon: Code2,
    tags: [
      { label: "REACT.JS" },
      { label: "JAVASCRIPT" },
      { label: "TAILWIND" },
      { label: "BOOTSTRAP" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Engineering robust server architectures, business logic, and resilient backend systems.",
    icon: Server,
    tags: [
      { label: "NODE.JS" },
      { label: "EXPRESS.JS" },
    ],
  },
  {
    title: "Database Management",
    description:
      "Designing optimized schemas, managing queries, and ensuring data reliability and security.",
    icon: Database,
    tags: [
      { label: "POSTGRESQL" },
      { label: "MONGODB" },
      { label: "MYSQL" },
    ],
  },
  {
    title: "API",
    description:
      "Designing, building, and integrating secure RESTful APIs, authentication, and web services.",
    icon: Network,
    tags: [
      { label: "REST APIS" },
      { label: "POSTMAN" },
    ],
  },
  {
    title: "Deployment & Cloud",
    description:
      "Configuring cloud platforms, environment setups, and managing scalable application deployments.",
    icon: Cloud,
    tags: [
      { label: "AWS" },
      { label: "VERCEL" },
      { label: "RENDER" },
      { label: "DOCKER" },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Adhering to collaborative industry best practices, version control, and agile delivery.",
    icon: Terminal,
    tags: [
      { label: "GIT & GITHUB" },
      { label: "CI / CD" },
      { label: "AGILE" },
    ],
  },
];

// Refined, lightweight animation variants
const leftColumnVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-[#0e0717] py-20 md:py-28 text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-900/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px]" />
      </div>

      {/* Seamless transition into Projects */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-b from-transparent to-[#0e0717] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-start">
          
          {/* LEFT COLUMN: Heading & Interpersonal Skills (Smooth progressive fade-in) */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Heading aligned at the exact same top level as the technical cards */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-[1.1] lg:-mt-1.5">
                Technical &{" "}
                <span className="bg-linear-to-r from-purple-200 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                  soft skills
                </span>
              </h2>
            </div>

            {/* Interpersonal Section with Horizontal Header & Vertical Line List - pushed lower */}
            <div className="space-y-6 pt-12 sm:pt-16 md:pt-20 lg:pt-24 max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 sm:w-12 h-px bg-purple-400/60 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-purple-300/90 uppercase whitespace-nowrap">
                  INTERPERSONAL EXCELLENCE
                </span>
                <div className="h-px flex-1 bg-linear-to-r from-purple-400/30 to-transparent" />
              </div>

              {/* Soft Skills List with Vertical Line fading slowly to the bottom */}
              <div className="relative pl-6 sm:pl-7 space-y-4">
                {/* Vertical line fading out to transparent */}
                <div
                  className="absolute left-1.5 top-1 bottom-1 w-[2px] 
                    bg-linear-to-b from-purple-400/80 via-purple-500/40 to-transparent"
                />

                {interpersonalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="relative flex items-center gap-3 text-slate-200 text-sm sm:text-[15px] font-medium group transition-colors"
                  >
                    <span className="text-purple-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-300">
                      →
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 6 Technical Capabilities Cards (Fluid Staggered Entrance) */}
          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {technicalCapabilities.map((card, idx) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={idx}
                    variants={cardItemVariants}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="group relative rounded-3xl p-5 sm:p-6 bg-[#140c22]/80 border border-purple-400/15 backdrop-blur-md overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.35)] flex flex-col justify-between hover:border-purple-400/35 transition-colors"
                  >
                    {/* Top Header & Text */}
                    <div className="relative z-10">
                      <div className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-400/25 flex items-center justify-center text-purple-300 shadow-sm mb-4 group-hover:border-purple-400/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                        {card.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-5 font-normal">
                        {card.description}
                      </p>
                    </div>

                    {/* Tech Pills at Bottom */}
                    <div className="relative z-10 flex flex-wrap gap-1.5 pt-2 mt-auto">
                      {card.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#1e1333]/90 border border-purple-400/20 text-[10px] sm:text-[11px] font-semibold tracking-wider text-purple-200/90 uppercase hover:border-purple-400/40 hover:text-white transition-colors"
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
