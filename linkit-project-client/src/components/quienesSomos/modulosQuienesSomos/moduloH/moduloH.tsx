import { useTranslation } from "react-i18next";
 import devTeam from "../../../../Utils/devTeam.json"
import PhotosCarousel from "../../../../Utils/photosCarousel/photosCarousel";
 export default function ModuloH() { 
const {t} = useTranslation();

    return (
        <div className="relative bg-linkIt-500 dark:bg-linkIt-200 grid p-[7%] z-20 dark:text-white">
        <h1 className=" titles-size titles-size font-manrope font-bold text-center justify-self-center"> {t('Conoce a nuestros desarrolladores')}</h1>
        <div className="hidden lg:block">
        <div className="grid grid-cols-4 items-center justify-items-center my-[5%] gap-[5%] mx-[5%]">
                    <img src="/people-LinkIt/Samuel-Rodriguez.png" className="bg-white rounded-xl w-full h-[90%]" alt="Samuel-Rodriguez" />
                    <img src="/people-LinkIt/maria-gabriela-henry.png" className="bg-white rounded-xl w-full  h-[90%]" alt="Maria-Gabriela-Sandigo" />
                    <img src="/people-LinkIt/jose-henry.png" className="bg-white rounded-xl w-full  h-[90%]" alt="Jose-Lozano" />
                    <img src="/people-LinkIt/Juan-Henry.png" className="bg-white rounded-xl w-full  h-[90%]" alt="Juan-Velez" />
                    <p className="text-center font-bold subtitles-size font-montserrat">Samuel Rodríguez <br /><span className="font-normal text-size  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold subtitles-size font-montserrat">Maria Gabriela Sándigo <br /><span className="font-normal text-size  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold subtitles-size font-montserrat">José Lozano <br /><span className="font-normal text-size  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold subtitles-size font-montserrat">Juan Vélez <br /><span className="font-normal text-size  font-montserrat">FullStack Web Developer</span></p>
                    </div>
                    <div className="grid grid-cols-3 justify-items-center px-[18%] gap-[5%]">
                    <img src="/people-LinkIt/edwar-henry.png" className="bg-white rounded-xl w-full  h-[90%]" alt="Edwar-Jimenez" />
                    <img src="/people-LinkIt/mateo-henry.png" className="bg-white rounded-xl w-full  h-[90%]" alt="Mateo-Guerrero" />
                    <img src="/people-LinkIt/carolina-henry.png" className="bg-white rounded-xl w-full  h-[90%]" alt="Carolina-Tobar" />
                    <p className="text-center font-bold subtitles-size font-montserrat">Edwar Jimenez <br /><span className="font-normal text-size  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold subtitles-size font-montserrat">Mateo Guerrero <br /><span className="font-normal text-size  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold subtitles-size font-montserrat">Carolina Tobar <br /><span className="font-normal text-size  font-montserrat">Scrum Master</span></p>
                    </div>
                    </div>
                    <div className="lg:hidden">
                <PhotosCarousel arrayOfMembers={devTeam} bgColor={"white"}/>
            </div>
        </div>
    ) }