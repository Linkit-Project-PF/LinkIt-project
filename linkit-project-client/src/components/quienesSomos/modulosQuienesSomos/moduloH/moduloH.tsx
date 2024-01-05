import { useTranslation } from "react-i18next";
 
 export default function ModuloH() { 
const {t} = useTranslation();

    return (
        <div className="relative bg-linkIt-200 grid  p-[6vw] px-[15vw] gap-[3vw] z-20">
        <h1 className="text-white text-[2.6vw] font-manrope text-center"> {t('Conoce a nuestros desarrolladores')}</h1>
        <div className="grid grid-cols-4 justify-items-center gap-6">
                    <img src="/people-LinkIt/samuel-henry.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh] object-cover" alt="Samuel-Rodriguez" />
                    <img src="/people-LinkIt/maria-gabriela-henry.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh] object-contain" alt="Maria-Gabriela-Sandigo" />
                    <img src="/people-LinkIt/jose-henry.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh] object-cover" alt="Jose-Lozano" />
                    <img src="/people-LinkIt/Juan-Henry.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh] object-cover" alt="Juan-Velez" />
                    <p className="text-center mt-4 text-white font-bold text-[1vw] font-montserrat">Samuel Rodríguez <br /><span className="font-normal text-[0.8vw]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center mt-4 text-white font-bold text-[1vw] font-montserrat">Maria Gabriela Sándigo <br /><span className="font-normal text-[0.8vw]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center mt-4 text-white font-bold text-[1vw] font-montserrat">José Lozano <br /><span className="font-normal text-[0.8vw]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center mt-4 text-white font-bold text-[1vw] font-montserrat">Juan Vélez <br /><span className="font-normal text-[0.8vw]  font-montserrat">FullStack Web Developer</span></p>
                    </div>
                    <div className="grid grid-cols-3 justify-items-center gap-6">
                    <img src="/people-LinkIt/edwar-henry.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh] pr-2 2xl:pr-6 object-fill" alt="Edwar-Jimenez" />
                    <img src="/people-LinkIt/mateo-henry.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh] object-cover" alt="Mateo-Guerrero" />
                    <img src="/people-LinkIt/carolina-henry.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh] object-cover" alt="Carolina-Tobar" />
                    <p className="text-center mt-4 text-white font-bold text-[1vw] font-montserrat">Edwar Jimenez <br /><span className="font-normal text-[0.8vw]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center mt-4 text-white font-bold text-[1vw] font-montserrat">Mateo Guerrero <br /><span className="font-normal text-[0.8vw]  font-montserrat">FullStack Web Developer</span></p>
                    <p className="text-center mt-4 text-white font-bold text-[1vw] font-montserrat">Carolina Tobar <br /><span className="font-normal text-[0.8vw]  font-montserrat">Scrum Master</span></p>
                    </div>
        </div>
    ) }