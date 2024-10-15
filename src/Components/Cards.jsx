import { PROJECTS } from "../constants";

const Cards = ({ image, title, subtitle, link, technologies }) => {
  return (
    <a href={link} className="m-4 block max-w-sm overflow-hidden rounded-lg mb-6">
      <div className="relative">
        <img src={image} alt={title} />
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-base font-medium">{subtitle}</p>
          
          {/* Pour afficher les technologies en tant que tags */}
          <div className="flex flex-wrap gap-2">  {/* Ajout d'un wrapper flex et gap */}
            {technologies.map((technologies, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1
                          text-sm font-medium text-orange-500"
              >
                {technologies}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Cards;
