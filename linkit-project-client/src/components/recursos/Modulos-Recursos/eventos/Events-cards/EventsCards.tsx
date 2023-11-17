import EventCard from "./EventCard";
import events from '../../../../../Utils/events.json'
import { useState } from 'react'
import { motion } from "framer-motion";


function EventsCards() {

    const maxEventsPerPage: number = 3
    const [currentPage, setCurrentPage] = useState(0)

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevius = () => {
        setCurrentPage(currentPage - 1)
    }

    const startIndex: number = currentPage * maxEventsPerPage
    const endIndex: number = startIndex + maxEventsPerPage


  return (
    <div  className="flex flex-row flex-wrap justify-center gap-[2rem]">

        <button
            onClick={handlePrevius}
            disabled={currentPage === 0}
            className=" h-[2rem] self-center"
        >
            <motion.img src="Vectores/previus.png" alt="" whileHover={{scale: 1.1}} whileTap={{scale:1}}/>
        </button>

        {
            events.slice(startIndex, endIndex).map((event)=>{
                return(
                    <EventCard
                        image={event.image}
                        title={event.title}
                        category={event.category}
                        description={event.description}
                        link={event.link}
                    />
                )
            })
        }
        <button
        onClick={handleNext}
        disabled={currentPage === Math.ceil(events.length / maxEventsPerPage) - 1}
        className=" h-[2rem] self-center"
        >
            <motion.img src="Vectores/next.png" alt="" whileHover={{scale:1.1}} whileTap={{scale:1}}/>
        </button>
    </div>
  )
}

export default EventsCards