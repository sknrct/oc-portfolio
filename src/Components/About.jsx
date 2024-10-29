import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Pour jouer l'animation une seule fois lors du premier rendu
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const { top, bottom } = aboutSection.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier si l'élément est visible au chargement

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4" id="about-section">
      <h2 className="my-20 text-center text-4xl">
        A propos
        <span className="text-orange-500"> de moi</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="Une photo de moi" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg text-center md:text-left">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
