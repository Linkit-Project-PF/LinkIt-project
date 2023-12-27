import { useDispatch } from "react-redux"
import { setFilterResources } from "../../../../../../redux/features/ResourcesSlice"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import Recomended from "./recomended/Recomended"


function BlogSidebar() {
    const dispatch = useDispatch()
    const handleFilter = (event: React.MouseEvent<HTMLLIElement>)=>{
        const target = event.target as HTMLLIElement
        dispatch(setFilterResources(target.textContent))
    }
    
    const {t} = useTranslation(); 
    const [active, setActive] = useState("")

    const handleActive = (index: string) => {
        setActive(index)
    }

    const items = ["todos","adquisición de talentos", "contratación", "casos de éxito", "entrevista", "guía"]
  return (
    <div className='font-montserrat relative right-[15%] mt-[10%]'>
        <h2 className='font-bold mt-[2rem] text-[1.7rem]'>{t('Temas')}</h2>
        <ul className='flex flex-col gap-[1rem] font-[500] mt-[2rem]'>
            {items.map((item, index) => (
                <li 
                    className={`list-item-resource${active === index.toString() ? '-active' : ''} cursor-pointer inline-flex uppercase`} 
                    onClick={(event) => {handleActive(index.toString()), handleFilter(event)}}
                    key={index}
                    value={item}
                >
                    {item}
                </li>
            ))}
        </ul>
        <div >
           <h3 className="font-bold mt-[2rem] text-[1.7rem] mb-[2rem\]">Recomendado</h3>
           <Recomended />
        </div>
    </div>
  )
}

export default BlogSidebar