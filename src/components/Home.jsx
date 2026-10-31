import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import personal from "../assets/personalPhoto.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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

const photoContainerVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.25,
    },
  },
};

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#0e0717]"
    >
      {/* Ambient background lighting and subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft top-left lavender glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-130 sm:h-130 bg-purple-700/15 rounded-full blur-[120px]" />
        
        {/* Center deep charcoal radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-indigo-950/20 rounded-full blur-[140px]" />

        {/* Subtle decorative dot-matrix / grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(216, 180, 254, 0.9) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: Introduction & Actionable Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-7"
          >
            {/* Name & Role at the very top */}
            <motion.div variants={itemVariants} className="space-y-2.5">
              <p className="text-sm sm:text-base font-bold tracking-[0.25em] text-purple-300 uppercase">
                ABINU MATHEWOS
              </p>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-purple-400/25 bg-[#1a0f2e]/70 backdrop-blur-md shadow-sm">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-purple-200/90 uppercase">
                  FULL-STACK DEVELOPER
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black text-white tracking-tight leading-[1.12]">
                I build digital products that{" "}
                <span className="relative inline-block bg-linear-to-r from-purple-200 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                  solve real problems.
                </span>
              </h1>
            </motion.div>

            {/* Concise Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal"
            >
              From polished, responsive user interfaces to secure, scalable backend architectures,
              I build end-to-end web applications engineered for reliable performance and real-world impact.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium text-[#140b24] bg-[#b79ff2] hover:bg-[#c5b0fa] shadow-[0_4px_22px_rgba(183,159,242,0.32)] hover:shadow-[0_6px_28px_rgba(183,159,242,0.48)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                View my work
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium text-white bg-transparent hover:bg-white/[0.07] border border-[#523e70] hover:border-purple-300/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Bottom Meta Row: Availability & Location - no separating line */}
            <motion.div
              variants={itemVariants}
              className="pt-5 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Subtle Availability indicator without glowing point */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium w-fit">
                <span>Available for new projects</span>
              </div>

              {/* Based in Addis Ababa, Ethiopia */}
              <div className="inline-flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm font-medium">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                <span>Based in Addis Ababa, Ethiopia</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Profile Photo with circular center glow & slow bottom fade */}
          <motion.div
            variants={photoContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-85 sm:max-w-97.5 xl:max-w-105 flex items-center justify-center">
              
              {/* Circular ambient glow radiating from the center and slowly fading out at edges */}
              <div
                className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-90 sm:w-115 h-90 sm:h-115 rounded-full pointer-events-none blur-3xl opacity-90"
                style={{
                  background: "radial-gradient(circle, rgba(175, 95, 255, 0.46) 0%, rgba(147, 51, 234, 0.28) 38%, rgba(126, 34, 206, 0.10) 62%, transparent 75%)",
                }}
              />

              {/* Clean photo with slow fade out into near-black (#0e0717) */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 w-full flex justify-center items-end"
              >
                <img
                  src={personal}
                  alt="Abinu Mathewos"
                  className="w-full h-auto max-h-125 object-contain pointer-events-none select-none"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 55%, rgba(0,0,0,0.7) 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 55%, rgba(0,0,0,0.7) 80%, transparent 100%)",
                  }}
                />

                {/* Soft gradient dissolve to black / near-black (#0e0717) at the bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-44 sm:h-56 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 0%, rgba(14, 7, 23, 0.35) 30%, rgba(14, 7, 23, 0.8) 70%, #0e0717 100%)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
