import EbooksCards from "./ebooksCards/EbooksCards"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import topLines from '/Vectores/linkit-linea-banner-ebooks-superior.svg'
import bottomLines from '/Vectores/linkit-linea-banner-ebooks-inferior.svg'


function Ebooks() {
  const navigate = useNavigate()
  const {t} = useTranslation();

  return (
    <div className="bg-linkIt-200 p-[7%] grid justify-items-center relative">
      <div className="relative w-[117%] justify-items-center items-center grid">
      <img src={topLines} alt="lines" className="absolute w-full top-[10%] 1xl:top-0" />
            <h1 className="text-[1.4rem] xs:text-[2rem] ssm:text-[2.5rem] lg:text-[3rem] mb-[5%] text-white font-bold font-manrope bg-linkIt-200 z-10 px-3">Ebooks</h1>
            </div>
        <EbooksCards/>
        <button
        className="background-button bg-white hover:bg-white hover:text-linkIt-200 mt-[5%]"
        onClick={()=>navigate("/recursos/libreria")}
        >
          {t('Ver más')}
        </button>
    </div>
  )
}

export default Ebooks