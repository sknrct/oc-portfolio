import { INTRO_CONTENT } from "../constants";
import porfilePic from "../assets/thibaultProfile.webp";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Fonction de configuration des animations avec un délai
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Introduction = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Jouer l'animation une seule fois au chargement de la page
  useEffect(() => {
    setHasAnimated(true); // L'animation se déclenche une fois
  }, []);

  return (
    <div className="border-b border-neutral-900 py-24 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              className="pb-10 text-6xl tracking-tight lg:mt-16 lg:text-8xl"
            >
              Thibault Garda
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Développeur Web
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              className="my-2 max-w-xl py-6 tracking-tighter text-base"
            >
              {INTRO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              src={porfilePic}
              alt="Une photo de profil"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
