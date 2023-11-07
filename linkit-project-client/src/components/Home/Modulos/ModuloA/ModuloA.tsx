import { useNavigate, NavLink } from "react-router-dom"

export default function ModuloA() {

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }
  const goSoyTalento = () => {
    navigate("/SoyTalento")
  }

  return (
    <div className="grid grid-cols-2 gap-1 p-5 bg-linkIt-50">
      <div className="flex flex-col justify-center p-24">
        <h1 className="text-6xl font-bold ">Conectando al talento más destacado con los mejores proyectos IT</h1>
        <div className="py-8 pr-60">
          <h3 className="text-3xl">Contrata y gestiona al mejor talento de manera global</h3>
        </div>
        <div className="flex">
          <button className="bg-linkIt-300 rounded-lg p-2 text-white font-medium shadow-md active:translate-y-1 m-2" onClick={goSoyEmpresa}>Contrata Talento</button>
          <button className="border-linkIt-300 border rounded-lg p-2 font-medium shadow-sm active:translate-y-1 m-2" onClick={goSoyTalento}>Vacantes disponibles</button>
        </div>
        <div className="flex flex-row items-center">
          <img className="w-1/6" src="/public/vectores/linkit-web-vectores-16.svg" alt="stars" />
          <h4 className="flex font-semibold">4/5 on Truspilot <p className="underline ml-2">Read reviews</p></h4>
        </div>
      </div>

      <div>
        <img className="w-auto" src="/public/vectores/linkit-web-vectores-14.svg" alt="computer with persons" />
      </div>
    </div>
  )
}
