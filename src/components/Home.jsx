import React, { useEffect, useState } from "react";
import personal from "../assets/personalPhoto.jpg";
import { motion } from "framer-motion";

const roles = ["Abinu Mathewos", "A Full Stack Developer"];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 1200;

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (phase === "typing") {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setPhase("pause");
        }, PAUSE_AFTER_TYPING);
      }
    } else if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, DELETING_SPEED);
      } else {
        setPhase("typing");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, roleIndex]);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center my-10"
    >
      <div className="flex items-center justify-center mb-5">
        <img
          className="rounded-full w-48 h-48 object-cover"
          src={personal}
          alt="Abinu Mathewos"
        />
      </div>

      <div className="text-gray-300  text-center min-h-20 flex items-center justify-center">
        <div>
          <p className="text-lg py-2 ">I'm</p>

          <h1 className="text-3xl h-30 md:h-37.5 md:text-5xl font-bold text-gray-300 tracking-wide relative">
            {text}
            <span className="blink-cursor">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
