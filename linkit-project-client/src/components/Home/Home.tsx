import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import TopButton from "../../Utils/TopButton";
import Error from "../Errores/Error";
import Unauthorized from "../Errores/SinAutorizacion";
import ModuloA from "./Modulos/ModuloA/ModuloA";
import ModuloB from "./Modulos/ModuloB/ModuloB";
import VerifyAlert from "../../Utils/verifyAlert/VerifyAlert";
import { useIntersectionObserver } from "../../Utils/ModuleObserver/IntersectionObserver";
import ModuloC from "./Modulos/ModuloC/ModuloC";
import ModuloD from "./Modulos/ModuloD/ModuloD";
import ModuloE from "./Modulos/ModuloE/ModuloE";
import ModuloF from "./Modulos/ModuloF/ModuloF";
import ModuloG from "./Modulos/ModuloG/ModuloG";
import { Helmet } from "react-helmet-async";

function Home({ error, Unauth, Verify }: { error: boolean; Unauth: boolean; Verify: boolean }) {
  const nav = useNavigate();
  const [errorVisible, setErrorVisible] = useState(false);
  const [unauthVisible, setUnauthVisible] = useState(false);
  const [verifyVisible, setVerifyVisible] = useState(false);

  const refC = useRef<HTMLDivElement>(null);
  const refD = useRef<HTMLDivElement>(null);
  const refE = useRef<HTMLDivElement>(null);
  const refF = useRef<HTMLDivElement>(null);
  const refG = useRef<HTMLDivElement>(null);

  const isCVisible = useIntersectionObserver(refC);
  const isDVisible = useIntersectionObserver(refD);
  const isEVisible = useIntersectionObserver(refE);
  const isFVisible = useIntersectionObserver(refF);
  const isGVisible = useIntersectionObserver(refG);

  if (errorVisible || unauthVisible || verifyVisible) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "visible";

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
        nav("/");
      }, 2500);
    } else if (Unauth) {
      setUnauthVisible(true);
      setTimeout(() => {
        setUnauthVisible(false);
        nav("/");
      }, 2500);
    } else if (Verify) {
      setVerifyVisible(true);
      setTimeout(() => {
        setVerifyVisible(false);
        nav("/");
      }, 2500);
    }
    window.scrollTo(0, 0);
  }, []);

  const generateWebsiteSchema = () => {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "LinkIT",
      "url": "https://www.linkit-hr.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.linkit-hr.com/recursos?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://www.linkedin.com/company/linkit-hr/",
      ]
    };

    // Esquema de organización para mejorar la presencia en Google
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LinkIT",
      "url": "https://www.linkit-hr.com/",
      "logo": "https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg",
      "description": "LinkIT conecta talento IT con las mejores empresas del sector tecnológico.",
      "sameAs": [
        "https://www.linkedin.com/company/linkit-hr/",
      ]
    };

    return [websiteSchema, organizationSchema];
  };

  return (
    <>
      {/* Implementación de Schema.org con Helmet */}
      <Helmet>
        <title>LinkIT | Conectamos talento IT con las mejores empresas</title>
        <meta name="description" content="LinkIT es la plataforma que conecta talento IT con las mejores empresas del sector tecnológico. Encuentra trabajo o contrata profesionales IT de forma rápida y eficiente." />
        <script type="application/ld+json">
          {JSON.stringify(generateWebsiteSchema())}
        </script>
      </Helmet>

      <div className="flex flex-col overflow-hidden">
        {errorVisible && <Error />}
        {unauthVisible && <Unauthorized />}
        {verifyVisible && <VerifyAlert />}
        <ModuloA />
        <ModuloB />
        <div ref={refC} className="min-h-[300px]">{isCVisible && <ModuloC />}</div>
        <div ref={refD} className="min-h-[300px]">{isDVisible &&  <ModuloD isVisible={isDVisible} />}</div>
        <div ref={refE} className="min-h-[300px]">{isEVisible && <ModuloE />}</div>
        <div ref={refF} className="min-h-[300px]">{isFVisible && <ModuloF />}</div>
        <div ref={refG} className="min-h-[300px]">{isGVisible && <ModuloG />}</div>

        <TopButton />
      </div>
    </>
  );
}

export default Home;