import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Ajout pour la navigation

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/TBG.svg";
import monCV from "../assets/mon-cv.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Projets", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const linkClass =
    "hover:text-orange-500 cursor-pointer text-white text-xl";
  const navClassIcon =
    "hover:text-orange-500 cursor-pointer text-white text-2xl";

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { section } });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      document
        .getElementById("introduction")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="py-6 bg-transparent z-50" id="navbar">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img
            className="mx-2 w-16 cursor-pointer"
            src={logo}
            alt="Logo du site"
            onClick={handleLogoClick}
          />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 text-base mx-auto">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className={linkClass}
              onClick={() => handleNavigation(link.to)}
            >
              {link.name}
            </button>
          ))}
          <a
            href={monCV}
            target="blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Mon CV
          </a>
        </div>
        <div className="flex gap-4">
            <a href="https://github.com/sknrct" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={navClassIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/thibault-boucard-garda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={navClassIcon} />
            </a>
            <a
              href="mailto:thibault.boucardgarda@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className={navClassIcon} />
            </a>
            <a
            href="/oc-portfolio/ajouter"
            target="blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Ajouter
          </a>
          </div>

        {/* Burger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-white" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute border-orange-500 border-2 top-16 left-0 right-0 rounded-xl bg-neutral-950 z-50 shadow-md p-4 flex flex-col items-center space-y-4 transform transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {navLinks.map((link, index) => (
          <button
            key={index}
            className={linkClass}
            onClick={() => {
              handleNavigation(link.to);
              setIsOpen(false);
            }}
          >
            {link.name}
          </button>
        ))}
        <a
          href={monCV}
          target="blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Mon CV
        </a>
        <div className="flex gap-4">
            <a href="https://github.com/sknrct" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={navClassIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/thibault-boucard-garda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={navClassIcon} />
            </a>
            <a
              href="mailto:thibault.boucardgarda@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className={navClassIcon} />
            </a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
