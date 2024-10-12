import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

import logo from "../assets/kevinRushLogo.png";
import monCV from "../assets/mon-cv.pdf";


// const Navbar = () => {
//   return ( <nav className="mb-20 flex items-center justify-between py-6">
//     <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10" src={logo} alt="Logo du site" />
//     </div>
//     <div className="m-8 flex items-center justify-center gap-4 text-base">
//        <Link className="hover:text-orange-500 cursor-pointer" to="introduction" smooth={true} duration={1000}>Introduction</Link>
//        <Link className="hover:text-orange-500 cursor-pointer" to="about" smooth={true} duration={1000}>About Me</Link>
//        <Link className="hover:text-orange-500 cursor-pointer" to="techno" smooth={true} duration={1000}>Technologies</Link>
//        <Link className="hover:text-orange-500 cursor-pointer" to="experience" smooth={true} duration={1000}>Experiences</Link>
//        <Link className="hover:text-orange-500 cursor-pointer" to="formation" smooth={true} duration={1000}>Formations</Link>
//        <Link className="hover:text-orange-500 cursor-pointer" to="projects" smooth={true} duration={1000}>Projets</Link>
//        <Link className="hover:text-orange-500 cursor-pointer" to="contact" smooth={true} duration={1000}>Contact</Link>
//     </div>
//   </nav>
// )}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Tablo avec les infos des liens
  const navLinks = [
    {name: "Introduction", to: "introduction"},
    {name: "About Me", to: "about"},
    {name: "Technologies", to: "techno"},
    {name: "Experiences", to: "experience"},
    {name: "Formations", to: "formation"},
    {name: "Projects", to: "projects"},
    {name: "Contact", to: "contact"},
  ];

  // Classe Tailwind réutilisable pour les liens
  const linkClass = "hover:text-orange-500 cursor-pointer";

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Logo du site" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-base">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            className={linkClass}
            to={link.to}
            smooth={true}
            duration={1000}
          >
            {link.name}
          </Link>
        ))}
        <a href={monCV}
        target="blank"
        rel="noopener noreferrer"
        className={linkClass}
        >
          Mon CV
        </a>
      </div>

      {isOpen && (
        <div className="absolute top-16"></div>
      )}
    </nav>
  );
};

export default Navbar;