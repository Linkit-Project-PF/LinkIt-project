import './Sidebar.css'
import SearchBar from './sidebar-seacrhBar/SearchBar'
import { setFilterResources } from '../../../../../redux/features/ResourcesSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useTranslation } from "react-i18next";

function SideBar() {
    
    const {t} = useTranslation(); 
    const [active, setActive] = useState("")

    const dispatch = useDispatch()

    const handleActive = (index: string) => {
        setActive(index)
    }

    const handleFilter = (event: React.MouseEvent<HTMLLIElement>)=>{
        const target = event.target as HTMLLIElement
        dispatch(setFilterResources(target.textContent))
    }

    const items = ["todos","adquisición de talentos", "contratación", "casos de éxito", "entrevista", "guía"]
  return (
    <div className='font-montserrat'>
        <h1 className="font-bold mt-[3rem] text-[1.7rem] mb-[2rem]">{t('Buscar')}</h1>
        <SearchBar setActive={setActive} />
        <h2 className='font-bold mt-[2rem] text-[1.7rem]'>{t('Temas')}</h2>
        <ul className='flex flex-col gap-[1rem] font-[500] mt-[2rem]'>
            {items.map((item, index) => (
                <li 
                    className={`list-item-resource${active === index.toString() ? '-active' : ''} cursor-pointer inline-flex uppercase`} 
                    onClick={(event) => {handleActive(index.toString()), handleFilter(event)}}
                    key={index}
                    value={item}
                >
                    {t(item)}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SideBar
