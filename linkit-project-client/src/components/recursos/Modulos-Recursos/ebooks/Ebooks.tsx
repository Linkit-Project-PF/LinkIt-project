import EbooksCards from "./ebooksCards/EbooksCards"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import topLines from '/Vectores/linkit-linea-banner-ebooks-superior.svg'
import topLinesMobile from '/Vectores/M_linkit-linea-banner-ebooks-superior_grueso.svg'
import bottomLinesMobile from '/Vectores/M_linkit-linea-banner-ebooks-inferior_grueso.svg'
import bottomLines from '/Vectores/linkit-linea-banner-ebooks-inferior.svg'
import EbooksCardsMobile from "./ebooksCards/EbooksCardsMobile";


function Ebooks() {
  const navigate = useNavigate()
  const {t} = useTranslation();

  return (
    <div className="bg-linkIt-200 px-[7%] grid justify-items-center relative">
      <div className="relative w-[117%] items-center justify-center flex">
      <img src={topLines} alt="lines" className="absolute w-full h-full top-[0%] hidden lg:block" />
      <img src={topLinesMobile} alt="lines" className="absolute w-full h-full top-[0%] lg:hidden" />
            <h3 className=" titles-size my-[5%] text-white font-bold font-manrope bg-linkIt-200 z-10 px-3">Ebooks</h3>
            </div>
            <div className="hidden lg:block">
        <EbooksCards/>
        </div>
        <div className="lg:hidden">
          <EbooksCardsMobile/>
        </div>
        <div className="relative w-full items-center justify-center flex">
      <img src={bottomLines} alt="lines" className="absolute w-[75%] h-full top-[5%] left-[35%] hidden lg:block" />
      <img src={bottomLinesMobile} alt="lines" className="absolute w-[75%] h-full top-[5%] left-[35%] lg:hidden" />
        <button
        className="background-button bg-white hover:bg-white hover:border-white hover:text-linkIt-200 my-[5%]"
        onClick={()=>navigate("/recursos/libreria")}
        >
          {t('Ver más')}
        </button>
        </div>
    </div>
  )
}

export default Ebooks