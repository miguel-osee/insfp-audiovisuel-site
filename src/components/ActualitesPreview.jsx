import actualitesData from "../data/actualitesData";
import ActualiteCard from "./ActualitesCard";
import { Link } from "react-router-dom";

export default function ActualitesPreview() {
  return (
    <section className="container mt-14">
      <h2 className="text-2xl font-semibold text-center">
        Dernières actualités
      </h2>

      <h3 className="mb-8 text-xl text-center">
        Découvrez nos actualités phares
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {actualitesData.slice(0, 3).map((actu) => (
          <ActualiteCard
            key={actu.id}
            id={actu.id}
            titre={actu.titre}
            date={actu.date}
            sousTitre={actu.sousTitre}
            image={actu.image}
          />
        ))}
      </div>

      <div className="text-center mt-14">
        <Link to="/actualites" className="font-semibold text-primary">
          Lire toutes les actualités →
        </Link>
      </div>
    </section>
  );
}
