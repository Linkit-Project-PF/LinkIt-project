import { useTranslation } from "react-i18next";
import PhotosCarousel from "../../../../Utils/photosCarousel/photosCarousel";
import teamMembers from "../../../../Utils/TeamMembers.json"
import { Link } from "react-router-dom";
export default function ModuloG() {
    const { t } = useTranslation();

    return (
        <div className="relative grid p-[7%] z-[10] bg-white dark:bg-linkIt-300">
            <h3 className="text-black dark:text-white titles-size font-manrope font-bold text-center justify-self-center">{t('Conoce a alguno de los integrantes de nuestro equipo')}</h3>
            <div className="hidden lg:block">
                <div className="grid grid-cols-4 items-start justify-items-center my-[5%] gap-[5%] mx-[5%] dark:text-white text-center leading-tight" >
                    <img src="/people-LinkIt/philo-perfil.png" className="bg-linkIt-500 rounded-xl w-1/1 h-1/1 aspect-square" alt="Philipe Saint-Hubert" />
                    <img src="/people-LinkIt/ary-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1 aspect-square" alt="Ary Molchadsky" />
                    <img src="/people-LinkIt/gonza-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1 aspect-square" alt="Gonzalo Lein" />
                    <img src="/people-LinkIt/juli-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1 aspect-square" alt="Julieta Jasin" />

                    <div className="flex flex-col space-y-1">
                    <Link target="_blank" to="https://www.linkedin.com/in/philippesainthubert/" className="text-center font-bold subtitles-size font-montserrat">Philippe Saint-Hubert</Link>
                    <span className="font-normal text-size  font-montserrat">CMO & Co-Founder</span>
                    </div>


                    <div className="flex flex-col space-y-1">
                    <Link target="_blank" to="https://www.linkedin.com/in/arymolchadsky/" className="text-center font-bold subtitles-size font-montserrat">Ary Molchadsky</Link>
                    <span className="font-normal text-size  font-montserrat">CEO & Co-Founder</span>
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                    <Link target="_blank" to="https://www.linkedin.com/in/gonzalo-leon-744aa01a1/" className="text-center font-bold subtitles-size font-montserrat">Gonzalo Leon</Link>
                    <span className="font-normal text-size  font-montserrat">Sales Development Representative</span>
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                    <Link target="_blank" to="https://www.linkedin.com/in/julieta-clara-26b207296/" className="text-center font-bold subtitles-size font-montserrat">Julieta Jasin</Link>
                    <span className="font-normal text-size  font-montserrat">Talent Acquisition Specialist</span>
                    </div>
                
                
                </div>
                <div className="grid grid-cols-3 justify-items-center px-[18%] dark:text-white gap-[5%] items-start text-center leading-tight">
                    <img src="/people-LinkIt/shay-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1 aspect-square" alt="Shayna Iskandarani" />
                    <img src="/people-LinkIt/maca-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1 aspect-square" alt="Macarena Cuadro" />
                    <img src="/people-LinkIt/ju-perfil_b.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1 aspect-square" alt="Julieta Radicich" />

                    <div className="flex flex-col space-y-1">
                    <Link target="_blank" to="https://www.linkedin.com/in/shayna-iskandarani-126270211/" className="text-center subtitles-size font-bold font-montserrat">Shayna Iskandarani</Link>
                    <span className="font-normal text-size  font-montserrat">Talent Acquisition Specialist</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link target="_blank" to="https://www.linkedin.com/in/macarena-cuadro/" className="text-center subtitles-size font-bold font-montserrat">Macarena Cuadro</Link>
                    <span className="font-normal text-size  font-montserrat">Business Development Specialist</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link target="_blank" to="https://www.linkedin.com/in/julietaradicich/" className="text-center subtitles-size font-bold font-montserrat">Julieta Radicich</Link>
                    <span className="font-normal text-size  font-montserrat">Growth Marketing Specialist</span>
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <PhotosCarousel arrayOfMembers={teamMembers} bgColor="gray" />
            </div>
        </div>
    )
}