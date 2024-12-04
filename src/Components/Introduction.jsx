import { INTRO_CONTENT } from "../constants";
import porfilePic from "../assets/thibaultProfile.webp";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Introduction = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="border-b border-neutral-900 py-0 lg:py-24 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-10 pt-10 text-6xl tracking-tight lg:mt-16 lg:text-8xl text-center">
              Thibault Garda
            </h1>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-4xl tracking-tight text-transparent">
              Développeur React Node.js
            </span>
            <p className="my-2 max-w-xl py-6 text-lg text-left md:text-left">
              {INTRO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center flex-wrap">
            <img
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
