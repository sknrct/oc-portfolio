import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom"; // Ajout pour la navigation
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

  const linkClass = "hover:text-orange-500 cursor-pointer text-white";

  // Renvoie sur la section cliqué
  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { section } });
    }
  };

  // Clic sur le logo
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Si déjà sur la page d'accueil, scroller vers le haut
      document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Sinon, rediriger vers la page d'accueil
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 py-6 bg-transparent z-50" id="navbar">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="mx-2 w-16 cursor-pointer"
            src={logo}
            alt="Logo du site"
            onClick={handleLogoClick} // Ajout de l'action au clic sur le logo
          />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 text-base">
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
            className="hover:text-orange-500 cursor-pointer text-white"
          >
            Mon CV
          </a>
        </div>

        {/* Burger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6 text-white" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute border-orange-500 border-2 top-16 left-0 right-0 rounded-xl bg-neutral-950 z-50 shadow-md p-4 flex flex-col items-center space-y-4 transform transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden `}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
