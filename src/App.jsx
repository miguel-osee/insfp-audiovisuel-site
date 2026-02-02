import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/LayoutPublic";
import DashboardLayout from "./layouts/LayoutDashboard";

// Pages publiques
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Institut from "./pages/Institut";
import Galerie from "./pages/Galerie";
import Formations from "./pages/Formations";
import FormationDetails from "./pages/FormationDetails";
import Actualites from "./pages/Actualites";
import ActualitesDetails from "./pages/ActualitesDetails";
import LoginStagiaire from "./pages/LoginStagiaire";

// Dashboard stagiaire
import Dashboard from "./pages/DashStagiaire/Index";
import Semestres from "./pages/DashStagiaire/SuiviSemestre";
import Documents from "./pages/DashStagiaire/Documents";
import EmploiDuTemps from "./pages/DashStagiaire/Emploi";
import Profil from "./pages/DashStagiaire/Profil";

export default function App() {
  return (
    <Routes>
      {/* 🌍 Site public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/institut" element={<Institut />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/:slug" element={<FormationDetails />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/actualites/:id" element={<ActualitesDetails />} />
      </Route>

      {/* 🔐 Auth */}
      <Route path="/login-stagiaire" element={<LoginStagiaire />} />

      {/* 🎓 Dashboard stagiaire */}
      <Route path="/DashStagiaire" element={<DashboardLayout />}>
        <Route path="Index" element={<Dashboard />} />
        <Route path="SuiviSemestre" element={<Semestres />} />
        <Route path="Documents" element={<Documents />} />
        <Route path="EmploiDuTemps" element={<EmploiDuTemps />} />
        <Route path="Profil" element={<Profil />} />
      </Route>
    </Routes>
  );
}
