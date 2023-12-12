import { useTranslation } from "react-i18next"

import "./language.css"
import { useState } from "react"
export default function Language() {
  const [enLang, setEnLang] = useState(false)
  const [esLang, setEsLang] = useState(true)
  const {i18n} = useTranslation("global")
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
    if(i18n.language === "en") setEnLang(true)
    else setEnLang(false)
  if(i18n.language === "es") setEsLang(true)
  else setEsLang(false)
  }
  return (
    <>
    <input onChange={handleClick} type="checkbox" id="checkbox" /><label className="switch" htmlFor="checkbox">
      <div className="en-lang">
      <p className={enLang ? 'text-linkIt-300' : ''}>EN</p>
      </div>
      <span>|</span>
      <div className="es-lang">
      <p className={esLang ? 'text-linkIt-300' : ''}>ES</p>
      </div>
    </label>
    </>
  )
}
