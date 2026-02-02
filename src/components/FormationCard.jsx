import { Link } from "react-router-dom";

export default function FormationCard({ slug, titre, description, image }) {
  return (
    <Link to={`/formations/${slug}`} className="block group">
      <div
        className="overflow-hidden transition-all duration-300 ease-out bg-white shadow-sm rounded-xl group-hover:shadow-lg group-hover:-translate-y-1"
      >
        {/* Image – chargement immédiat */}
        <img
          src={image}
          alt={titre}
          className="object-cover w-full h-48 transition-transform duration-300 ease-out group-hover:scale-105"
        />

        {/* Contenu */}
        <div className="p-6">
          <h3
            className="text-lg font-semibold transition-colors duration-300 text-secondary group-hover:text-primary"
          >
            {titre}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          <span
            className="inline-flex items-center gap-2 mt-5 text-sm font-semibold transition-all duration-300 text-primary group-hover:gap-3"
          >
            Voir plus
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
