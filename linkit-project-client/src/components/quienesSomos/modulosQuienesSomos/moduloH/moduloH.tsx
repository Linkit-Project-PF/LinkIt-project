import { useTranslation } from "react-i18next";
 import devTeam from "../../../../Utils/devTeam.json"
import PhotosCarousel from "../../../../Utils/photosCarousel/photosCarousel";
import { Link } from "react-router-dom";
 export default function ModuloH() { 
const {t} = useTranslation();

    return (
        <div className="relative bg-linkIt-500 dark:bg-linkIt-200 grid p-[7%] z-20 dark:text-white">
        <h1 className=" titles-size titles-size font-manrope font-bold text-center justify-self-center"> {t('Conoce a nuestros desarrolladores')}</h1>
        <div className="hidden lg:block">
        <div className="grid grid-cols-4 justify-items-center my-[5%] gap-[5%] mx-[5%] items-start text-center leading-tight">
                    <img src="/people-LinkIt/Samuel-Rodriguez.png" className="bg-white rounded-xl w-1/1 h-1/1 aspect-square" alt="Samuel-Rodriguez" />
                    <img src="/people-LinkIt/maria-gabriela-henry.png" className="bg-white rounded-xl w-1/1 h-1/1 aspect-square" alt="Maria-Gabriela-Sandigo" />
                    <img src="/people-LinkIt/jose-henry.png" className="bg-white rounded-xl w-1/1 h-1/1 aspect-square" alt="Jose-Lozano" />
                    <img src="/people-LinkIt/Juan-Henry.png" className="bg-white rounded-xl w-1/1 h-1/1 aspect-square" alt="Juan-Velez" />

                    <div className="flex flex-col space-y-1">
                    <Link to="https://www.linkedin.com/in/samuelrodriguezyopasa/" target="_blank" className="text-center font-bold subtitles-size font-montserrat">Samuel Rodríguez</Link>
                    <span className="font-normal text-size  font-montserrat">FullStack Web Developer</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link to="http://www.linkedin.com/in/maria-gabriela-sandigo-munoz" target="_blank" className="text-center font-bold subtitles-size font-montserrat">Maria Gabriela Sándigo </Link>
                    <span className="font-normal text-size  font-montserrat">FullStack Web Developer</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link to="https://www.linkedin.com/in/joselozanodev/" target="_blank" className="text-center font-bold subtitles-size font-montserrat">José Lozano </Link>
                    <span className="font-normal text-size  font-montserrat">FullStack Web Developer</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link to="https://www.linkedin.com/in/juandavidbedoyavelez/" target="_blank" className="text-center font-bold subtitles-size font-montserrat">Juan Vélez </Link>
                    <span className="font-normal text-size  font-montserrat">FullStack Web Developer</span>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 justify-items-center px-[18%] gap-[5%] items-start text-center leading-tight">
                    <img src="/people-LinkIt/edwar-henry.png" className="bg-white rounded-xl w-1/1 h-1/1 aspect-square" alt="Edwar-Jimenez" />
                    <img src="/people-LinkIt/mateo-henry.png" className="bg-white rounded-xl w-1/1 h-1/1 aspect-square" alt="Mateo-Guerrero" />
                    <img src="/people-LinkIt/carolina-henry.png" className="bg-white rounded-xl w-1/1 h-1/1 aspect-square" alt="Carolina-Tobar" />
                    <div className="flex flex-col space-y-1">
                    <Link to="https://www.linkedin.com/in/jimenzeddi/" target="_blank" className="text-center font-bold subtitles-size font-montserrat">Edwar Jimenez </Link>
                    <span className="font-normal text-size  font-montserrat">FullStack Web Developer</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link to="https://www.linkedin.com/in/mateoguerreroe/" target="_blank" className="text-center font-bold subtitles-size font-montserrat">Mateo Guerrero </Link>
                    <span className="font-normal text-size  font-montserrat">FullStack Web Developer</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link to="https://www.linkedin.com/in/carolina-tobar-jaramillo" target="_blank" className="text-center font-bold subtitles-size font-montserrat">Carolina Tobar </Link>
                    <span className="font-normal text-size  font-montserrat">Scrum Master</span>
                    </div>
                    </div>
                    </div>
                    <div className="lg:hidden">
                <PhotosCarousel arrayOfMembers={devTeam} bgColor={"white"}/>
            </div>
        </div>
    ) }