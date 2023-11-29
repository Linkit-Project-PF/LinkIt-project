import { useEffect, useState } from "react";
import "./JobDescription.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SUPERADMN_ID } from "../../../../../../env";
import { JobDescriptionProps } from "./typesJobs";
import Footer from "../../../../../../Utils/Footer/Footer";


function JobDescription() {
  const { id } = useParams<{ id: string }>();
  const [jobData, setJobData] = useState<JobDescriptionProps>({} as JobDescriptionProps);
  useEffect(()=>{
    const fetchJob = async()=>{
        const response = await axios.get(`https://linkit-server.onrender.com/jds/find?code=${id}`,
        {
            headers: {
                Authorization: `Bearer ${SUPERADMN_ID}`
            }
        }
        )
        setJobData(response.data[0])
    }
    fetchJob()
  },[])
  return (
    <>
      <article className="mt-[10rem] mx-[5%] font-montserrat text-linkIt-400 flex flex-col">
        <header className="mb-[3%]">
            <h2 className="text-black border-[2px] border-linkIt-300 inline-flex px-[.6rem] py-[.2rem] font-semibold rounded-[8px] mb-[3%]">CODE: {id}</h2>
            <h1 className="text-black font-bold text-4xl">{jobData.title}</h1>
        </header>
        <section className="mb-[3%]">
            <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">Descripción</h3>
            <p className="font-[600] ">{jobData.description}</p>
        </section>
        <section className="mb-[3%]">
            <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">Acerca de nosotros</h3>
            <p className="font-[600] ">{jobData.aboutUs}</p>
        </section>
        <section className="mb-[3%]">
            <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">Acerca de nuestro cliente</h3>
            <p className="font-[600]" >{jobData.aboutClient}</p>
        </section>
        <section className="mb-[3%]">
            <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">Responsabilidades</h3>
            <p className="font-[600]">{jobData.responsabilities}</p>
        </section>
        <section className="mb-[3%]">
            <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">Requerimientos</h3>
            <ul className="flex flex-col list">
                {
                    jobData.requirements?.map((requirement, index)=>{
                        return <li key={index} className="font-[500] list-item">{requirement}</li>
                    })
                }
            </ul>
        </section>
        <section className="mb-[3%]">
            <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">Deseable</h3>
            <ul className="flex flex-col list">
                {
                    jobData.niceToHave?.map((desirable, index)=>{
                        return <li key={index} className="font-[500] list-item">{desirable}</li>
                    })
                }
            </ul>
        </section>
        <section className="mb-[3%]">
            <h3 className="font-bold text-linkIt-300 text-2xl mb-[1%]">Beneficios</h3>
            <ul className="flex flex-col list">
                {
                    jobData.benefits?.map((benefit, index)=>{
                        return <li key={index} className="font-[500] list-item">{benefit}</li>
                    })
                }
            </ul>
        </section>
        <section className="mb-[3%]">
            <img src="" alt="" />
            <h3 className="font-bold text-black text-2xl">Para aplicar por favor completa <br /> el siguiente formulario</h3>
        </section>
        <section className="bg-linkIt-300 mx-[-6%] text-white text-center h-[50vh] flex flex-row justify-center content-center items-center mt-[6%]">
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
