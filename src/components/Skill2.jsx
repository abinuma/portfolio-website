import ScrollFadeUp from "./ScrollFadeUp";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "logos/react.svg" },
      { name: "Tailwind CSS", icon: "logos/tailwind.svg" },
      { name: "Bootstrap", icon: "logos/bootstrap.svg" },
      { name: "JavaScript", icon: "logos/javascript.svg" },

      { name: "HTML5", icon: "logos/html.svg" },
      // { name: "CSS3", icon: "logos/css.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "logos/nodejs.svg" },
      { name: "Python", icon: "logos/python.svg" },

      { name: "Java", icon: "logos/java.svg" },
      { name: "C++", icon: "logos/cplusplus.svg" },
      { name: "C#", icon: "logos/csharp.svg" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "Postgres", icon: "logos/postgres.svg" },
      { name: "MongoDB", icon: "logos/mongodb.svg" },
      { name: "MySQL", icon: "logos/mysql.svg" },
      { name: "Git", icon: "logos/git.svg" },
    ],
  },
];

const Skill2 = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {skillCategories.map((cat) => (
        <ScrollFadeUp key={cat.category}>
          {/* Category Title */}
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white text-center sm:text-left">
            {cat.category}
          </h3>

          {/* Skill Pills */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 bg-[#301f49] p-4 rounded-xl min-h-30">
            {cat.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center w-20 h-20 pt-4 overflow-hidden"
              >
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 mb-2"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />

                <span className="text-xs text-[#e0dfff] text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollFadeUp>
      ))}
    </div>
  );
};

export default Skill2;
