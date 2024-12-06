import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT, CONTACT } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import monCV from "../assets/mon-cv.pdf";

library.add(faEnvelope, faDownload);

const highlightClass = "text-orange-500 font-bold";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about-section">
      <h2 className="my-20 text-center text-4xl">
        A propos
        <span className="text-orange-500"> de moi</span>
      </h2>
      {/* <div className="flex flex-wrap items-center"> */}
      {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="Une photo de moi"
            />
          </div>
        </div> */}
      <div className="w-full">
        <div className="flex justify-center">
          <p className="my-2 max-w-7xl py-6 text-lg text-left md:text-left mx-auto">
            Je suis un développeur frontend{" "}
            <span className={highlightClass}>passionné et autodidacte</span>,
            avec un parcours en communication et design qui me rend{" "}
            <span className={highlightClass}>polyvalent</span>. Après un master
            en communication, je suis revenu au développement, mes premiers
            amours. J'ai d'abord découvert des langages comme{" "}
            <span className={highlightClass}>React et JavaScript</span>, ainsi
            que le backend avec{" "}
            <span className={highlightClass}>NodeJS et Express</span>. Je prends{" "}
            <span className={highlightClass}>
              {" "}
              plaisir à relever des défis techniques{" "}
            </span>{" "}
            tout en apportant une attention particulière aux détails et à l'UX.
            Mon parcours atypique me permet de combiner l’aspect technique avec
            un vrai souci du design et de l’
            <span className={highlightClass}>efficacité</span>. En-dehors du
            code, je suis passionné par la photo, la vidéo et les sports
            mécaniques.
          </p>
        </div>
        <div className="mx-auto py-12 gap-5 flex justify-center lg:py-24">
            <a
              href="mailto:thibault.boucardgarda@gmail.com"
              className="inline-block bg-orange-500 text-white px-5 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300 text-l"
            >
              <FontAwesomeIcon icon="envelope" className="mr-2 leading-none" />
              Contactez moi
            </a>
          </div>
      </div>
    </div>
    // </div>
  );
};

export default About;
