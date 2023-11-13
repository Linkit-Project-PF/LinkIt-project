import tecnologies from "../../../../Utils/technologies.json"
import CardTech from "./CardTech/CardTech"

interface Technology {
    name: string;
    logo: string;
}

export default function ModuloG() {
    return (
        <div>
            <h1 className="flex justify-center text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold">Talento especializado en más <br /> de 100 tecnologías</h1>
            <div className=" flex flex-row flex-wrap justify-center items-center p-12 mx-10 xl:mx-32 2xl:mx-[400px]">
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
            <div className="flex justify-center items-center mb-12">
                <button className="bg-linkIt-300 rounded-[7px] p-2 h-10 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out mb-2 mt-4 px-12">Conoce más</button>
            </div>
        </div>
    )
}
