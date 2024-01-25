import EbooksCards from "./ebooksCards/EbooksCards"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import topLines from '/Vectores/linkit-linea-banner-ebooks-superior.svg'
import bottomLines from '/Vectores/linkit-linea-banner-ebooks-inferior.svg'


function Ebooks() {
  const navigate = useNavigate()
  const {t} = useTranslation();

  return (
    <div className="bg-linkIt-200 px-[7%] grid justify-items-center relative">
      <div className="relative w-[117%] items-center justify-center flex">
      <img src={topLines} alt="lines" className="absolute w-full h-full top-[0%]" />
            <h1 className=" text-[1.4rem] xs:text-[2rem] ssm:text-[2.5rem] lg:text-[3rem] my-[5%] text-white font-bold font-manrope bg-linkIt-200 z-10 px-3">Ebooks</h1>
            </div>
        <EbooksCards/>
        <div className="relative w-full items-center justify-center flex">
      <img src={bottomLines} alt="lines" className="absolute w-[75%] h-full top-[5%] left-[35%]" />
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