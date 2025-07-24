"use client";
import ProjectCard from "./ProjectCard";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SIZE = {
  foreground: "scale-110 z-10",
  background: "scale-90 opacity-60 z-0",
};

const ProjectCarousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goLeft = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const getDisplayProjects = () => {
    const left = (activeIndex - 1 + projects.length) % projects.length;
    const right = (activeIndex + 1) % projects.length;
    return [
      { ...projects[left], position: "left" },
      { ...projects[activeIndex], position: "center" },
      { ...projects[right], position: "right" },
    ];
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center py-8">
      <button
        onClick={goLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow hover:bg-gray-100 z-20 text-black"
      >
        ←
      </button>

      <div className="flex justify-center items-center w-full gap-4 relative">
        {getDisplayProjects().map((project, index) => {
          let positionClass = "";
          if (project.position === "center") {
            positionClass = SIZE.foreground;
          } else {
            positionClass = SIZE.background;
          }

          return (
            <motion.div
              key={index}
              className={`transition-all duration-500 transform ${positionClass}`}
              style={{ width: "300px", flexShrink: 0 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={goRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow hover:bg-gray-100 z-20 text-black"
      >
        →
      </button>
    </div>
  );
};

export default ProjectCarousel;