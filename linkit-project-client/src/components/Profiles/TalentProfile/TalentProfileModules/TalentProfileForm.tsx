import { FunctionComponent, useState } from "react";
import CloudinaryUploadWidget from "../../../Services/cloudinaryWidget"
import { EnglishLevelEnum, IUser } from "../../types";
import { editUser } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { setUser } from "../../../../redux/features/AuthSlice";
import { useTranslation } from "react-i18next";


interface IComponentProps {
  user: IUser
}

const TalentForm: FunctionComponent<IComponentProps> = ({user}) => {
  const dispatch = useDispatch()
  const {token} = useSelector((state: RootState) => state.Authentication)
  const [fileName, setFileName] = useState("")
  const [cv, setCv] = useState("")
  const [englishLevel, setEnglishLevel] = useState(user.englishLevel)
  const [technologies, setTechnologies] = useState(user.technologies)
  const [country, setCountry] = useState(user.country)
  const [linkedin, setLinkedin] = useState(user.linkedin)
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.lastName)


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      
      if (!token) throw new Error("No token provided")

      const newUser = {
        ...user,
        name,
        email,
        linkedin,
        country,
        technologies,
        englishLevel,
        cv
      }

      const updatedUser = await editUser(newUser)
      dispatch(setUser(updatedUser))
      
    } catch (error) {
      console.log(error) 
    }

  }
  const {t} = useTranslation()

  return (
    <div className="flex justify-center items-center content-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] min-h-[30vh] min-w-[90%] mt-[20%] bg-linkIt-500 p-[3rem] rounded-[20px]">

      <form action="" onSubmit={handleSubmit} className="flex flex-col">
        <div className=" grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-3 font-montserrat">
          
          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">{t("Nombre")}</label>
            <input
              defaultValue={user.firstName}
              onChange={(event) => setName(event.target.value)}
              type="text"
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
              />
            </div>

          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">{t("Apellido")}</label>
            <input
              defaultValue={user.lastName}
              onChange={(event) => setName(event.target.value)}
              type="text"
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">{t("Email corporativo")}</label>
            <input
              defaultValue={user.email}
              onChange={(event) => setEmail(event.target.value)}
              className="stext-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">{t("País")}</label>
            <input
              defaultValue={user.country}
              onChange={(event) => setCountry(event.target.value)}
              className="flex border-[.125rem] border-linkIt-400 bg-transparent px-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]"
              type="text"
              />
          </div>
            
          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">{t("Perfil de LinkedIn")}</label>
            <input
              defaultValue={user.linkedin}
              onChange={(event) => setLinkedin(event.target.value)}
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]" 
              type="text"
            />
          </div>

          <div className="flex flex-col">
          <label htmlFor="" className="ml-2">{t("Stack tecnológico")}</label>
            <input
              defaultValue={user.technologies}
              onChange={(event) => setTechnologies(event.target.value.split(","))}
              className="border-[.125rem] border-linkIt-400 bg-transparent pl-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]"
            />
          </div>

          <div className="flex flex-col">
            <select
              onChange={(event) => setEnglishLevel(event.target.value as EnglishLevelEnum)}
              defaultValue={user.englishLevel}
              className="border-[.125rem] border-linkIt-400 bg-transparent pl-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]"
              >
              <option disabled value="">Nivel de ingles</option>
              <option value={EnglishLevelEnum.LOW}>{t('Bajo')}</option>
              <option value={EnglishLevelEnum.MEDIUM}>{t('Medio')}</option>
              <option value={EnglishLevelEnum.HIGH}>{t('Alto')}</option>
              <option value={EnglishLevelEnum.BILINGUAL}>{t('Bilingue')}</option>
            </select>
          </div>

          <CloudinaryUploadWidget
            className="flex items-center justify-between bg-transparent px-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px] cursor-pointer"
            setFilePublicId={setCv}
            setFileName={setFileName}
          >
            {fileName ? fileName : (
              <>
                <span className="font-[500] text-opacity-80 text-linkIt-400">
                  {t('Carga tu CV')}
                </span>
              </>
            )}
            <img className="w-6" src="/Vectores/upload-circle.svg" alt="" />
          </CloudinaryUploadWidget>
        </div>

        <div className="flex flex-row justify-self-end place-self-end mt-8 gap-2"> 
          <button className="text-linkIt-400 border-[.125rem] border-linkIt-300 bg-white font-montserrat font-[500] hover:border-linkIt-200 w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid">{t('Descartar cambios')}</button>
          <button
            type="submit"
            className="text-white border-[.125rem] border-linkIt-300 bg-linkIt-300 font-montserrat font-[500] hover:border-linkIt-200 w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid"
          >
            {t('Guardar cambios')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TalentForm;