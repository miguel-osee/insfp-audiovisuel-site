import logo from "../assets/images/logo-insfp1.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white p-6  flex justify-cente  ">
      <div className="container  grid grid-cols-1 md:grid-cols-3  text-sm gap-5">
        
        {/* Bloc logo + infos */}
        <div>
          <img src={logo} alt="Logo INSFP" className="h-8 w-auto mb-2" />
          <p>Dimanche – Jeudi | 08h00 – 16h00</p>
          <p className="text-xs mt-1">
            © 2026 INSFP Audiovisuel Echahid Ahmed Mehdi – Tous droits réservés
          </p>
        </div>

        {/* Liens rapides réduits */}
        <div className="md:ml-48">
          <h4 className="font-semibold mb-2 text-primary ">Liens rapides</h4>
          <ul className="space-y-1">
            <li><Link to="/formations">Formations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login-stagiaire">Connexion stagiaire</Link></li>
          </ul>
        </div>

        {/* Réseaux sociaux avec noms */}
        <div className="md:ml-48">
          <h4 className="font-semibold mb-2 text-primary ">Réseaux sociaux</h4>
          <ul className="space-y-1">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <FaFacebook className="hover:text-blue-500 transition" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <FaYoutube className="hover:text-red-500 transition" /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}