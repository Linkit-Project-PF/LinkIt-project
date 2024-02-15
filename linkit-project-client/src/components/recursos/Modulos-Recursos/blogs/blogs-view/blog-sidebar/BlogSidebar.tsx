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
    <div className='font-montserrat relative '>
        <span className='font-bold subtitles-size dark:text-white'>{t('Temas')}</span>
        <ul className='flex flex-col space-y-2 mt-[5%] text-size dark:text-white'>
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
        <div className="mt-[5%]">
           <span className="font-bold subtitles-size dark:text-white">{t('Recomendado')}</span>
           <Recomended />
        </div>
    </div>
  )
}

export default BlogSidebar