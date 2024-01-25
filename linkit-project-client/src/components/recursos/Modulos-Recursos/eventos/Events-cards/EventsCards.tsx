import EventCard from "./EventCard";
import events from '../../../../../Utils/events.json'
import { useState } from 'react'
import blackArrow from "/Vectores/arrow.png";


function EventsCards() {

    const maxEventsPerPage: number = window.matchMedia("(max-width: 1023px)").matches ? 1 : 3
    const [currentPage, setCurrentPage] = useState(0)

    const handleNext = () => {
        setCurrentPage(currentPage === Math.ceil(events.length / maxEventsPerPage) - 1 ? 0 : currentPage + 1)
    }

    const handlePrevius = () => {
        setCurrentPage(currentPage === 0 ? Math.ceil(events.length / maxEventsPerPage) - 1 : currentPage - 1)
    }

    const startIndex: number = currentPage * maxEventsPerPage
    const endIndex: number = startIndex + maxEventsPerPage


  return (
    <div  className="flex w-full h-full justify-center items-center space-x-[5%]">

<img src={blackArrow} onClick={handlePrevius} alt="previus-icon" className="rotate-90 w-[20px] h-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />

<div className='grid lg:grid-cols-3 items-end gap-2 w-full h-full'>
        {
            events.slice(startIndex, endIndex).map((event, index)=>{
                return(
                    <EventCard
                        image={event.image}
                        title={event.title}
                        category={event.category}
                        description={event.description}
                        link={event.link}
                        key={index}
                    />
                )
            })
        }
        </div>
        <img onClick={handleNext} src={blackArrow} alt="next-icon" className="-rotate-90 w-[20px] h-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />
    </div>
  )
}

export default EventsCards