import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3 gap-1 mx-1">

        <div className="flex flex-col">
          <img className="w-[75%] ml-[10%]" src="/Linkit-logo/linkit-logos-web_2-logo-ppal-blanco.svg" alt="" />
          <div className="ml-[10%]">
            <h1 className="font-semibold my-1">Link IT</h1>
            <p className="w-full text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">Conectando al talento mas destacado con los mejores proyectos IT</p>
            <div className="flex flex-row flex-wrap">
              <img className="w-[10%]" src="/Vectores/linkit-web-vectores-12.svg" alt="" />
              <img className="w-[10%]" src="/Vectores/linkit-web-vectores-13.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-[8%] pr-[10%]">
          <ul className="flex justify-between">

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mr-2 md:mx-0">Empresa</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Cómo funciona </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">Casos de exito </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">Ingresar</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">Login</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">Talento</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> FAQ </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Login </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Blog </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">Recursos</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Blogs </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Ebooks </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Eventos </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">Quiénes Somos</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Misión </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Visión </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Valores e historia </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Talento interno </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">Vacantes</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Desarrolladores </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Tester  </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Infraestructura</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Datos </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Sap </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Ciberseguridad </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex">
              <ul className="flex flex-col">
                <br />
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> En Chile</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> En Colombia </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> En España </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> En LATAM </NavLink>
                </li>
              </ul>
            </div>
          </ul>
          <div className="flex justify-evenly font-semibold lg:mt-20 xl:mt-32 2xl:mt-60">
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> ©2023 | Todos los derechos reservados</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Politica de Privacidad</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Terminos y condiciones</NavLink>
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
