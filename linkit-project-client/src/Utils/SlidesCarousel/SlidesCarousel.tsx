import blackArrow from "/Vectores/arrow.png";
import whiteArrow from "/Vectores/white-arrow.png";
import { useState } from "react";




export default function SlidesCarousel(array: Array<any>) {
    const [toShow, setToShow] = useState(array[0])

    const prev = () => {
        if (toShow === array[0]) {
            setToShow(array[array.length - 1])
        } else {
            setToShow(array[array.indexOf(toShow) - 1])
        }
     }

     const next = () => {
        if (toShow === array[array.length - 1]) {
            setToShow(array[0])
        } else {
            setToShow(array[array.indexOf(toShow) + 1])
        }
      }

    return (
        <div className="grid grid-cols-3">
            <img src={blackArrow} onClick={prev} alt="previous" />

            <img src={blackArrow} onClick={next} alt="next" />
        </div>

    )
 }