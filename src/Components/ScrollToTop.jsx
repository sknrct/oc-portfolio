import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.section) {
      document.getElementById(state.section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null; // Ce composant ne rend rien
};

export default ScrollToTop;
