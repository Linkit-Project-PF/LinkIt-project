import { useTranslation } from "react-i18next";
import PhotosCarousel from "../../../../Utils/photosCarousel/photosCarousel";
import teamMembers from "../../../../Utils/TeamMembers.json"
import { Link } from "react-router-dom";
export default function ModuloG() {
    const { t } = useTranslation();

    return (
        <div className="relative grid p-[7%] z-[10] bg-white dark:bg-linkIt-300">
            <h1 className="text-black dark:text-white titles-size font-manrope font-bold text-center justify-self-center">{t('Conoce a alguno de los integrantes de nuestro equipo')}</h1>
            <div className="hidden lg:block">
                <div className="grid grid-cols-4 grid-rows-1 items-center justify-items-center my-[5%] gap-[5%] mx-[5%] dark:text-white" >
                    <img src="/people-LinkIt/philo-perfil.png" className="bg-linkIt-500 rounded-xl w-1/1 h-1/1" alt="Philipe Saint-Hubert" />
                    <img src="/people-LinkIt/ary-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1" alt="Ary Molchadsky" />
                    <img src="/people-LinkIt/gonza-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1" alt="Gonzalo Lein" />
                    <img src="/people-LinkIt/juli-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1" alt="Julieta Jasin" />
                    <Link target="_blank" to="https://www.linkedin.com/in/philippesainthubert/" className="text-center font-bold subtitles-size font-montserrat">Philippe Saint-Hubert <br /><span className="font-normal text-size  font-montserrat">CMO & Co-Founder</span></Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/arymolchadsky/" className="text-center font-bold subtitles-size font-montserrat">Ary Molchadsky<br /><span className="font-normal text-size  font-montserrat">CEO & Co-Founder</span></Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/gonzalo-leon-744aa01a1/" className="text-center font-bold subtitles-size font-montserrat">Gonzalo Leon<br /><span className="font-normal text-size  font-montserrat">Sales Development Representative</span></Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/julieta-clara-26b207296/" className="text-center font-bold subtitles-size font-montserrat">Julieta Jasin<br /><span className="font-normal text-size  font-montserrat">Talent Acquisition Specialist</span></Link>
                </div>
                <div className="grid grid-cols-3 justify-items-center px-[18%] dark:text-white gap-[5%]">
                    <img src="/people-LinkIt/shay-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1" alt="Shayna Iskandarani" />
                    <img src="/people-LinkIt/maca-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1" alt="Macarena Cuadro" />
                    <img src="/people-LinkIt/ju-perfil.png" className=" bg-linkIt-500 rounded-xl w-1/1 h-1/1" alt="Julieta Radicich" />
                    <Link target="_blank" to="https://www.linkedin.com/in/shayna-iskandarani-126270211/" className="text-center subtitles-size font-bold font-montserrat">Shayna Iskandarani<br /><span className="font-normal text-size  font-montserrat">Talent Acquisition Specialist</span></Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/macarena-cuadro/" className="text-center subtitles-size font-bold font-montserrat">Macarena Cuadro<br /><span className="font-normal text-size  font-montserrat">Business Development Specialist</span></Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/julietaradicich/" className="text-center subtitles-size font-bold font-montserrat">Julieta Radicich<br /><span className="font-normal text-size  font-montserrat">Growth Marketing Specialist</span></Link>
                </div>
            </div>
            <div className="lg:hidden">
                <PhotosCarousel arrayOfMembers={teamMembers} bgColor="gray" />
            </div>
        </div>
    )
}