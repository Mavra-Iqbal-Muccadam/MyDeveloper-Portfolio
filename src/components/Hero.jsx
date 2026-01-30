import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mavra-iqbal-ba19b6278/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 7.5H7V18h2.5v-7.5zM8.25 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM18 13.5c0-2.07-1.68-3.75-3.75-3.75-1.01 0-1.93.4-2.6 1.05V10H9.5v8H12v-4c0-1.1.9-2 2-2s2 .9 2 2v4H18v-4.5z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Mavra-Iqbal-Muccadam?tab=repositories",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2.05c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.4-1.27.72-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.46-2.31 1.2-3.12-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.12 0 4.45-2.71 5.43-5.29 5.71.41.36.78 1.06.78 2.14v3.18c0 .31.2.68.8.56A11.5 11.5 0 0 0 12 .5z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:mavra.iqbal@muccadam.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];
  return (
    <section
      className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center`}
    >
      <div
        className={`absolute inset-0 top-[140px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-accent to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>
            Hi, I'm <span className="text-accent">Mavra Iqbal Muccadam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-secondary`}>
            Full Stack Developer | React Specialist{" "}
            <br className="sm:block hidden" />
            Building Modern Web Solutions
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/Mavra_Iqbal_CV.pdf"
              download="Mavra_Iqbal_CV.pdf"
              className="px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-dark transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={link.name === "Email" ? undefined : "noreferrer"}
                className="w-11 h-11 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
