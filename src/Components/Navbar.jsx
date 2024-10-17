import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom"; // Ajout pour la navigation
import logo from "../assets/kevinRushLogo.png";
import monCV from "../assets/mon-cv.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Introduction", to: "introduction" },
    { name: "About Me", to: "about" },
    { name: "Technologies", to: "techno" },
    { name: "Experiences", to: "experience" },
    { name: "Formations", to: "formation" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const linkClass = "hover:text-orange-500 cursor-pointer text-white";

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      // Si on est déjà sur la page d'accueil, on scrolle directement
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Sinon, on redirige vers la page d'accueil et on passe la section à scroll
      navigate("/", { state: { section } });
    }
  };

  return (
    <nav className="sticky top-0 mb-20 flex items-center justify-between py-6 bg-transparent z-50">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Logo du site" />
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
          className="hover:text-orange-500 cursor-pointer"
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

      {/* Overlay pour le menu ouvert */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

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
      </div>
    </nav>
  );
};

export default Navbar;
