import { INTRO_CONTENT, CONTACT } from "../constants";
import porfilePic from "../assets/thibaultProfile.webp";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import monCV from "../assets/mon-cv.pdf";

library.add(faEnvelope, faDownload);

const buttonClass =
  "inline-block bg-orange-500 text-white px-5 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300 text-l";

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
              Développeur Web
            </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-2xl tracking-tight text-transparent">
              En recherche d'un emploi
            </span>
            <p className="my-2 max-w-xl py-4 text-lg text-left md:text-left">
            Je suis à la recherche d’un employeur pour débuter ma carrière en tant que développeur. Formé en développement frontend et backend, je suis autodidacte, curieux et rigoureux. Mon objectif est de devenir un élément moteur pour votre équipe tout en me spécialisant.
            </p>
            <p className="my-2 max-w-xl text-lg text-left md:text-left md:mb-10">Disponible dès maintenant, je recherche une opportunité sur Nantes et la région PACA pour m’investir dans des projets ambitieux et innovants.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex m-auto">
          <div className="flex justify-center flex-wrap">
            <img
              className="rounded-2xl w-3/4"
              src={porfilePic}
              alt="Une photo de profil"
            />
          </div>
        </div>
        <div className="mx-auto pt-12 gap-5 flex lg:pt-24">
          <a
            href="mailto:thibault.boucardgarda@gmail.com"
            className={buttonClass}
          >
            <FontAwesomeIcon icon="envelope" className="mr-2 leading-none" />
            Contactez moi
          </a>
          <a
            href={monCV}
            target="blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <FontAwesomeIcon icon="download" className="mr-2 leading-none" />
            Mon CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
