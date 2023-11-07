import "./NavBar.css"
import Logo from "/Linkit-logo/linkit-logos-web_4-logo-horizontal-azul.svg"
import { NavLink, useNavigate } from "react-router-dom"

function NavBar() {
    const navigate = useNavigate()

    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa")
    }
    const goSoyTalento = () => {
        navigate("/SoyTalento")
    }
    return (
        <div>
        <div className="preNavbar">
            <span className="">Contrata y gestiona talentos de forma global con LinkIt | </span>
            <span className="ml-2">Comienza ahora! →</span>
            </div>
        <nav className="sticky top-0 bg-linkIt-50 h-[63px] flex">
        <img src={Logo} alt="" className="relative bottom-12 h-40 left-24"/>
        <div className="flex absolute right-44 top-2 items-center justify-center space-x-20 text-xl font-montserrat font-semibold">
        <NavLink className="hover:border-b-4 hover:border-linkIt-300" to='/'>Home</NavLink>
        <NavLink className="hover:border-b-4 hover:border-linkIt-300" to='/soyEmpresa'>Soy Empresa</NavLink>
        <NavLink className="hover:border-b-4 hover:border-linkIt-300" to='/soyTalento'>Soy Talento</NavLink>
        <NavLink className="hover:border-b-4 hover:border-linkIt-300" to='/recursos'>Recursos</NavLink>
        <NavLink className="hover:border-b-4 hover:border-linkIt-300" to='/quienesSomos'>Quiénes Somos</NavLink>
        <span className=" font-medium">Inglés</span>
        <button className="bg-linkIt-300 rounded-lg p-2 text-white font-medium shadow-md active:translate-y-1" onClick={()=> goSoyEmpresa()}>Contrata Talento</button>
        <button className="border-linkIt-300 border rounded-lg p-2 font-medium shadow-sm active:translate-y-1" onClick={()=> goSoyTalento()}>Vacantes disponibles</button>
        </div>
        </nav>
</div>
    )
}

export default NavBar