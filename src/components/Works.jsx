import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Portfolio</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-justify text-[16px] max-w-4xl leading-[28px]"
      >
        Here are some of my recent projects showcasing my skills in full-stack
        development, modern web technologies, and problem-solving abilities.
        Each project demonstrates my ability to work with different tech stacks
        and deliver scalable solutions.
      </motion.p>

      {/* Main Carousel */}
      <div className="mt-16 w-full">
        <motion.div
          key={currentIndex}
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="bg-tertiary rounded-3xl overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden group">
              <img
                src={currentProject.image}
                alt={currentProject.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex justify-center items-center">
                <button
                  onClick={() =>
                    window.open(currentProject.source_code_link, "_blank")
                  }
                  className="w-16 h-16 rounded-full bg-accent opacity-0 group-hover:opacity-100 flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-accent-dark"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-between bg-white">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-accent font-bold text-sm">
                    Project {currentIndex + 1} of {projects.length}
                  </span>
                </div>
                <h3 className="text-[#14213D] font-bold text-[32px] mb-4">
                  {currentProject.name}
                </h3>
                <p className="text-secondary text-[16px] leading-[28px] mb-8">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-[#14213D] font-semibold text-[14px] uppercase mb-3">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={`${currentProject.name}-${tag.name}`}
                        className="text-[13px] px-4 py-2 rounded-full bg-E5E5E5 text-accent font-semibold border border-accent"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    window.open(currentProject.source_code_link, "_blank")
                  }
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  <img src={github} alt="GitHub" className="w-5 h-5 invert" />
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="w-12 h-12 rounded-full bg-accent hover:bg-accent-dark text-white font-bold flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous project"
          >
            ←
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-3 justify-center flex-1 mx-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-tertiary w-3 hover:bg-secondary"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="w-12 h-12 rounded-full bg-accent hover:bg-accent-dark text-white font-bold flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next project"
          >
            →
          </button>
        </div>

        {/* Projects Counter */}
        <div className="mt-8 text-center">
          <p className="text-secondary text-[14px] font-semibold">
            Showing project{" "}
            <span className="text-accent font-bold">{currentIndex + 1}</span> of{" "}
            <span className="text-accent font-bold">{projects.length}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
