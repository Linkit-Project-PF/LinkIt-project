import { useTranslation } from "react-i18next"
import "./language.css"
import { useEffect } from "react"

export default function Language() {
  const {i18n} = useTranslation("global")

  useEffect(() => {
    sessionStorage.setItem('lang', i18n.language)
  }, [i18n.language])

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }
  return (
    <>
    <input onChange={handleClick} type="checkbox" id="checkbox" /><label className="switch" htmlFor="checkbox">
      <div className="en-lang">
      <p className={i18n.language === 'en' ? 'text-linkIt-300' : ''}>EN</p>
      </div>
      <span>|</span>
      <div className="es-lang">
      <p className={i18n.language === 'es' ? 'text-linkIt-300' : ''}>ES</p>
      </div>
    </label>
    </>
  )
}
