import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import arrowImage from '../../public/Vectores/white-arrow.png'
import "./topButton.css"

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const navigateToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const threshold = 200
      setIsVisible(currentScrollY > threshold)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div>
      {
        isVisible &&
        <motion.button
          onClick={navigateToTop}
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          className="top-button"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
          }}
        >
          <img
            className="arrow-image"
            src={arrowImage}
            alt="" />
        </motion.button>
      }
    </div>
  )
}
