import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { stagiaires } from "../data/stagiaires";
import bgImage from "../assets/images/login-bg.png";
import logo from "../assets/images/logo-insfp.png";

export default function LoginStagiaire() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const stagiaire = stagiaires.find(
      (s) => s.matricule === matricule && s.password === password
    );

    if (!stagiaire) {
      setError("Matricule ou mot de passe incorrect");
      return;
    }

    localStorage.setItem("stagiaire", JSON.stringify(stagiaire));
    navigate("/DashStagiaire/Index");
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Carte Login */}
      <div
        className="relative z-10 w-full max-w-md p-8 bg-white shadow-xl lg:max-w-lg xl:max-w-xl lg:p-10 xl:p-12 rounded-2xl"
      >
        {/* Logo */}

        <NavLink to="/">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Logo INSFP Audiovisuel"
            className="object-contain h-10 lg:h-14"
          />
        </div>
        </NavLink>

        <h1 className="text-2xl font-bold text-center lg:text-3xl text-primary">
          Espace stagiaire
        </h1>

        <p className="mt-2 text-sm text-center lg:text-base">
          Connexion réservée aux stagiaires admis
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Matricule */}
          <div>
            <label className="block mb-1 text-sm lg:text-base">
              Matricule
            </label>
            <input
              type="text"
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
              placeholder="INSFP-2025-001"
              className="
                w-full px-4 py-2.5 lg:py-3
                text-sm lg:text-base
                border rounded-lg
                focus:outline-none focus:ring-2 focus:ring-primary
              "
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block mb-1 text-sm lg:text-base">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-4 py-2.5 lg:py-3
                text-sm lg:text-base
                border rounded-lg
                focus:outline-none focus:ring-2 focus:ring-primary
              "
              required
            />
          </div>

          {/* Erreur */}
          {error && (
            <p className="text-sm text-center text-red-500">
              {error}
            </p>
          )}

          {/* Bouton */}
          <button
            type="submit"
            className="
              w-full py-2.5 lg:py-3
              text-sm lg:text-base font-medium
              text-white rounded-full
              bg-primary hover:opacity-90 transition
            "
          >
            Se connecter
          </button>
        </form>

        <p className="mt-6 text-sm text-center lg:text-base">
          Mot de passe oublié ? <br />
          Veuillez contacter l’administration.
        </p>
      </div>
    </section>
  );
}
