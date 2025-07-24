"use client";
import React, { useState } from "react";

export default function ProjectCard({ title, description, link, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-72 h-52 rounded-xl p-6 text-white shadow-md transition-all duration-300 ${
        hovered ? "scale-105 z-10" : ""
      } ${color} flex items-center justify-center cursor-pointer relative`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="p-2 text-center">
          <p className="text-sm font-semibold mb-2 break-words">{description}</p>
          <p className="text-xs underline">Click for more info</p>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <h3 className="text-xl font-bold text-center">{title}</h3>
        </div>
      )}
    </a>
  );
}