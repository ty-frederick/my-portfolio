"use client";
import projects from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16 bg-gray-100">
      <img
        src="/profile.jpg"
        alt="Photo of Ty Frederick"
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover mb-6 shadow-md"
      />
      
      <div className="max-w-2xl w-full text-center px-4">
        <h1 className="text-3xl sm:text-4x1 font-bold text-gray-900 mb-3 sm:mb-4">
          Ty Frederick
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
          Aspiring Aerospace Engineer • Problem Solver • Scholar
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
          Welcome to my personal portfolio! I'm passionate about engineering, design, and building real-world solutions.
          Here you’ll find my resume, personal projects, and links to things I’ve worked on.
        </p>
        
        {/* Buttons */}
        <div className="flex  flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href="/Ty_Frederick_Resume.pdf"
            className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-xl transition w-60 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="/about"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-xl transition w-60 text-center"
          >
            Get to know me
          </a>
          <a
            href="https://www.linkedin.com/in/ty-frederick-02862a32b"
            className="bg-stone-600 hover:bg-stone-700 text-white px-6 py-2 rounded-xl transition w-60 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <ProjectCarousel projects={projects} />
      </div>
    </main>
  );
}