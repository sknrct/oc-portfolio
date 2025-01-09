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
              Développeur React Node.js
            </span>
            <p className="my-2 max-w-xl py-4 text-lg text-left md:text-left">
              Développeur web frontend avec une appétence pour le backend,
              spécialisé en React et Node.js. Grâce à une solide expérience en
              gestion de projet, design et référencement, j’apporte une vision
              globale et créative aux projets que je mène.
            </p>
            <p className="my-2 max-w-xl text-lg text-left md:text-left">Disponible à partir
              de janvier 2025, je recherche une opportunité sur Nantes et ses
              alentours pour m’investir dans des projets ambitieux et innovants.</p>
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
