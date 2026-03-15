import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#11071f] z-50">
      {/* Glow background */}
      <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Spinner container */}
      <div className="relative flex items-center justify-center">
        {/* Outer Semi Circle (clockwise) */}
        <div
          className="w-15 h-15 border-4 border-purple-700 border-b-transparent rounded-full animate-spin"
          style={{ animationDuration: "1.5s" }}
        ></div>

        {/* Inner Semi Circle (counter-clockwise) */}
        <div
          className="absolute w-10 h-10 border-4 border-purple-700 border-t-transparent rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
