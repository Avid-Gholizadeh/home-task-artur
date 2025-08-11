import InfoField from "../molecules/InfoField";
import { useQuery } from "@apollo/client";
import { USER } from "../../core/graphql/queries";
import { useTranslation } from "react-i18next";

const InfoCard = () => {
  const { t } = useTranslation();
  const { data, loading } = useQuery(USER);

  return (
    <div className="bg-white rounded-lg p-4 w-[400px] m-auto mt-10 h-fit shadow-lg flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t("dashboard.UserInformation")}</h1>
      <InfoField
        label={t("dashboard.Email")}
        value={data?.user?.email || ""}
        loading={loading}
      />
      <InfoField
        label={t("dashboard.FirstName")}
        value={data?.user?.firstName || ""}
        loading={loading}
      />
      <InfoField
        label={t("dashboard.LastName")}
        value={data?.user?.lastName || ""}
        loading={loading}
      />
    </div>
  );
};

export default InfoCard;
