import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
// import { SpecificOKRsArea, Area, OKRsType } from "../../../admin.types";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IUser } from "../../../../../../../components/Profiles/types";
import {OKRsType, SpecificOKRsArea} from "../../../../../admin.types"
import FormSpecificResults from './FormSpecificResults'


export type stateProps = {
    Authentication: {
      user: IUser
    }
    resources: {
      allresources: OKRsType;
    };
  }
  
  type OnCloseFunction = () => void;
  
  interface FormStatisticsOKRsProps {
    onClose: OnCloseFunction;
  }
  
  export default function FormStatisticsOKRs({ onClose,   }: FormStatisticsOKRsProps) {
    
    const token = useSelector((state: stateProps) => state.Authentication.user._id)
    const {t} = useTranslation()
    const [showForm, setShowForm] = useState(false);
    
    const [viewForm, setViewForm] = useState(false);
    
    const [lastAreaName, setLastAreaName] = useState("")

    const [specificOKRsAreaComplete, setSpecificOKRsAreaComplete] = useState<SpecificOKRsArea>({
      
      okrSpecificName:"",
      okrsSpecific:[]
    }
    );
   
    const [arraySpecificOKRsArea, setArraySpecificOKRsArea] = useState([
      specificOKRsAreaComplete
    ])

    const [arrayAreas, setArrayAreas] = useState([
      {
        name:lastAreaName,
        specificOKRsArea:arraySpecificOKRsArea || []
      }
    ])

  const [specificResultName, setSpecificResultName] = useState<string>("");

  // const [isFormSpecificResultsOpen, setIsFormSpecificResultsOpen] = useState(false);

  
  const [completeOKR, setCompleteOKR] = useState<Partial<OKRsType>>({
    generalTitleOKR:"",
    areas:[
      {
        name:"",
        specificOKRsArea:[
          {
            okrSpecificName:"",
            okrsSpecific:[]
            }
        ]
          }
        ],
        archived:false
      });



      // const [errors, setErrors] = useState({
        //     generalTitleOKR:"",
        // areas:[
          //     {
    //         name:"",
    //         specificOKRsArea:[
    //             {
    //             okrSpecificName:"",
    //             okrsSpecific:[]
    //             }
    //         ]
    //     }
    // ],
    // archived:false
    // });
    
  
      //!CAMBIO HECHO
      //!CAMBIO HECHO
      //!CAMBIO HECHO
//! REVISAR PARA ELIMINAR LOS VACíOS EN EL ARRAY arraySpecificOKRsArea 
        
    useEffect(() => {
  // Filtra los objetos que cumplen la condición okrSpecificName !== ""
  const filteredArray = arraySpecificOKRsArea.filter(specificOKR => specificOKR.okrSpecificName !== "");

  // Añade el nuevo objeto solo si okrSpecificName no es una cadena vacía
  if (specificOKRsAreaComplete.okrSpecificName !== "") {
    // Añade el nuevo objeto al array filtrado
    filteredArray.push(specificOKRsAreaComplete);
  }

  // Actualiza el estado con el nuevo array filtrado
  setArraySpecificOKRsArea(filteredArray);

}, [specificOKRsAreaComplete]);

     
  console.log(arraySpecificOKRsArea)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setCompleteOKR({
        ...completeOKR,
        [name]: value,
      });
      
      //     const validationError = validations(completeOKR as ResourceProps);
      // setErrors(validationError);
    };
    
    //   const handleBlurErrors = () => {
      //     const validationError = validations(completeOKR as ResourceProps);
      //     setErrors(validationError);
      //   }
      
      
      
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const areaName = e.target.value;

  const areaAlreadyExists = arrayAreas?.some((area)=> area.name=== areaName)
  
  if (!areaAlreadyExists){

  setSpecificOKRsAreaComplete({
    okrSpecificName:"",
    okrsSpecific:[]
  });

  setArraySpecificOKRsArea([
    specificOKRsAreaComplete
  ])

    setLastAreaName(areaName);
    setShowForm(true);
  } else {
    setShowForm(false)
    swal(t('Esta área ya existe'));
    console.error()
  }
}


const handleResultNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  setSpecificResultName(e.target.value);
};

