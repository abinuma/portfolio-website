import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, Github } from "lucide-react";
import ScrollFadeUp from "./ScrollFadeUp";

const icons = [
  {
    id: 1,
    icon: Mail,
    label: "Email",
    value: "abinumathewos@gmail.com",
    link: "mailto:abinumathewos@gmail.com",
  },
  {
    id: 2,
    icon: Phone,
    label: "Phone",
    value: "+251964639021",
    link: "tel:+251964639021",
  },
  {
    id: 3,
    icon: Linkedin,
    label: "LinkedIn",
    value: "abinu-mathewos-b9489434b",
    link: "https://www.linkedin.com/in/abinu-mathewos-b9489434b/",
  },
  {
    id: 4,
    icon: Send,
    label: "Telegram",
    value: "@lombaa11",
    link: "https://t.me/lombaa11",
  },
  {
    id: 5,
    icon: Github,
    label: "GitHub",
    value: "abinu12",
    link: "https://github.com/abinu12",
  },
  {
    id: 6,
    icon: MapPin,
    label: "Address",
    value: "Addis Ababa, Ethiopia",
    link: "https://www.google.com/maps/place/Addis+Ababa",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen p-5">
      {/* Header */}
      <ScrollFadeUp className="relative flex justify-center items-center h-45 sm:h-55 md:h-65 py-3">
        <p className="absolute text-[80px] sm:text-[120px] md:text-[160px] lg:text-[190px] text-[#413943] opacity-20 select-none mb-5 md:mb-12">
          contact
        </p>

        <div className="flex flex-col items-center relative z-10">
          <p className="text-xl sm:text-2xl md:text-3xl text-[#d6d0d0]">
            get in touch
          </p>
          <div className="md:mt-1 w-24 sm:w-32 md:w-40 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </ScrollFadeUp>

      {/* Contact Icons */}
      <div className="text-white grid grid-cols-2 md:grid-cols-3 gap-10 text-center mt-10">
        {icons.map(({ id, icon: Icon, label, value, link }) => (
          <div key={id} className="flex flex-col   items-center gap-3">
            <ScrollFadeUp>
              <motion.a
                href={link}
                // Only open real URLs in a new tab
                target={link?.startsWith("http") ? "_blank" : undefined}
                rel={
                  link?.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="bg-white md:h-20 md:w-20 h-15 w-15 flex items-center justify-center rounded-full cursor-pointer shadow-md"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0px 10px 20px rgba(140, 0, 200, 0.53)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-[#92349e] " />
              </motion.a>
            </ScrollFadeUp>
            <p className="md:text-[20px]">{label}</p>
            <p className="text-gray-400 text-sm md:text-[15px] break-all">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
