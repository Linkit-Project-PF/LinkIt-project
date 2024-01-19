import blackArrow from '/Vectores/arrow.png'
import { useState } from 'react'

interface members {
    id: number,
    img: string,
    name: string,
    position: string
}
interface PhotosCarouselProps { 
    arrayOfMembers: members[],
    bgColor: string
}

export default function PhotosCarousel({arrayOfMembers, bgColor}: PhotosCarouselProps) {

    const [current, setCurrent] = useState(1)
    const length = arrayOfMembers.length

    const nextSlide = () => {
        setCurrent(current === length ? 1 : current + 1)
     }
    
        const prevSlide = () => {
            setCurrent(current === 1 ? length : current - 1)
        }

    return (
        <div className="grid grid-cols-3 justify-items-center items-center">
            
            <img src={blackArrow} alt="prev" onClick={prevSlide} className='w-[20px] h-[20px] rotate-90 cursor-pointer'/>
                {arrayOfMembers.map((item, index) => {
                    return (
                        <div className={`justify-items-center mt-5 ${item.id === current ? "grid" : "hidden"}`} key={index}>
                            <img src={item.img} alt={item.name} className={`${bgColor === "white" ? "bg-white" : "bg-linkIt-500"} rounded-xl w-full h-full`} />
                            <p className='font-bold text-[0.7rem] whitespace-nowrap mt-2 mb-1'>{item.name}</p>
                            <p className='text-[0.65rem] text-center'>{item.position}</p>
                        </div>
                    )
                })}
            <img src={blackArrow} alt="next" onClick={nextSlide} className='w-[20px] h-[20px] -rotate-90 cursor-pointer'/>

        </div>
    )
 }