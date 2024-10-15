import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { LuFigma } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { name: "React", icon: <RiReactjsLine className="text-7xl text-cyan-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-7xl text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-7xl text-green-500" /> },
  { name: "JavaScript", icon: <RiJavascriptFill className="text-7xl text-yellow-400" /> },
  { name: "Figma", icon: <LuFigma className="text-7xl text-red-500" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-7xl text-sky-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-7xl text-orange-500" /> },
  { name: "CSS3", icon: <IoLogoCss3 className="text-7xl text-blue-500" /> },
];

const Technologies = () => {
  return (
    <div id="techno" className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={iconVariants(2 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-4 border-neutral-800 p-4  hover:border-orange-500"
          >
            {tech.icon}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg group-hover:block">
              {tech.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