const noShowForm = () => {  
  setViewForm(false);
  
};



    const handleOkrsSpecificUpdate = (newspecificResult: SpecificOKRsArea["okrsSpecific"]) => {

        setSpecificOKRsAreaComplete({
          okrSpecificName:specificResultName,
          okrsSpecific:newspecificResult
      });
      
    
    };
    
    const showForm2 = () => {
      setViewForm(true);
    };

      
      const handleChangeArrayArea=()=>{
      
      setArrayAreas(() => {
     
        const areaExists = arrayAreas?.some((area) => area.name === lastAreaName)

        if (!areaExists) {
          arrayAreas.push({
            name:lastAreaName,
            specificOKRsArea:arraySpecificOKRsArea
          });
          if (arrayAreas[0].name === "") {
            arrayAreas.shift();
          }

          return arrayAreas;
        } else {
          swal("Esta área ya existe");
          return arrayAreas; 
        }
      });

      setSpecificOKRsAreaComplete({
        okrSpecificName:"",
        okrsSpecific:[]
      });

      swal(t("Área añadida con éxito"));
      }

      
      const handleChangeAdd=() =>{
      
        setCompleteOKR(
          prevCompleteOKR => {
            return {
              ...prevCompleteOKR,
              areas:arrayAreas
            };
          }
          ); 
        }
        
   
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // const validationError = validations(completeOKR as ResourceProps);
      // setErrors(validationError);
      
      try {
          const endPoint = "https://linkit-server.onrender.com/OKRs/create";
          const response = await axios.post(endPoint, completeOKR, {
            headers: { Authorization: `Bearer ${token}`,
            'Accept-Language': sessionStorage.getItem('lang')}
          });
          
          setCompleteOKR(
            {
              generalTitleOKR:"",
              areas:[
                {
                      name:"",
                      specificOKRsArea:[
                          {
                          okrSpecificName:"",
                          okrsSpecific:[]
                          }
                      ]
                  }
              ],
              archived:false
          });
  
          swal(t("El OKR fue creado con éxito"));
          onClose()
  
          return response.data;
        } catch (error: any) {
          console.error(error.response.data)
        }
      };
    
// console.log(completeOKR)
// console.log(arrayAreas)
// console.log(arraySpecificOKRsArea)
    return(
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-auto">
            <div className=" flex flex-col justify-center items-center bg-linkIt-500 opa m-32 rounded-[20px] border-[3px] border-linkIt-300">
                <div>
                    <h1 className="text-3xl my-12">{t("Nuevo OKR")}</h1>
                </div>

                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center"
                    action="">
                        <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">

                            <div className="w-fit px-3 mb-6">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t("Título OKR principal")}
                                </label>
                                <input className={'"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                                type="text"
                                name="generalTitleOKR"
                                // placeholder={errors.title ? "*" : ""}
                                autoComplete="off"
                                onChange={handleChange}
                                // onBlur={handleBlurErrors}
                                /> 
                            </div>

                            <div className="w-fit px-3 mb-6">


                                  {completeOKR &&
                                    completeOKR.generalTitleOKR &&
                                    completeOKR.generalTitleOKR.length > 0 && completeOKR.generalTitleOKR !== " " ? (
                                      <div className="mx-4">
                                      <h3 className="text-md font-bold text-linkIt-200">
                                        {t('Nombre OKR principal agregado')}
                                      </h3>

                                        {completeOKR.generalTitleOKR}
                
                                      <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Area</label>
                                      <select
                                      name="area"
                                      onChange={handleAreaChange}
                                      value={lastAreaName}
                                      >
                                        
                                          <option value="">{t('Seleccionar')}</option>
                                          <option value="LinkIT">LinkIT</option>
                                          <option value="Sales">Sales</option>
                                          <option value="Q4-Recruiting">Q4-Recruiting</option>
                                          <option value="Recruiting">Recruiting</option>
                                      </select>

                                      <button 
                                
                                className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 ml-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90"
                                type="button"
                                onClick={ handleChangeArrayArea}>
                          
                                {t('Agregar área')}
                                
                                </button>
                                
                                    </div>
                                  ) : null}
                                  
                              
                            </div>


                        </div>
                        <button 
                                className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 ml-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90"
                                type="submit"
                                onClick={handleChangeAdd}>
                                {t('Crear OKR')}
                                
                                </button>
                </form>

            {showForm && (
              <div className=" flex flex-col justify-center items-center bg-linkIt-500 opa m-32 rounded-[20px] border-[3px] border-linkIt-300  "
              >
      
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t("Resultados clave")}</label>
              <input className={'"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                                  type="text"
                                  name="okrSpecificName"
                                  // placeholder={errors.title ? "*" : ""}
                                  autoComplete="off"
                                  onChange={handleResultNameChange}
                                  // onBlur={handleBlurErrors}
                                  /> 
              <button
              className="flex items-center border border-linkIt-300 rounded-[7px] p-2 shadow-md hover:border-linkIt-200 transition-all duration-300 ease-in-out mr-5"
              type="button"
              onClick={showForm2} 
              >Crear Resultados específicos
              </button>

              {viewForm && (
              <FormSpecificResults
                onOkrsSpecificUpdate={handleOkrsSpecificUpdate}
                onClose={() => {
                  noShowForm();
                }}
                token={token}
              />
              )}
            </div>)
          }
            </div>


        </div>
    )
}