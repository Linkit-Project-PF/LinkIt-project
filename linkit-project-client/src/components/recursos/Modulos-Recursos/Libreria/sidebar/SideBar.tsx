import './Sidebar.css'
import SearchBar from './sidebar-seacrhBar/SearchBar'
import { useState } from 'react'

function SideBar() {
    const [active, setActive] = useState("")
    const handleActive = (index: string) => {
        setActive(index)
    }
    const items = ["ADQUISICIÓN DE TALENTOS", "CONTRATACIÓN", "CASOS DE ÉXITO", "ENTREVISTA", "GUÍA"]
  return (
    <div className='font-montserrat'>
        <h1 className="font-bold mt-[3rem] text-[1.7rem] mb-[2rem]">Buscar</h1>
        <SearchBar />
        <h2 className='font-bold mt-[2rem] text-[1.7rem]'>Temas</h2>
        <ul className='flex flex-col gap-[1rem] font-[500] mt-[2rem]'>
            {items.map((item, index) => (
                <li 
                    className={`list-item${active === index.toString() ? ' active' : ''} cursor-pointer inline-flex`} 
                    onClick={() => handleActive(index.toString())}
                >
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SideBar
