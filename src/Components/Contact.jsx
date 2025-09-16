import { CONTACT } from "../constants";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1
       
        className="my-10 text-center text-4xl"
      >
        Contactez moi !
      </h1>
      <div className="text-center tracking-tighter">
        <a href="mailto:thibault.boucardgarda@gmail.com" className="border-b ">
          {CONTACT.email}
        </a>
        <div className="flex justify-center space-x-3 mt-5">
          <a href="https://www.linkedin.com/in/thibault-boucard-garda/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl" />
          </a>
          <a href="https://github.com/sknrct" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
