import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-insfp.png";
import Button from "./Buttons.jsx";
import { FaUserGraduate } from "react-icons/fa"; // icône stagiaire

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-background">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          
            <NavLink
              to="/">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo INSFP"
          className="w-auto h-10"
        />

        </NavLink>

        {/* Menu */}
        <ul className="items-center hidden gap-8 text-sm md:flex text-secondary">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/institut"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Institut
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/formations"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Formations
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Actualites"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Actualités
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/galerie"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Galerie
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Bouton connexion avec icône */}
        <Link to="/login-stagiaire" className="hidden md:inline-block">
          <Button>
            <FaUserGraduate className="inline mr-2" />
            Espace stagiaire
          </Button>
        </Link>

        {/* Mobile menu icon */}
        <button className="text-2xl md:hidden text-primary">
          ☰
        </button>
      </nav>
    </header>
  );
}