import CCLosedPost from "./CClosedPost";
import { ICompanyPost } from "./MyPosts";

interface componentProps {
  posts: ICompanyPost[];
}

export default function CompanyClosedPosts({ posts }: componentProps) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {posts.length ? null : (
        <h1 className="pl-5">No tienes vacantes cerradas ahora</h1>
      )}
      {posts.map((post, index) => (
        <CCLosedPost app={post} key={index} />
      ))}
    </div>
  );
}
