import { useTranslation } from "react-i18next";
 import devTeam from "../../../../Utils/devTeam.json"
import PhotosCarousel from "../../../../Utils/photosCarousel/photosCarousel";
 export default function ModuloH() { 
const {t} = useTranslation();

    return (
        <div className="relative bg-linkIt-500 grid p-[7%] z-20">
        <h1 className=" text-[0.8rem] ssm:text-[1rem] sm:text-[1rem] md:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] font-bold font-manrope text-center"> {t('Conoce a nuestros desarrolladores')}</h1>
        <div className="hidden lg:block">
        <div className="grid grid-cols-4 justify-items-center gap-5 my-[5%]">
                    <img src="/people-LinkIt/samuel-henry.png" className="bg-white rounded-xl w-full h-full" alt="Samuel-Rodriguez" />
                    <img src="/people-LinkIt/maria-gabriela-henry.png" className="bg-white rounded-xl w-full h-full" alt="Maria-Gabriela-Sandigo" />
                    <img src="/people-LinkIt/jose-henry.png" className="bg-white rounded-xl w-full h-full" alt="Jose-Lozano" />
                    <img src="/people-LinkIt/Juan-Henry.png" className="bg-white rounded-xl w-full h-full" alt="Juan-Velez" />
                    <p className="text-center font-bold xl:text-[1.2rem] font-montserrat">Samuel Rodríguez <br /><span className="font-normal xl:text-[1.1rem]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold xl:text-[1.2rem] font-montserrat">Maria Gabriela Sándigo <br /><span className="font-normal xl:text-[1.1rem]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold xl:text-[1.2rem] font-montserrat">José Lozano <br /><span className="font-normal xl:text-[1.1rem]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold xl:text-[1.2rem] font-montserrat">Juan Vélez <br /><span className="font-normal xl:text-[1.1rem]  font-montserrat">FullStack Web Developer</span></p>
                    </div>
                    <div className="grid grid-cols-3 justify-items-center px-[12%] gap-5">
                    <img src="/people-LinkIt/edwar-henry.png" className="bg-white rounded-xl w-full h-full" alt="Edwar-Jimenez" />
                    <img src="/people-LinkIt/mateo-henry.png" className="bg-white rounded-xl w-full h-full" alt="Mateo-Guerrero" />
                    <img src="/people-LinkIt/carolina-henry.png" className="bg-white rounded-xl w-full h-full" alt="Carolina-Tobar" />
                    <p className="text-center font-bold xl:text-[1.2rem] font-montserrat">Edwar Jimenez <br /><span className="font-normal xl:text-[1.1rem]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold xl:text-[1.2rem] font-montserrat">Mateo Guerrero <br /><span className="font-normal xl:text-[1.1rem]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center font-bold xl:text-[1.2rem] font-montserrat">Carolina Tobar <br /><span className="font-normal xl:text-[1.1rem]  font-montserrat">Scrum Master</span></p>
                    </div>
                    </div>
                    <div className="lg:hidden">
                <PhotosCarousel arrayOfMembers={devTeam} bgColor={"white"}/>
            </div>
        </div>
    ) }