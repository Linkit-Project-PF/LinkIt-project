import { useTranslation } from "react-i18next";
import CompanyPost from "./CompanyPost";
import { ICompanyPost } from "./MyPosts";

interface IComponentProps {
  posts: ICompanyPost[];
}

const started = ["Pre-alignment", "Alignment"];
const working = [
  "Sourcing",
  "Recruiter int.",
  "Endorsed",
  "Client int.",
  "Offered",
];
const finish = ["Pending invoice/ contract", "Partial Payment"];
const paused = ["Stalled"];

function CompanyPosts({ posts }: IComponentProps) {
  const filterPostsByStatus = (status: string[]): ICompanyPost[] => {
    return posts.filter((post) => status.includes(post.Status));
  };
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col md:flex-row md:gap-x-4 gap-y-4 justify-evenly">
      <div className="md:w-1/4">
        <div className="bg-gray-50 p-3 rounded">
          <h2 className="font-bold mb-2">{t("Iniciados")}</h2>
          {filterPostsByStatus(started).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="md:w-1/4">
        <div className="bg-gray-50 p-3 rounded">
          <h2 className="font-bold mb-2">{t("En proceso")}</h2>
          {filterPostsByStatus(working).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="md:w-1/4">
        <div className="bg-gray-50 p-3 rounded">
          <h2 className="font-bold mb-2">{t("Finalizando")}</h2>
          {filterPostsByStatus(finish).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="md:w-1/4">
        <div className="bg-gray-50 p-3 rounded">
          <h2 className="font-bold mb-2">{t("En pausa")}</h2>
          {filterPostsByStatus(paused).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyPosts;
