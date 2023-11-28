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
      <div className="mic-on">
      <img src={usFlag} alt="" className="bi bi-mic-mute-fill" />
      </div>
      <div className="mic-off">
      <img src={argFlag} alt="" className="bi bi-mic-fill" />

        {/* <svg xmlns={argFlag} width="24" height="24" fill="currentColor" className="bi bi-mic-mute-fill" viewBox="0 0 16 16"> <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"></path> <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"></path> </svg> */}
      </div>
    </label>
    </>

  )
}
