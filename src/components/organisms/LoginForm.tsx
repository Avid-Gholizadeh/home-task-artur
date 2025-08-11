import { useForm } from "react-hook-form";
import TextFeild from "../molecules/TextFeild";
import Button from "../atoms/Button";
import logo from "../../assets/logo.svg";
import type { IFormValues } from "../../core/types/FormValues";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { LOGIN } from "../../core/graphql/mutations";
import { useMutation } from "@apollo/client";
import { ROUTES } from "../../core/const";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../core/services/storage.services";

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { loading }] = useMutation(LOGIN);

  const onSubmit = async (data: IFormValues) => {
    const { email, password } = data;
    toast.loading(t("auth.LoginLoading"), { id: "login-loading" });
    try {
      const { data } = await login({
        variables: { email: email, password },
      });
      const accessToken = data?.login?.jwt;
      if (accessToken) {
        setItem("access_token", accessToken);
        toast.success(t("auth.LoginSuccess"), { id: "login-success" });
        navigate(ROUTES.DASHBOARD);
      }
    } catch (error) {
      toast.error(t("auth.LoginError"), { id: "login-error" });
    } finally {
      toast.dismiss("login-loading");
    }
  };

  return (
    <div className="p-6">
      <div className="w-full">
        <div>
          <div className="mb-8">
            <img src={logo} alt="Logo" className="w-18 h-18" />
          </div>
          <h1 className="text-4xl font-bold text-[#525252] text-center mb-2">
            {t("auth.LoginTitle")}
          </h1>
          <p className="text-[#525252] mb-8">{t("auth.LoginDesc")}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <TextFeild
            label={t("auth.Email")}
            register={register}
            name="email"
            required={{
              value: true,
              message: t("auth.EmailRequired"),
            }}
            errors={errors}
            placeholder="mail@abc.com"
            type="email"
          />
          <TextFeild
            label={t("auth.Password")}
            register={register}
            name="password"
            required={{
              value: true,
              message: t("auth.PasswordRequired"),
            }}
            errors={errors}
            placeholder={t("auth.PasswordPlaceholder")}
            type="password"
          />
          <Button text={t("auth.Login")} type="submit" disabled={loading} />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
