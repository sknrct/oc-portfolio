import { FORMATIONS } from "../constants";
import { motion } from "framer-motion";

const Formation = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-wrap justify-center">
      <h2 className="my-20 text-center text-4xl w-full">Formations</h2>
      <div className="container mx-auto px-4 py-8 flex flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10">
          {FORMATIONS.map((formation, index) => (
            <div
              key={index}
              className="max-w-md w-full p-6 shadow-lg rounded-lg border-4 border-neutral-800 bg-transparent mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {formation.school} -{" "}
                <span className="text-orange-500">{formation.year}</span>
              </h3>
              <ul className="list-disc list-inside mb-4">
                {formation.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
              <p className="mb-4 to-neutral-400 text-lg">
                {formation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formation;
