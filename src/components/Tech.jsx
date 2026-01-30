import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ technology, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="group"
  >
    <div className="bg-tertiary border border-transparent hover:border-accent rounded-xl p-6 h-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-card hover:bg-black-200">
      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />
      </div>
      <p className="text-secondary font-semibold text-center text-[14px]">
        {technology.name}
      </p>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I Work With</p>
        <h2 className={styles.sectionHeadText}>Skills & Tools.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-justify text-[16px] max-w-4xl leading-[28px]"
      >
        I specialize in modern web technologies and frameworks that help build
        scalable, efficient, and user-friendly applications. Here are the tools
        and technologies I use regularly.
      </motion.p>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
