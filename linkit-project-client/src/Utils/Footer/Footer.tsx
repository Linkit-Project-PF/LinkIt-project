import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3 gap-4">

        <div className="flex flex-col">
          <img className="w-[75%] ml-[10%]" src="/Linkit-logo/linkit-logos-web_2-logo-ppal-blanco.svg" alt="" />
          <div className="ml-[10%]">
            <h1 className="font-semibold my-1">Link IT</h1>
            <p className="w-full">Conectando al talento mas destacado con los mejores proyectos IT</p>
            <div className="flex flex-row flex-wrap">
              <img className="w-[10%]" src="/Vectores/linkit-web-vectores-12.svg" alt="" />
              <img className="w-[10%]" src="/Vectores/linkit-web-vectores-13.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-[8%] pr-[10%]">
          <ul className="flex justify-between">

            <div>
              <li className="font-semibold">Empresa</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline"> Cómo funciona </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline">Casos de exito </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline">Ingresar</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline">Login</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold">Talento</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline"> FAQ </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Login </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Blog </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold">Recursos</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline"> Blogs </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Ebooks </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Eventos </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold">Quiénes Somos</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline"> Misión </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Visión </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Valores e historia </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Talento interno </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold">Vacantes</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline"> Desarrolladores </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Tester  </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Infraestructura</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Datos </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Sap </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> Ciberseguridad </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <br />
                <br />
                <li>
                  <NavLink to='' className="hover:underline"> En Chile</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> En Colombia </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> En España </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline"> En LATAM </NavLink>
                </li>
              </ul>
            </div>
          </ul>
          <div className="flex justify-evenly font-semibold mt-[18%]">
            <p>
              <NavLink to='' className="hover:underline"> ©2023 | Todos los derecchos reservados</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline"> Politica de Privacidad</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline"> Terminos y condiciones</NavLink>
            </p>
          </div>
        </div>
      </div >
      <br />
      <hr />
      <br />
    </div >
  )
}
