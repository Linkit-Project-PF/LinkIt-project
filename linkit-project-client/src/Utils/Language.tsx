import { useTranslation } from "react-i18next"
import axios from "axios"
import argFlag from "../assets/ar.svg"
import usFlag from "../assets/us.svg"

import "./language.css"
export default function Language() {
  const {i18n} = useTranslation("global")
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: any = axios.get('https://cdn.simplelocalize.io/public/v1/countries')
    console.log('data', data)
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }
  return (
    <>
    <input onChange={handleClick} type="checkbox" id="checkbox" /><label className="switch" htmlFor="checkbox">
      <div className="arg-flag">
      <img src={usFlag} alt="" className="bi bi-mic-mute-fill" />
      </div>
      <div className="us-flag">
      <img src={argFlag} alt="" className="bi bi-mic-fill" />
      </div>
    </label>
    </>

  )
}
