import "./Blogs.css";
import BlogsCards from "./blogs-cards/BlogsCards";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Blogs() {
  const navigate = useNavigate();
  const {t} = useTranslation()
  return (
    <div className="p-[7%] flex flex-col justify-center justify-items-center">
        <h1 className="mb-[5%] font-manrope font-bold text-[0.9rem] xs:text-[1.2rem] ssm:text-[2rem] xl:text-[2.5rem] text-center">¿Quieres saber que está pasando <br className="lg:hidden" /> en el mundo IT?</h1>
      <BlogsCards />
      <div className="flex justify-center mt-[5%]">
      <button 
      className="background-button justify-self-center "
      onClick={()=>navigate("/recursos/libreria")}
      >
        {t('Ver más')}
      </button>
      </div>
    </div>
  );
}

export default Blogs;
