import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["home", "about", "skills", "projects", "contact"];

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // center of viewport

      for (let id of navItems) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click handler to scroll smoothly to section
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#191321] text-white flex justify-between items-center px-4 py-3 pr-10 shadow-lg">
      {/* Logo */}
      <div className="px-2 ">
        <img
          src={logo}
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => handleNavClick("home")}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 px-4">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => handleNavClick(item)}
            className={`cursor-pointer relative transition-all duration-300
              ${activeSection === item ? "after:w-full" : "after:w-0"}
              after:block after:h-0.5 after:bg-purple-500 after:mt-1 after:transition-all after:duration-300`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer transition-all duration-300
                ${activeSection === item ? "underline decoration-purple-500" : ""}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
