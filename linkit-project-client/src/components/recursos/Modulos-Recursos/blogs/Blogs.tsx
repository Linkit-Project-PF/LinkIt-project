import "./Blogs.css";
import BlogsCards from "./blogs-cards/BlogsCards";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  return (
    <>
      <div className="font-montserrat font-bold text-[2.5rem] text-center">
        <h1 className="mt-[4rem] mb-[4rem]">Descubre más sobre el mundo IT</h1>
      </div>
      <BlogsCards />
      <button 
      className="bg-linkIt-300 text-white font-montserrat border-[0.125rem] hover:bg-white hover:text-linkIt-300 active:bg-linkIt-300 active:text-white border-linkIt-300 w-[7rem] mt-[6.25rem] relative bottom-[2.5rem] left-[45%] p-[0.45rem] rounded-[10px] transition-all duration-300 ease-in-out"
      onClick={()=>navigate("/recursos/libreria")}
      >
        Ver más
      </button>
    </>
  );
}

export default Blogs;
