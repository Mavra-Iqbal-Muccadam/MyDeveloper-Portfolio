import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[2px] rounded-[16px] bg-gradient-to-r from-accent to-accent-dark"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[14px] py-6 px-8 min-h-[240px] flex justify-between items-center flex-col hover:shadow-card transition-shadow"
      >
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
          <img
            src={icon}
            alt="web-development"
            className="w-12 h-12 object-contain"
          />
        </div>

        <h3 className="text-white text-[18px] font-bold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get To Know Me</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-justify text-[16px]  leading-[28px]"
      >
        I'm a skilled full-stack developer with expertise in React, Node.js, and
        modern web technologies. I specialize in building scalable,
        user-friendly applications that solve real-world problems. With a strong
        foundation in TypeScript and JavaScript, I create efficient solutions by
        collaborating closely with clients and teams. Passionate about clean
        code and continuous learning.
      </motion.p>

      {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
