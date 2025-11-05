import {useState, useEffect} from 'react';
import {animateScroll as scroll} from "react-scroll";
import { FaCircleArrowUp } from "react-icons/fa6";


const BacktToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Affichage du bouton
    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Remonter en haut de la page
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: true,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                onClick={scrollToTop}
                className='fixed bottom-4 right-4 z-50 p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 shadow-lg text-2xl'
                >
                    <FaCircleArrowUp />
                </button>
            )}
        </div>
    );
};

export default BacktToTop;