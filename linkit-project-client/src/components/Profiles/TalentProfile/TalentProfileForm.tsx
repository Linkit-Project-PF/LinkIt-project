import { FunctionComponent, useEffect, useState } from "react";
import CloudinaryUploadWidget from "../../Services/cloudinaryWidget";
import { EnglishLevelEnum, IUser } from "../types";
import { editUser } from "../api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/AuthSlice";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import axios from "axios";

//TODO Select on Technologies and countries.

interface IComponentProps {
  user: IUser;
}

const TalentForm: FunctionComponent<IComponentProps> = ({ user }) => {
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState("");
  const [cv, setCv] = useState(user.cv);
  const [englishLevel, setEnglishLevel] = useState(user.englishLevel);
  const [technologies, setTechnologies] = useState(user.technologies);
  const [country, setCountry] = useState(user.country);
  const [linkedin, setLinkedin] = useState(user.linkedin);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://linkit-server.onrender.com/resources/countries"
      );
      const countries = data.map((country: any) => country.name);
      setCountries(countries);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const newUser = {
        ...user,
        firstName,
        lastName,
        linkedin,
        country,
        technologies,
        englishLevel,
        cv,
      };

      const updatedUser = await editUser(newUser);
      console.log(updatedUser);
      if (updatedUser.code >= 200 && updatedUser.code < 400) {
        dispatch(setUser(updatedUser.data));
        Swal.fire({
          title: t("Datos actualizados"), //!
          icon: "success",
        });
      } else {
        //TODO Here show the error.
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  function handleDiscard() {
    window.location.reload();
  }

  const { t } = useTranslation();

  return (
    <div className="bg-linkIt-500 mx-5 p-10 rounded-[20px] md:mx-10 md:p-20 md:pb-10">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
          <div className="flex flex-col">
            <label className="ml-2">{t("Nombre")}</label>
            <input
              defaultValue={user.firstName}
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 md:w-[24rem] h-[2.75rem] rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2">{t("Apellido")}</label>
            <input
              defaultValue={user.lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 md:w-[24rem] h-[2.75rem] rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2">{t("Email")}</label>
            <input
              defaultValue={user.email}
              className="bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 md:w-[24rem] h-[2.75rem] rounded-[10px] text-linkIt-400 text-opacity-80 hover:cursor-not-allowed"
              type="text"
              disabled
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2">{t("País")}</label>
            <input
              defaultValue={user.country}
              onChange={(event) => setCountry(event.target.value)}
              className="flex border-[.125rem] border-linkIt-400 bg-transparent px-[1rem] md:w-[24rem] h-[2.75rem] rounded-[10px]"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2">{t("Perfil de LinkedIn")}</label>
            <input
              defaultValue={user.linkedin}
              onChange={(event) => setLinkedin(event.target.value)}
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 md:w-[24rem] h-[2.75rem] rounded-[10px]"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2">{t("Stack tecnológico")}</label>
            <input
              defaultValue={user.technologies.join(", ")}
              onChange={(event) =>
                setTechnologies(event.target.value.split(","))
              }
              className="border-[.125rem] border-linkIt-400 bg-transparent pl-[1rem] md:w-[24rem] h-[2.75rem] rounded-[10px]"
              placeholder={t("Stack tecnológico")}
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2">{t("Nivel de Ingles")}</label>
            <select
              onChange={(event) =>
                setEnglishLevel(event.target.value as EnglishLevelEnum)
              }
              defaultValue={user.englishLevel}
              className="border-[.125rem] border-linkIt-400 bg-transparent pl-[1rem] md:w-[24rem] h-[2.75rem] rounded-[10px]"
            >
              <option value={EnglishLevelEnum.LOW}>{t("Bajo")}</option>
              <option value={EnglishLevelEnum.MEDIUM}>{t("Medio")}</option>
              <option value={EnglishLevelEnum.HIGH}>{t("Alto")}</option>
              <option value={EnglishLevelEnum.BILINGUAL}>
                {t("Bilingue")}
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="ml-2">{t("Carga tu CV")}</label>
            <CloudinaryUploadWidget
              className="flex items-center justify-between bg-transparent px-[1rem] border-[.125rem] border-linkIt-400 md:w-[24rem] h-[2.75rem] rounded-[10px] cursor-pointer"
              setFilePublicId={setCv}
              setFileName={setFileName}
            >
              {fileName ? (
                fileName
              ) : (
                <>
                  <span className="font-[500] text-opacity-80 text-linkIt-400">
                    {t("Subir")}
                  </span>
                </>
              )}
              <img className="w-6" src="/Vectores/upload-circle.svg" alt="" />
            </CloudinaryUploadWidget>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-8 gap-5">
          <button
            className="text-linkIt-400 border-[.125rem] border-linkIt-300 bg-white font-montserrat font-[500] hover:border-linkIt-200 w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid"
            type="button"
            onClick={handleDiscard}
          >
            {t("Descartar")}
          </button>
          <button
            type="submit"
            className="text-white border-[.125rem] border-linkIt-300 bg-linkIt-300 font-montserrat font-[500] hover:border-linkIt-200 w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid"
          >
            {t("Guardar")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TalentForm;
