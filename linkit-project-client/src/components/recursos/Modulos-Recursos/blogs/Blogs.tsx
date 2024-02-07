import "./Blogs.css";
import BlogsCardsMobile from "./blogs-cards/BlogsCardsMobile";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BlogsCards from "./blogs-cards/BlogsCards";


function Blogs() {
  const navigate = useNavigate();
  const {t} = useTranslation()

  return (
    <div className="p-[7%] flex flex-col justify-center justify-items-center dark:bg-linkIt-400 ">
        <h3 className="mb-[5%] font-manrope font-bold titles-size text-center dark:text-white">{t('¿Quieres saber que está pasando en el mundo IT?')}</h3>
        <div className="lg:hidden"><BlogsCardsMobile /></div>
        <div className="hidden lg:block"><BlogsCards/></div>
      
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
