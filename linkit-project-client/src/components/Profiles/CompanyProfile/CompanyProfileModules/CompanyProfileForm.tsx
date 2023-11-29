// import { FunctionComponent, useState } from "react";
// import CloudinaryUploadWidget from "../../../Services/cloudinaryWidget"
// import { ICompany } from "../../types";
// import { editUser } from "../../api";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../../redux/types";
// import { setUser } from "../../../../redux/features/AuthSlice";

// interface IComponentProps {
//   company: ICompany
// }

// const CompanyForm: FunctionComponent<IComponentProps> = ({company}) => {
//   const dispatch = useDispatch()
//   const {token} = useSelector((state: RootState) => state.Authentication)
//   const [cvPublicId, setCvPublicId] = useState("")
//   const [repName, setRepName] = useState(company.technologies)
//   const [country, setCountry] = useState(company.country)
//   const [linkedin, setLinkedin] = useState(company.linkedin)
//   const [email, setEmail] = useState(company.email)
//   const [companyName, setCompanyName] = useState(company.companyName)


//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     try {
//       e.preventDefault()
      
//       if (!token) throw new Error("No token provided")

//       const newCompany = {
//         ...company,
//         companyName,
//         repName,
//         email,
//         linkedin,
//         country,
//         cvPublicId
//       }

//       const updatedCompany = await editCompany(newCompany)
//       dispatch(setCompany(updatedCompany))
      
//     } catch (error) {
//       console.log(error) 
//     }

//   }

//   return (
//     <div className="flex justify-center items-center content-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] min-h-[30vh] min-w-[90%] mt-[7rem] bg-linkIt-500 p-[3rem] rounded-[20px]">

//       <form action="" onSubmit={handleSubmit} className="flex flex-col">
//         <div className="grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-3 font-montserrat">
//           <input
//             defaultValue={company.companyName}
//             onChange={(event) => setCompanyName(event.target.value)}
//             type="text"
//             placeholder="Nombre"
//             className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
//           />

//           <input
//             defaultValue={user.email}
//             onChange={(event) => setEmail(event.target.value)}
//             className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
//             type="text"
//             placeholder="Email corporativo"
//           />

//           <input
//             defaultValue={user.country}
//             onChange={(event) => setCountry(event.target.value)}
//             className="flex border-[.125rem] border-linkIt-400 bg-transparent px-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]"
//             type="text"
//             placeholder="País"
//           />
            
//           <input
//             defaultValue={user.linkedin}
//             onChange={(event) => setLinkedin(event.target.value)}
//             className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]" 
//             type="text"
//             placeholder="Perfil de LinkedIn"
//           />

//           <input
//             defaultValue={user.technologies.join(", ")}
//             onChange={(event) => setTechnologies(event.target.value.split(","))}
//             className="border-[.125rem] border-linkIt-400 bg-transparent pl-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]"
//             placeholder="Stack tecnológico"
//           />

//           <select
//             onChange={(event) => setEnglishLevel(event.target.value as EnglishLevelEnum)}
//             defaultValue={user.englishLevel}
//             className="border-[.125rem] border-linkIt-400 bg-transparent pl-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]"
//           >
//             <option value={EnglishLevelEnum.LOW}>Bajo</option>
//             <option value={EnglishLevelEnum.MEDIUM}>Medio</option>
//             <option value={EnglishLevelEnum.HIGH}>Alto</option>
//             <option value={EnglishLevelEnum.BILINGUAL}>Bilingue</option>
//           </select>

//           <CloudinaryUploadWidget
//             className="flex items-center justify-between bg-transparent px-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px] cursor-pointer"
//             setFilePublicId={setCvPublicId}
//           >
//             {cvPublicId ? cvPublicId : (
//               <>
//                 <span className="font-[500] text-opacity-80 text-linkIt-400">
//                   Carga tu CV
//                 </span>
//                 <img className="w-6" src="/Vectores/upload-circle.svg" alt="" />
//               </>
//             )}
//           </CloudinaryUploadWidget>
//         </div>

//         <div className="flex flex-row justify-self-end place-self-end mt-8 gap-2"> 
//           <button className="text-linkIt-400 border-[.125rem] border-linkIt-300 bg-white w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid">Descartar cambios</button>
//           <button
//             type="submit"
//             className="text-white border-[.125rem] border-linkIt-300 bg-linkIt-300 w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid"
//           >
//             Guardar cambios
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CompanyForm;