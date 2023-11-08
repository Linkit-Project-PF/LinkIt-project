import companies from "./companies.json"
import { useState } from "react";

export default function Carrusel() {

    const items:number = 5;
    const [currentPage, setCurrentPage] = useState(0)

    const handleNext = ()=>{
        setCurrentPage(currentPage+1)
    }
    
    const handlePrevius = ()=>{
        setCurrentPage(currentPage-1)
    }

    const startIndex = currentPage * items
    const endIndex = startIndex + items

    const companiesFiltered = companies.slice(startIndex, endIndex)

  return (
    <div>
        {companiesFiltered.map((c)=>{
            return (
                <div className="flex flex-row">
                <img className="w-1/12" src={c.logo}/>
                </div>
            )
        })}
        <button onClick={handlePrevius} disabled={currentPage === 0}>◀</button>
        <button onClick={handleNext} disabled={endIndex > companies.length}>▶</button>
    </div>
  )
}
