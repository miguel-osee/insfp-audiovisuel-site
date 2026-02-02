import shape from "../assets/images/about.png";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="container mt-10">
      <div className="flex flex-col items-center justify-between md:flex-row">

        {/* Image animée */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-3/4 md:w-[28rem]"
        >
          <img
            src={shape}
            alt="INSFP Audiovisuel"
            className="object-cover w-full h-auto"
          />
        </motion.div>
        

        {/* Contenu texte */}
        <div className="mt-10 max-w-prose md:mt-0 md:ml-10">
          <p className="leading-relaxed">
            L’Institut National Spécialisé de Formation Professionnelle (INSFP) –
            Centre Audiovisuel d’Ouled Fayet est un établissement public algérien
            placé sous la tutelle du Ministère de la Formation et de l’Enseignement
            Professionnels. Il a pour vocation de former des techniciens spécialisés
            dans les métiers de l’audiovisuel, du multimédia et du développement
            numérique, en réponse aux besoins du marché du travail.
          </p>

          <div className="mt-10">
            <Link
              to="/formations"
              className="font-semibold text-primary hover:underline"
            >
              Voir toutes les formations ➜
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}