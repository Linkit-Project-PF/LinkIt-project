import { motion } from "framer-motion"

interface SplitTextProps {
  text: string
  className?: string
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown"
  staggerChildren?: number
}

const SplitText = ({ text, className = "", animation = "fadeIn", staggerChildren = 0.02 }: SplitTextProps) => {
  // Split text into an array of characters
  const characters = text.split("")

  // Animation variants
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
  }

  // Select the animation variant
  const selectedAnimation = animations[animation] || animations.fadeIn

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
      },
    },
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={selectedAnimation}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default SplitText
