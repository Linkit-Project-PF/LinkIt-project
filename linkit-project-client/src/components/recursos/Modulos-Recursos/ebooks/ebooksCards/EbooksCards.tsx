import EbooksCard from "./EbooksCard"
import { useEffect, useState } from 'react'
import './ebooksCard.css'
import whiteArrow from "/Vectores/white-arrow.png";
import { setEbooks } from '../../../../../redux/features/ResourcesSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ResourceProps } from '../../../../Paneles/admin.types';

export type stateProps = {
    resources: {
        ebooks: ResourceProps[];
    };
  }

function EbooksCards() {
    const items: number = window.matchMedia("(max-width: 1023px)").matches ? 1 : 3;
    const [currentPage, setCurrentPage] = useState(0)
    const dispatch = useDispatch()
    const eBooks = useSelector((state: stateProps) => state.resources.ebooks);

    useEffect(() => {
        const loadData = async (): Promise<void> => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/posts/find?type=blog",
                );
                dispatch(setEbooks(response.data));
            } catch (error) {
                console.error("Error al cargar las información", error);
            }
        };
        loadData();
    }, [dispatch])


    const handleNext = () => {
        setCurrentPage(currentPage === Math.ceil(eBooks.length / items) - 1 ? 0 : currentPage + 1)
    }

    const handlePrevius = () => {
        setCurrentPage(currentPage === 0 ? Math.ceil(eBooks.length / items) - 1 : currentPage - 1)
    }

    const startIndex = currentPage * items
    const endIndex = startIndex + items


    return (
        <div className="flex w-full justify-center items-center space-x-[5%]">
            <img src={whiteArrow} onClick={handlePrevius} alt="previus-icon" className="rotate-90 w-[20px] ssm:w-[30px] justify-self-start ssm:justify-self-center cursor-pointer" />
            <div className='grid lg:grid-cols-3 items-center gap-2 w-full h-full'>
                {
                    eBooks.slice(startIndex, endIndex).map((ebook, index) => {
                        return (

                            <EbooksCard
                                title={ebook.title}
                                description={ebook.description}
                                link={ebook.link}
                                category={ebook.category}
                                key={index}
                            />
                        )
                    })
                }
            </div>
            <img onClick={handleNext} src={whiteArrow} alt="next-icon" className="-rotate-90 w-[20px] ssm:w-[30px] justify-self-start ssm:justify-self-center cursor-pointer" />
        </div>
    )
}

export default EbooksCards