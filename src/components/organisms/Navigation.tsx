import logo from "../../assets/logo.svg";
import { ROUTES } from "../../core/const";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../molecules/LanguageSwitcher";

const Navigation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate(ROUTES.LOGIN);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              {t("dashboard.Title")}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-md font-medium transition-colors text-red-500 cursor-pointer hover:text-red-600"
            >
              {t("dashboard.Logout")}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
