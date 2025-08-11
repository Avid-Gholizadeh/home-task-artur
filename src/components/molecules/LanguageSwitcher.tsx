import Select from "../atoms/Select";
import Option from "../atoms/Option";
import { LANGUAGES } from "../../core/const";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Select
        value={i18n.language}
        onChange={(e) => {
          const lang = LANGUAGES.find((lang) => lang.value === e.target.value);
          if (lang) {
            handleChangeLanguage(lang.value);
          }
        }}
      >
        {LANGUAGES.map((lang) => (
          <Option key={lang.value} value={lang.value}>
            {lang.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
