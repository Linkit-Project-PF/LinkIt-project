import tecnologies from "../../../../Utils/technologies.json"
import CardTech from "./CardTech/CardTech"

interface Technology {
    name: string;
    logo: string;
}

export default function ModuloG() {
    return (
        <div>
            <h1 className="flex justify-center text-5xl font-bold mt-20">Talento especializado en más de 100 tecnologías</h1>
            <div className=" flex  flex-row flex-wrap justify-center items-center p-12 mx-56">
                {
                    tecnologies.map(({ name, logo }: Technology) => {
                        return (
                            <CardTech
                                name={name}
                                logo={logo}
                            />
                        )
                    })
                }
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-linkIt-300 rounded-lg p-2 h-10 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out mb-2 px-12">Conoce más</button>
            </div>
        </div>
    )
}
