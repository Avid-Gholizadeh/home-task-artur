import LoginForm from "../organisms/LoginForm";
import loginBg from "../../assets/login-bg.svg";
import LanguageSwitcher from "../molecules/LanguageSwitcher";

const LoginCard = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-7xl overflow-hidden rounded-[34px] border-8 border-white shadow-lg">
      <div className="w-full max-sm:hidden bg-white h-64 sm:h-auto">
        <img src={loginBg} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <div className="w-full min-w-[470px] bg-white  sm:w-1/2 flex justify-center items-center p-4 sm:p-6 relative">
        <LanguageSwitcher className="absolute top-4 right-4" />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginCard;
