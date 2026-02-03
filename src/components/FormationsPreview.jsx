import { formations } from "../data/formations";
import FormationCard from "./FormationCard";
import { Link } from "react-router-dom";

export default function FormationsPreview() {
  return (
    <section className="mt-10">
        <div className="container ">
      
      {/* Titre */}
      <h2 className="text-2xl font-semibold text-center ">
        Nos formations
      </h2>

      <h3 className="text-xl text-center mb-8 text-gray-600">
        Découvrez nos formations phares
      </h3>

      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {formations.slice(0, 3).map((formation) => (
          <FormationCard
            key={formation.id}
            titre={formation.titre}
            description={formation.description}
            image={formation.image}
          />
        ))}
      </div>
      </div>

      {/* Lien */}
      <div className="mt-14 text-center">
        <Link
          to="/formations"
          className="text-primary font-semibold hover:underline"
        >
          Voir toutes les formations →
        </Link>
      </div>

    </section>
  );
}
