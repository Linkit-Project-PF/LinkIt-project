import { useEffect, useState } from "react";

interface componentParams {
  status: string;
}

interface statusInfo {
  en: any;
  es: any;
}

export default function InformationBox({ status }: componentParams) {
  const [lang, setLang] = useState("es");
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") ?? "es");
  }, []);
  const statusInfoObject: statusInfo = {
    en: {
      "Pre-alignment":
        "We will be gathering some initial information about the ideal candidate with you",
      Alignment:
        "We will be gathering again with you to check on technical doubts you/us may have regarding the candidate profile",
      Sourcing:
        "We are searching for the profile who fits best the requirements checked with you previously for this role",
      Endorsed:
        "We first start presenting candidates to you. We will be awaiting for your feedback and/or interview to continue",
      Offered:
        "The role is offered to a candidate which already went through all the process, and we are awaiting for his/her response",
      Stalled:
        "Something happened on the process that caused a pause, If you do not know why this process is stalled, please contact us for more information",
      "Recruiter int.":
        "We are interviewing a candidate who fit the profile, so we can proceed with an interview with you",
      "Client int.":
        "Candidate is in the process of being interviewed by you. Once we have the confirmation It can be a good fit from your side, we will move with the next step",
      "Pending invoice/ contract":
        "An invoice/contract is pending so we can move with ending the process successfully. The process is on the last stage",
      "Partial Payment":
        "This is the last step. Everything is now completed and signed, an invoice has been sent to you. Once the payment is completed, the process will be ended",
    },
    es: {
      "Pre-alignment":
        "Estaremos reuniéndonos contigo para revisar inicialmente los requisitos del perfil que buscas para este rol",
      Alignment:
        "Estaremos reuniéndonos contigo para resolver consultas técnicas del perfil más detalladas",
      Sourcing:
        "Estamos buscando y entrevistando talentos para encontrar el/los que más se ajusten al rol",
      Endorsed:
        "Iniciaremos a presentarte los talentos que encontramos, y esperarémos por tus comentarios y entrevistas previas",
      Offered:
        "El rol ya fue ofrecido a un candidato que ha atravesado todo el proceso, y estamos a la espera de su respuesta",
      Stalled:
        "Algo sucedió en el proceso que lo hizo entrar en pausa. Si no sabes cuál es la razón, contáctanos para poder ayudarte",
      "Recruiter int.":
        "Estamos entrevistando un candidato que puede ajustarse al rol, previo a enviarlo a una entrevista directa",
      "Client int.":
        "El candidato está siendo entrevistado directamente y estamos a la espera de la respuesta para continuar",
      "Pending invoice/ contract":
        "El contrato o factura está pendiente de ser enviado para poder continuar. El proceso entró a la última etapa",
      "Partial Payment":
        "Este es el último paso. Para este punto todo está completado y firmado y la factura ha sido enviada para su pago. Una vez tengamos la confirmación del pago, el proceso se dará por terminado",
    },
  };
  return (
    <div className="absolute top-[20%] left-[33%] p-5 bg-white rounded-md shadow-[0px_4px_20px_10px_#718096] z-20 w-1/3">
      <div className="font-monserrat text-sm text-center">
        <p>{statusInfoObject[lang as keyof statusInfo][status]}</p>
      </div>
    </div>
  );
}
