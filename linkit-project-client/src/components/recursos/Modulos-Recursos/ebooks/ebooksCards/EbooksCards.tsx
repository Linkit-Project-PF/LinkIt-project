import eBooks from '../../../../../Utils/ebooks.json'
import EbooksCard from "./EbooksCard"
import { useState } from 'react'
import './ebooksCard.css'

function EbooksCards() {
    const items: number = 3
    const [currentPage, setCurrentPage] = useState(0)

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevius = () => {
        setCurrentPage(currentPage - 1)
    }

    const startIndex = currentPage * items
    const endIndex = startIndex + items


  return (
    <div className="flex flex-row gap-[2rem] relative left-[0.5rem] cards-container">
        <button
        onClick={handlePrevius}
        disabled={currentPage === 0}
        className=" h-[2rem] self-center"
        >
            <img src="Vectores/previus.png" alt="previus" className='w-[5rem] lg:w-[6rem] xl:w-[8rem] previus' />
        </button>
        {
            eBooks.slice(startIndex, endIndex).map((ebook)=>{
                return(

                    <EbooksCard
                        title={ebook.title}
                        description={ebook.description}
                        link={ebook.link}
                        category={ebook.category}
                    />
                )  
            })
        }
        <button
        onClick={handleNext}
        disabled={endIndex > eBooks.length-1}
        className=" h-[2rem] self-center"
        >
            <img src="Vectores/next.png" alt="next" className='w-[5rem] lg:w-[6rem] xl:w-[8rem] next'/>
        </button>
    </div>
  )
}

export default EbooksCards