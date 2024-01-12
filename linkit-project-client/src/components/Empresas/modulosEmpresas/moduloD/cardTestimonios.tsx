type CardTestimoniosProps = {
    id: number;
    rating: string;
    titulo: string;
    testimonio: string;
    foto: string;
    nombre: string;
}

export default function CardTestionios (testimonio: CardTestimoniosProps) {
    return (
        <div className="grid px-[10%] w-[10rem] xs:w-[13rem] ssm:w-[15rem] sm:w-[19rem] lg:w-fit bg-white rounded-md">
            <img className="w-1/3 -mb-3" src={testimonio.rating} alt="" />
            <h1 className="font-bold font-montserrat text-[0.7rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem]">{testimonio.titulo}</h1>
            <p className="font-medium font-montserrat text-[0.6rem] ssm:text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.9rem]">{testimonio.testimonio}</p>
            <div className="flex my-3 items-center">
            <img className='rounded-full w-1/12 mr-2'  src={testimonio.foto} alt="" />
            <p className='text-[0.6rem] ssm:text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.9rem] '>{testimonio.nombre}</p>
            </div>
        </div>
    )
} 