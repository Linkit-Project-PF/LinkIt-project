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
        <div className="flex flex-col pl-3 bg-white rounded-md h-56 2xl:h-72 w-52 2xl:w-72 px-5">
            <img className="w-1/3" src={testimonio.rating} alt="" />
            <h1 className="relative bottom-3 font-bold text-xs 2xl:text-sm">{testimonio.titulo}</h1>
            <p className="relative text-[65%] 2xl:text-[85%] font-medium w-full h-28 bottom-3 mb-3 ">{testimonio.testimonio}</p>
            <img className='relative bottom-2 2xl:top-3 rounded-[100%] w-6'  src={testimonio.foto} alt="" />
            <h2 className='relative bottom-8 2xl:bottom-3 text-sm left-7 '>{testimonio.nombre}</h2>
        </div>
    )
} 