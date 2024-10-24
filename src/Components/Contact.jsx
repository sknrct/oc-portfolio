import { CONTACT } from "../constants";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contactons nous !
      </motion.h1>
      <div className="text-center tracking-tighter">
        {/* <motion.p
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.address}</motion.p> */}
        {/* <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.phoneNo}</motion.p> */}
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
