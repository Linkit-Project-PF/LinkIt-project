import { useEffect, useState } from "react";
import CloudinaryUploadWidget from "../../../Services/cloudinaryWidget"

const CompanyForm = () => {
  const [filePublicId, setFilePublicId] = useState("")

  useEffect(() => {
    if (filePublicId)
      alert(`File uploaded with public ID: ${filePublicId}`)
  }, [filePublicId])

  return (
    <div className="flex justify-center items-center content-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] min-h-[30vh] min-w-[90%] mt-[5rem] bg-linkIt-500 p-[3rem] rounded-[20px]">
      <form action="" className="flex flex-col">
        <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-3 font-montserrat">
          <input className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]" type="text" placeholder="Nombre"/>
          <input className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]" type="text" placeholder="Apellido"/>
          <input className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]" type="text" placeholder="Empresa"/>
          <input className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]" type="text" placeholder="Email corporativo"/>
          <select className="flex border-[.125rem] border-linkIt-400 bg-transparent px-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]" >
            <option>Pais de residencia</option>
          </select>
          <CloudinaryUploadWidget
            className="flex items-center justify-between bg-transparent px-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px] cursor-pointer"
            setFilePublicId={setFilePublicId}
          >
            <span className="font-[500] text-opacity-80 text-linkIt-400">
              Carga tu logo
            </span>
            <img className="w-6" src="/Vectores/upload-circle.svg" alt="" />
          </CloudinaryUploadWidget>
        </div>
      </form>
    </div>
  );
}

export default CompanyForm;