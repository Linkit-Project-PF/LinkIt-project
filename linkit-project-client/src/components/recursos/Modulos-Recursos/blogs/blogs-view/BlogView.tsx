import Newsletter from "../../../../../Utils/newsletter/newsletter";
import BlogSidebar from "./blog-sidebar/BlogSidebar";
import BlogInfo from "./blogInfo/BlogInfo";

export default function BlogView() {
  return (
    <div>
    <div className="p-[7%] flex pt-[17vh] lg:pt-[23vh] dark:bg-linkIt-200 ">
            <BlogInfo />
            <div className="hidden lg:block">
            <BlogSidebar />
            </div>
    </div>
        <Newsletter />
    </div>
  );
}
