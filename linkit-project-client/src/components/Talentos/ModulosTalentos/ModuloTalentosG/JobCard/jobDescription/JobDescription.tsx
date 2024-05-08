import { useEffect, useState } from "react";
import "./JobDescription.css";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { SUPERADMN_ID } from "../../../../../../env";
import { JobDescriptionProps, State } from "./typesJobs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setFormVisible } from "../../../../../../redux/features/ApplicationSlice";
import Swal from "sweetalert2";
import { setPressLogin } from "../../../../../../redux/features/registerLoginSlice";
import Newsletter from "../../../../../../Utils/newsletter/newsletter";
import blackArrow from "/Vectores/arrowBlackLeft.png";
import whiteArrow from "/Vectores/arrowWhiteLeft.png";
import WhiteLogo from "/Vectores/LinkIt-Logotipo-2024-white.svg";
import BlueLogo from "/Vectores/LinkIt-Logotipo-2024-blue.svg";
import { RootState } from "../../../../../../redux/types";
import Loading from "../../../../../Loading/Loading";
import HTMLReactParser from "html-react-parser";

const SUPERADMN_ID = import.meta.env.VITE_SUPERADMN_ID;

function JobDescription() {
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: State) => state.Authentication.isAuthenticated
  );

  const [jobData, setJobData] = useState<JobDescriptionProps>(
    {} as JobDescriptionProps
  );

  const [loading, isLoading] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();

  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        isLoading(true);
        const response = await axios.get(
          `https://linkit-server.onrender.com/jds/find?code=${id}`,
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        setJobData(response.data[0]);
      } catch (error: any) {
        Swal.fire({ title: "Error", text: error.response.data, icon: "error" });
      } finally {
        isLoading(false);
        window.scrollTo(0, 0);
      }
    };
    fetchJob();
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate("/soyTalento");
  };

  const handleApply = () => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "¡Ups!",
        text: "Debes iniciar sesión para poder aplicar a esta vacante",
        icon: "warning",
        iconColor: "#FBBF24",
        cancelButtonText: "cancelar",
        confirmButtonText: "iniciar sesión",
        showCancelButton: true,
        reverseButtons: true,
        cancelButtonColor: "#173951",
        confirmButtonColor: "#01A28B",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(setPressLogin("visible"));
        }
      });
    } else {
      navigate(`application`);
      dispatch(setFormVisible(true));
    }
  };
  const agregarClasesHTML = (str: string): string => {
    str = str.replace(/<ul>/g, '<ul className="flex flex-col list" style={{ "list-style": "initial" }} >');
    str = str.replace(
      /<li/g,
      '<li className="font-[600] text-size list-item lg:max-w-[70%] dark:text-white"'
    );
    str = str.replace(
      /<p/g,
      '<p className="font-[600] text-size lg:max-w-[70%] dark:text-white"'
    );

    return str;
  };

  const regex = /<.*?>/g;
  const removerEtiquetasHTML = (texto: string): boolean => {
    const textoSinEtiquetas = texto.replace(/<[^>]*>/g, "");
    return /[a-zA-Z0-9]/.test(textoSinEtiquetas);
  };

  return (
    <div className="">
      {loading ? <Loading text={t("Cargando información")} /> : null}
      <article className="font-montserrat text-linkIt-400 dark:bg-linkIt-200 flex flex-col relative p-[7%] pt-[17vh] lg:pt-[23vh]">
        <div className="lg:flex grid relative mb-[10%] w-full">
          <div className="w-full">
            <header className="mb-[3%]">
              <motion.button
                className="flex flex-row gap-[.5rem] items-center content-center mb-[5%] font-bold text-size text-black dark:text-white"
                onClick={handleGoBack}
                whileHover={{ cursor: "pointer", scale: 1.1 }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <img
                  src={isDarkMode ? whiteArrow : blackArrow}
                  alt="back"
                  className="w-[1.5rem]"
                />
                {language === "en" ? "Go back" : "Volver"}
              </motion.button>
              <h3 className="text-black border-[2px] border-linkIt-300 dark:border-linkIt-200 dark:bg-white dark: inline-flex px-2 py-1 text-size font-semibold rounded-[7px] mb-[3%]">
                CODE: {id}
              </h3>
              <h3 className="text-black dark:text-white font-bold titles-size">
                {jobData.title}
              </h3>
            </header>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                {t("Descripción")}
              </h3>
              <p className="font-[600] text-size lg:max-w-[70%] dark:text-white">
                {jobData.description && HTMLReactParser(jobData.description)}
              </p>
            </section>
            {jobData?.aboutUs && (
              <section className="mb-[3%]">
                <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                  {t("Acerca de nosotros")}
                </h3>
                <p className="font-[600] text-size lg:max-w-[70%] dark:text-white">
                  {jobData.aboutUs && HTMLReactParser(jobData.aboutUs)}
                </p>
              </section>
            )}
            {jobData?.aboutClient && (
              <section className="mb-[3%]">
                <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                  {t("Acerca de nuestro cliente")}
                </h3>
                {jobData.aboutClient && HTMLReactParser(agregarClasesHTML(jobData.aboutClient))}
              </section>
            )}
            {jobData.responsabilities?.length > 0 &&
            jobData.responsabilities?.length === 1 &&
            regex.test(jobData.responsabilities[0]) ? (
              <section className="mb-[3%]">
                <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                  {t("Responsabilidades")}
                </h3>
                {HTMLReactParser(
                  agregarClasesHTML(jobData.responsabilities[0])
                )}
              </section>
            ) : (
              <section className="mb-[3%]">
                <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                  {t("Responsabilidades")}
                </h3>
                <ul className="flex flex-col list">
                  {jobData.responsabilities?.map((responsability, index) => {
                    return (
                      <li
                        key={index}
                        className="font-[600] text-size list-item lg:max-w-[70%] dark:text-white"
                      >
                        {responsability}
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
            {jobData.requirements?.length > 0 &&
            jobData.requirements?.length === 1 &&
            regex.test(jobData.requirements[0]) ? (
              <section className="mb-[3%]">
                <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                  {t("Requerimientos")}
                </h3>
                {HTMLReactParser(agregarClasesHTML(jobData.requirements[0]))}
              </section>
            ) : (
              <section className="mb-[3%]">
                <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                  {t("Requerimientos")}
                </h3>
                <ul className="flex flex-col list">
                  {jobData.requirements?.map((requirement, index) => {
                    return (
                      <li
                        key={index}
                        className="font-[600] text-size list-item lg:max-w-[70%] dark:text-white"
                      >
                        {requirement}
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
            {jobData.niceToHave?.length > 0 &&
              jobData.niceToHave?.length === 1 &&
              regex.test(jobData.niceToHave[0]) &&
              removerEtiquetasHTML(jobData.niceToHave[0]) && (
                <section className="mb-[3%]">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                    {t("Deseable")}
                  </h3>
                  {HTMLReactParser(agregarClasesHTML(jobData.niceToHave[0]))}
                </section>
              )}{" "}
            {jobData.niceToHave?.length > 0 &&
              !regex.test(jobData.niceToHave[0]) &&
              /[a-zA-Z0-9]/.test(jobData.niceToHave[0]) && (
                <section className="mb-[3%]">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                    {t("Deseable")}
                  </h3>
                  <ul className="flex flex-col list">
                    {jobData.niceToHave?.map((desirable, index) => {
                      return (
                        <li
                          key={index}
                          className="font-[600] text-size lg:max-w-[70%] dark:text-white list-item"
                        >
                          {desirable}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
            {jobData.benefits?.length > 0 &&
              jobData.benefits?.length === 1 &&
              regex.test(jobData.benefits[0]) &&
              removerEtiquetasHTML(jobData.benefits[0]) && (
                <section className="mb-[3%]">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                    {t("Beneficios")}
                  </h3>
                  {HTMLReactParser(agregarClasesHTML(jobData.benefits[0]))}
                </section>
              )}
            {jobData.benefits?.length > 0 &&
              !regex.test(jobData.benefits[0]) &&
              /[a-zA-Z0-9]/.test(jobData.benefits[0]) && (
                <section className="mb-[3%]">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">
                    {t("Beneficios")}
                  </h3>
                  <ul className="flex flex-col list">
                    {jobData.benefits?.map((benefit, index) => {
                      return (
                        <li
                          key={index}
                          className="font-[600] text-size lg:max-w-[70%] dark:text-white list-item"
                        >
                          {benefit}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
            <section className=" mt-[10%] lg:flex grid content-center items-center justify-items-center lg:max-w-[70%] dark:text-white ">
              <img
                src="/Vectores/complete-form.svg"
                alt="complete-form"
                className="w-[30px] ssm:w-[40px] lg:w-1/16 mr-2 lg:mr-4 hidden lg:block"
              />
              <h3 className="font-bold text-black dark:text-white subtitles-size row-start-1 text-center lg:text-start">
                {t("Para aplicar por favor completa")}{" "}
                {t("el siguiente formulario")}
              </h3>
            </section>
          </div>
          <section className="lg:w-[50%] flex flex-col justify-items-center items-center gap-[1rem]">
            <img
              src={isDarkMode ? WhiteLogo : BlueLogo}
              alt="linkIt-logo"
              className="w-full sticky top-[30%] mb-[20%] hidden lg:block"
            />
            <button
              className="inline-flex relative lg:sticky lg:top-[93%] justify-self-center border border-linkIt-300 text-white bg-linkIt-300 rounded-[7px] p-1 xs:p-1.5 sm:p-2 2xl:p-3 px-1 xs:px-2 text-size whitespace-nowrap hover:bg-linkIt-200 hover:border-linkIt-200 transition-all duration-300 ease-in-out font-bold dark:hover:border-white dark:hover:bg-white dark:hover:text-linkIt-300 cursor-pointer font-manrope"
              onClick={() => handleApply()}
            >
              {t("Aplicar a esta vacante")}
            </button>
          </section>
        </div>
      </article>
      <Newsletter />
    </div>
  );
}

export default JobDescription;
