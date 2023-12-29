import axios from "axios";
import { useEffect, useState } from "react";


export default function StatisticsOKRs() {

  const[positionLATAM, setpositionLATAM] = useState({
    tituloOKR1:"",
    porcentajeCompletado1:"%",
    tituloOKR2:"",
    porcentajeCompletado2:"%",
    tituloOKR3:"",
    porcentajeCompletado3:"%",
    tituloOKR4:"",
    porcentajeCompletado4:"%",
    tituloOKR5:"",
    porcentajeCompletado5:"%",
    tituloOKR6:"",
    porcentajeCompletado6:"%",
    tituloOKR7:"",
    porcentajeCompletado7:"%"

  })

  const[q4Recruiting, setq4Recruiting] = useState({
    tituloOKR1:"",
    porcentajeCompletado1:"%"
  })

  const[Recruiting, setRecruiting] = useState({
    tituloOKR1:"",
    porcentajeCompletado1:"%"
  })

  const OKRsSales = async () => {
    try {
      const response = await axios.get(`https://linkit-server.onrender.com/resources/googleSheet/OKRsSales`)
      if(response.status === 200){
        const data = response.data
        setpositionLATAM({
          tituloOKR1:data[2].OKRsIniciativas,
          porcentajeCompletado1:data[2].porcentajeCompletado,
          tituloOKR2:data[9].OKRsIniciativas,
          porcentajeCompletado2:data[9].porcentajeCompletado,
          tituloOKR3:data[17].OKRsIniciativas,
          porcentajeCompletado3:data[17].porcentajeCompletado,
          tituloOKR4:data[26].OKRsIniciativas,
          porcentajeCompletado4:data[26].porcentajeCompletado,
          tituloOKR5:data[29].OKRsIniciativas,
          porcentajeCompletado5:data[29].porcentajeCompletado,
          tituloOKR6:data[37].OKRsIniciativas,
          porcentajeCompletado6:data[37].porcentajeCompletado,
          tituloOKR7:data[44].OKRsIniciativas,
          porcentajeCompletado7:data[44].porcentajeCompletado

        }
        )
      }
    } catch (error) {
      console.log(error)
    }
  };

  const OKRsQ4Recruiting = async () => {
    try {
      const response = await axios.get(`https://linkit-server.onrender.com/resources/googleSheet/OKRsQ4-Recruiting`)
      if(response.status === 200){
        const data = response.data
        setq4Recruiting({
          tituloOKR1:data[3].OKRsIniciativas,
          porcentajeCompletado1:data[3].porcentajeCompletado

        }
        )
      }
    } catch (error) {
      console.log(error)
    }
  };

  const OKRRecruiting = async () => {
    try {
      const response = await axios.get(`https://linkit-server.onrender.com/resources/googleSheet/OKRsRecruiting`)
      if(response.status === 200){
        const data = response.data
        setRecruiting({
          tituloOKR1:data[3].OKRsIniciativas,
          porcentajeCompletado1:data[3].porcentajeCompletado

        }
        )
      }
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(()=>{
    OKRsSales()
    OKRsQ4Recruiting()
    OKRRecruiting()
  },[])

  return (
    
    <div className="bg-linkIt-500 justify-center p-[7%]">
            <h4 className="text-black text-[3vw] font-manrope font-bold text-center">Sales</h4>
<div>

            <div className="bg-white rounded-[7px] p-10 my-7  items-center justify-around space-y-5 w-fit">
              <div className="grid  font-montserrat font-semibold text-[1vw]">
                Mercado: Posicionamiento a nivel LATAM y España
                </div>
                    <div>
                      {positionLATAM.tituloOKR1}
                      <br />
                      {positionLATAM.porcentajeCompletado1}
                      <br />
                      <br />
                      {positionLATAM.tituloOKR2}
                      <br />
                      {positionLATAM.porcentajeCompletado2}
                      <br />
                      <br />
                      {positionLATAM.tituloOKR3}
                      <br />
                      {positionLATAM.porcentajeCompletado3}
                    </div>
            </div>

            <div className="bg-white rounded-[7px] p-4 my-7  items-center justify-around space-y-5 w-fit">
              <div className="grid gap-[0.5vw] font-montserrat font-semibold text-[1vw]">
                Negocio: Aumentar el revenue en un 10% vs el primer semestre
                </div>
                    <div>
                      {positionLATAM.tituloOKR4}
                      <br />
                      {positionLATAM.porcentajeCompletado4}
                      <br />
                      <br />
                      {positionLATAM.tituloOKR5}
                      <br />
                      {positionLATAM.porcentajeCompletado5}
                      <br />
                      <br />
                      {positionLATAM.tituloOKR6}
                      <br />
                      {positionLATAM.porcentajeCompletado6}
                      <br />
                      <br />
                      {positionLATAM.tituloOKR7}
                      <br />
                      {positionLATAM.porcentajeCompletado7}
                    
                    </div>
            </div>
</div>

            <h4 className="text-black text-[3vw] font-manrope font-bold text-center">Q4 - Recruiting</h4>
            <div className="bg-white rounded-[7px] p-4 my-7 items-center flex flex-wrap justify-around">
              <div className="grid grid-cols-6 gap-[0.5vw] font-montserrat font-semibold text-[1vw]">
                Mercado: Posicionamiento a nivel LATAM y España
                </div>
                    <div>
                      {q4Recruiting.tituloOKR1}
                      <br />
                      {q4Recruiting.porcentajeCompletado1}
                      <br />
                      <br />
                    
                    </div>
            </div>

            <h4 className="text-black text-[3vw] font-manrope font-bold text-center">Recruiting</h4>
            <div className="bg-white rounded-[7px] p-4 my-7 items-center flex flex-wrap justify-around">
              <div className="grid grid-cols-6 gap-[0.5vw] font-montserrat font-semibold text-[1vw]">
                Mercado: Posicionamiento a nivel LATAM y España
                </div>
                    <div>
                      {Recruiting.tituloOKR1}
                      <br />
                      {Recruiting.porcentajeCompletado1}
                      <br />
                      <br />
                    
                    </div>
            </div>
    </div>

    
  )
}

