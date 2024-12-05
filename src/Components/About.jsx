import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Création d'un composant pour ne pas répéter du code et rendre le tout plus maniable
const Highlight = ({ children }) => (
  <Highlight>{children}</Highlight>
);

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about-section">
      <h2 className="my-20 text-center text-4xl">
        A propos
        <span className="text-orange-500"> de moi</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="Une photo de moi"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg text-left md:text-left">
            Je suis un développeur frontend <Highlight>passionné et autodidacte</Highlight>, avec un parcours en communication et design qui me rend <Highlight>polyvalent</Highlight>. Après un master en communication, je suis revenu au développement, mes premiers amours. J'ai d'abord découvert des langages comme <Highlight>React et JavaScript</Highlight>, ainsi que le backend avec <Highlight>NodeJS et Express</Highlight>. Je prends <Highlight>plaisir à relever des défis techniques</Highlight> tout en apportant une attention particulière aux détails et à l'UX. Mon parcours atypique me permet de combiner l’aspect technique avec un vrai souci du design et de l’<Highlight>efficacité</Highlight>. En-dehors du code, je suis passionné par la photo, la vidéo et les sports mécaniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
