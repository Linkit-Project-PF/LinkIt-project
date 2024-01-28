import EventCard from "./EventCard";
import { useEffect, useState } from 'react'
import blackArrow from "/Vectores/arrow.png";
import axios from "axios";
import { setEvents } from "../../../../../redux/features/ResourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { ResourceProps } from "../../../../Paneles/admin.types";

export type stateProps = {
    resources: {
        events: ResourceProps[];
    };
  }

function EventsCards() {

    const maxEventsPerPage: number = window.matchMedia("(max-width: 1023px)").matches ? 1 : 3
    const [currentPage, setCurrentPage] = useState(0)

    const dispatch = useDispatch()
    const events = useSelector((state: stateProps) => state.resources.events);


    const handleNext = () => {
        setCurrentPage(currentPage === Math.ceil(events.length / maxEventsPerPage) - 1 ? 0 : currentPage + 1)
    }

    const handlePrevius = () => {
        setCurrentPage(currentPage === 0 ? Math.ceil(events.length / maxEventsPerPage) - 1 : currentPage - 1)
    }

    const startIndex: number = currentPage * maxEventsPerPage
    const endIndex: number = startIndex + maxEventsPerPage

    useEffect(() => {
        const loadData = async (): Promise<void> => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/posts/find?type=social",
                );
                dispatch(setEvents(response.data));
            } catch (error) {
                console.error("Error al cargar las información", error);
            }
        };
        loadData();
    }, [dispatch])

    return (
        <div className="flex w-full h-full justify-center items-center space-x-[5%]">

            <img src={blackArrow} onClick={handlePrevius} alt="previus-icon" className="rotate-90 w-[20px] h-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />

            <div className='grid lg:grid-cols-3 items-end gap-2 w-full h-full'>
                {
                    events.slice(startIndex, endIndex).map((event, index) => {
                        return (
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