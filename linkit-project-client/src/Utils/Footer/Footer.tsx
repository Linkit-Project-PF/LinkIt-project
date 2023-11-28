import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} = useTranslation();
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3 gap-1 mx-1">

        <div className="flex flex-col">
          <img className="w-[75%] ml-[10%]" src="/Linkit-logo/linkit-logos-web_2-logo-ppal-blanco.svg" alt="" />
          <div className="ml-[10%]">
            <h1 className="font-semibold my-1">Link IT</h1>
            <p className="w-full text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">{t('Conectando al talento mas destacado con los mejores proyectos IT')}</p>
            <div className="flex flex-row flex-wrap">
              <img className="w-[10%]" src="/Vectores/linkit-web-vectores-12.svg" alt="" />
              <img className="w-[10%]" src="/Vectores/linkit-web-vectores-13.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-[8%] pr-[10%]">
          <ul className="flex justify-between">

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mr-2 md:mx-0">{t('Empresa')}</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Cómo funciona')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">{t('Casos de éxito')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">{t('Ingresar')}</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">Login</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Talento')}</li>
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
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Recursos')}</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Blogs </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Ebooks </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Eventos')} </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Quiénes Somos')}</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">{t('Misión')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Visión')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Valores e historia')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Talento interno')} </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Vacantes')}</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Desarrolladores')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Tester  </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Infraestructura')}</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Datos')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Sap </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Ciberseguridad')} </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex">
              <ul className="flex flex-col">
                <br />
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En Chile')}</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En Colombia')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En España')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En LATAM')} </NavLink>
                </li>
              </ul>
            </div>
          </ul>
          <div className="flex justify-evenly font-semibold lg:mt-20 xl:mt-32 2xl:mt-60">
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> ©2023 | {t('Todos los derechos reservados')}</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Politica de Privacidad')}</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Terminos y condiciones')}</NavLink>
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
