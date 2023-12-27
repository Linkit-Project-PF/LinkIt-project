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
        <div className="grid grid-col px-[1vw] bg-white rounded-md w-[17vw] 2xl:w-[15vw]">
            <img className="w-[5vw] xl:-mb-[1vh]" src={testimonio.rating} alt="" />
            <h1 className="font-bold text-[0.8vw]">{testimonio.titulo}</h1>
            <p className="font-medium text-[0.7vw]">{testimonio.testimonio}</p>
            <div className="grid grid-cols-2 my-3">
            <img className='rounded-full w-[1.4vw] 2xl:w-[1vw]'  src={testimonio.foto} alt="" />
            <h2 className='-ml-[5.5vw] 2xl:-ml-[5vw] lg:mt-[0.2vh] 2xl:-mt-1 text-[0.8vw]'>{testimonio.nombre}</h2>
            </div>
        </div>
    )
} 