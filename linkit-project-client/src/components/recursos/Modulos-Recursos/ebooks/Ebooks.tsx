import EbooksCards from "./ebooksCards/EbooksCards"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";


function Ebooks() {
  const navigate = useNavigate()
  const {t} = useTranslation();

  return (
    <div className="bg-linkIt-200 p-[5rem] xl:p-[3rem] flex flex-col">
        <div className="text-center">
            <h1 className="text-[2.5rem] text-white font-semibold font-montserrat p-[4rem]">{t('Ebooks descargables')}</h1>
        </div>
        <EbooksCards/>
        <button
        className="bg-white border-[1px] border-white text-linkIt-400 font-montserrat font-semibold w-[6rem] p-[.5rem] rounded-[7px] self-center mt-[3rem] hover:bg-linkIt-200 hover:text-white transition-all duration-300 ease-in-out"
        onClick={()=>navigate("/recursos/libreria")}
        >
          {t('Ver más')}
        </button>
    </div>
  )
}

export default Ebooks