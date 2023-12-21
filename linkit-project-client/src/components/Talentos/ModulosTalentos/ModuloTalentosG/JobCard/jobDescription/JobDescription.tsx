import { useEffect, useState } from "react";
import "./JobDescription.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { SUPERADMN_ID } from "../../../../../../env";
import { JobDescriptionProps } from "./typesJobs";
import Footer from "../../../../../../Utils/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setFormVisible } from "../../../../../../redux/features/ApplicationSlice";

function JobDescription() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [jobData, setJobData] = useState<JobDescriptionProps>(
    {} as JobDescriptionProps
  );
  const { i18n } = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      const response = await axios.get(
        `https://linkit-server.onrender.com/jds/find?code=${id}`,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
          },
        }
      );
      setJobData(response.data[0]);
    };
    fetchJob();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate("/soyTalento");
  }

  return (
    <>
      <article className="mt-[10rem] mx-[5%] font-montserrat text-linkIt-400 flex flex-col relative">
        <div className="flex flex-row relative mb-[10%] w-full">
          <div className="w-full">
            <header className="mb-[3%]">
                <motion.button
                className="flex flex-row gap-[.5rem] items-center content-center mb-[5%] font-bold text-[1rem]"
                onClick={handleGoBack}
                whileHover={{cursor: 'pointer', scale: 1.1}}
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                >
                    <img
                        src="/Vectores/left-arrow.svg"
                        alt="back"
                        className="w-[1.5rem]"
                    />
                    {
                        language === 'en'
                        ?"volver"
                        :"Go back"
                    }
                </motion.button>
              <h2 className="text-black border-[2px] border-linkIt-300 inline-flex px-[.6rem] py-[.2rem] font-semibold rounded-[8px] mb-[3%]">
                CODE: {id}
              </h2>
              <h1 className="text-black font-bold text-4xl">{jobData.title}</h1>
            </header>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">
                Descripción
              </h3>
              <p className="font-[600] max-w-[50%]">{jobData.description}</p>
            </section>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">
                Acerca de nosotros
              </h3>
              <p className="font-[600] max-w-[50%]">{jobData.aboutUs}</p>
            </section>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">
                Acerca de nuestro cliente
              </h3>
              <p className="font-[600] max-w-[50%]">{jobData.aboutClient}</p>
            </section>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">
                Responsabilidades
              </h3>
              <p className="font-[600] max-w-[50%]">
                {jobData.responsabilities}
              </p>
            </section>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">
                Requerimientos
              </h3>
              <ul className="flex flex-col list">
                {jobData.requirements?.map((requirement, index) => {
                  return (
                    <li
                      key={index}
                      className="font-[600] list-item max-w-[50%]"
                    >
                      {requirement}
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">
                Deseable
              </h3>
              <ul className="flex flex-col list">
                {jobData.niceToHave?.map((desirable, index) => {
                  return (
                    <li
                      key={index}
                      className="font-[600] max-w-[50%] list-item"
                    >
                      {desirable}
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="mb-[3%]">
              <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">
                Beneficios
              </h3>
              <ul className="flex flex-col list">
                {jobData.benefits?.map((benefit, index) => {
                  return (
                    <li
                      key={index}
                      className="font-[600] max-w-[50%] list-item"
                    >
                      {benefit}
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className=" mt-[10%] flex flex-row content-center items-center">
              <img
                src="/Vectores/complete-form.svg"
                alt="complete-form"
                className="w-[4.5rem] mr-[1.5%]"
              />
              <h3 className="font-bold text-black text-2xl">
                Para aplicar por favor completa <br /> el siguiente <Link to={`/soyTalento/Joboffer/${id}/application`} onClick={()=> dispatch(setFormVisible(true))}>formulario</Link>
              </h3>
            </section>
          </div>
        </div>
        <section className="bg-linkIt-300 mx-[-6%] text-white text-center h-[50vh] flex flex-row justify-center content-center items-center">
          <h3 className="font-bold">NEWSLETTER</h3>
        </section>
        <footer className="mx-[-6%] ">
          <Footer />
        </footer>
      </article>
    </>
  );
}

export default JobDescription;
