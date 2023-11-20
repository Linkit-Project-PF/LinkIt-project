import tecnologies from "../../../../Utils/technologies.json"
import CardTech from "./CardTech/CardTech"

interface Technology {
    id: number;
    name: string;
    logo: string;
}

export default function ModuloG() {
    return (
        <div>
            <h1 className="flex justify-center font-bold text-sm m-6 md:text-2xl lg:text-3xl lg:my-12 xl:text-4xl xl:m-16 2xl:text-5xl 2xl:m-24">Talento especializado en más de 100 tecnologías</h1>
            <div className=" flex flex-row flex-wrap justify-center items-center sm:mx-10 sm:my-4 xl:mx-60 ">
                {
                    tecnologies.map(({ name, logo, id }: Technology) => {
                        return (
                            <CardTech
                                key={id}
                                id={id}
                                name={name}
                                logo={logo}
                            />
                        )
                    })
                }
            </div>
            <div className="flex justify-center items-center mb-12">
                <button className="bg-linkIt-300 rounded-lg p-1 h-auto xl:p-2 2xl:px-6 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-xl">Conoce más</button>
            </div>
        </div>
    )
}
