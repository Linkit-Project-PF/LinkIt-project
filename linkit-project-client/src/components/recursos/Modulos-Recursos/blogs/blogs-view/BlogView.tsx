import Footer from "../../../../../Utils/Footer/Footer";
import BlogSidebar from "./blog-sidebar/BlogSidebar";
import BlogInfo from "./blogInfo/BlogInfo";


export default function BlogView() {

  return (
    <>

    <article>
      <section className="mb-[6%]">
        <div className="flex flex-row justify-between">
        <BlogInfo />
        <BlogSidebar />
        </div>
      </section>
      <section className="bg-linkIt-300 text-white font-bold flex flex-row justify-center items-center h-[50vh]">
        <h3>NEWSLETTER</h3>
      </section>
      <footer>
        <Footer />
      </footer>
    </article>
    </>
  );
}
