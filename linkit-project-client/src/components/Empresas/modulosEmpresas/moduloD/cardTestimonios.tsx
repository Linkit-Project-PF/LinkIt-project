import { useTranslation } from "react-i18next";
import {motion} from "framer-motion"
type CardTestimoniosProps = {
    id: number;
    titleEn: string;
    testimonial: string;
    rating: string;
    titulo: string;
    testimonio: string;
    foto: string;
    nombre: string;

}

export default function CardTestionios (testimonio: CardTestimoniosProps) {

    const { i18n } = useTranslation();
  const { language } = i18n;
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: Math.random() * 0.5,
          ease: "easeOut",
        }} className="grid px-[10%] w-[10rem] xs:w-[13rem] ssm:w-[15rem] sm:w-[19rem] lg:w-fit bg-white rounded-md">
            <img className="w-1/3 my-[5%]" src={testimonio.rating} alt="" />
            <strong className=" font-montserrat text-[0.7rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem]">{language === "en" ? testimonio.titleEn : testimonio.titulo}</strong>
            <p className="font-medium font-montserrat text-[0.6rem] ssm:text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.9rem]">{language === "en" ? testimonio.testimonial : testimonio.testimonio}</p>
            <div className="flex my-3 items-center">
            <img className='rounded-full w-1/12 mr-2'  src={testimonio.foto} alt="" />
            <p className='text-[0.6rem] ssm:text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.9rem] '>{testimonio.nombre}</p>
            </div>
        </motion.div>
    )
} 
