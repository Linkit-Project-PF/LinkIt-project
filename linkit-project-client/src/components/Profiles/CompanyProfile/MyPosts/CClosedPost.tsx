import { useTranslation } from "react-i18next";
import { ICompanyPost } from "./MyPosts";

interface componentProps {
  app: ICompanyPost;
}

export default function CCLosedPost({ app }: componentProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center right-[3.5rem]">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div
            className={`w-5 h-5 ${
              app.Status.includes("Won") ? "bg-green-300" : "bg-red-300"
            } rounded-full`}
          ></div>
        </div>
        <div>
          <h3 className="text-lg font-bold">{app["Role Name"]}</h3>
          <p className="text-gray-500">
            {t("Fecha de creación")}: {app.created}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <p className="text-gray-500 mt-2 sm:mt-0">
          {app.Status.includes("Won") ? t("Finalizada") : t("Cerrada")}
        </p>
      </div>
    </div>
  );
}
