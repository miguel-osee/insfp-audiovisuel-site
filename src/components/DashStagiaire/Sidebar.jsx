import logo from "../../assets/images/logo-insfp.png";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FolderOpen,
  Calendar,
  User,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    {
      label: "Tableau de bord",
      icon: LayoutDashboard,
      to: "/DashStagiaire/Index"
    },
    {
      label: "Suivi des semestres",
      icon: BookOpen,
      to: "/DashStagiaire/SuiviSemestre"
    },
    {
      label: "Documents",
      icon: FolderOpen,
      to: "/DashStagiaire/Documents"
    },
    {
      label: "Emploi du temps",
      icon: Calendar,
      to: "/DashStagiaire/EmploiDuTemps"
    },
    {
      label: "Profil",
      icon: User,
      to: "/DashStagiaire/Profil"
    }
  ];

  const logout = () => {
    localStorage.removeItem("stagiaire");
    window.location.href = "/login-stagiaire";
  };

  return (
    <aside className="fixed top-0 left-0 z-40 flex flex-col w-16 h-screen bg-white border-r border-gray-200 md:w-64">

      {/* ===== Header avec logo ===== */}
      <NavLink
        to="/DashStagiaire/Index"
        className="flex items-center justify-center gap-3 px-4 py-5 border-b border-gray-200 md:justify-start md:px-6"
      >
        <img
          src={logo}
          alt="Logo INSFP Audiovisuel"
          className="object-contain h-8 md:h-10"
        />
      </NavLink>

      {/* ===== Menu ===== */}
      <nav className="flex-1 px-2 py-6 space-y-3 overflow-y-auto md:px-4">
        {menu.map((item, i) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={i}
              to={item.to}
              title={item.label}
              className={({ isActive }) =>
                `
                flex items-center justify-center md:justify-start
                gap-0 md:gap-3
                px-3 md:px-4 py-2
                text-sm
                transition-transform duration-200
                ${
                  isActive
                    ? "text-primary font-semibold scale-105"
                    : "text-gray-600 hover:text-primary hover:scale-105"
                }
                `
              }
            >
              <Icon size={20} />
              <span className="hidden md:inline">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* ===== Logout ===== */}
      <div className="px-2 py-4 border-t border-gray-200 md:px-4">
        <button
          onClick={logout}
          title="Déconnexion"
          className="flex items-center justify-center w-full gap-0 px-3 py-2 text-sm text-gray-600 transition-transform duration-200 md:justify-start md:gap-3 md:px-4 hover:text-primary hover:scale-105"
        >
          <LogOut size={20} />
          <span className="hidden md:inline">
            Déconnexion
          </span>
        </button>
      </div>

    </aside>
  );
}
