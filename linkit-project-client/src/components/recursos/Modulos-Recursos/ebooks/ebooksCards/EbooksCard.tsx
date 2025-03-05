import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import "./ebooksCard.css"

type EbooksCardProps = {
  title: string
  description: string
  link: string
  category: string
  image?: string
  isEditing?: boolean
}

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
}

function EbooksCard({ title, description, link, category, image, isEditing }: EbooksCardProps): JSX.Element {
  const [key, setKey] = useState(Math.random())
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    setKey(Math.random())
  }, []) 

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    const slug = generateSlug(title)
    const ebookData = {
      title,
      description,
      link,
      category,
      image,
      slug,
    }
    sessionStorage.setItem("ebookData", JSON.stringify(ebookData))

    setTimeout(() => {
      navigate(`/ebook/${slug}`, {
        state: {
          pdfUrl: link,
          title,
          description,
          category,
          image,
        },
      })
    }, 500)
  }
    setTimeout(() => {
      navigate(`/ebook/${slug}`, {
        state: {
          pdfUrl: link,
          title,
          description,
          category,
          image,
        },
      })
    }, 500)
  }
  return (
    <div className="border-[2px] w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white">
      <motion.a
        key={key}
        className=""
        variants={isEditing ? {} : cardVariants}
        initial={isEditing ? {} : "initial"}
        animate={isEditing ? {} : "animate"}
        whileHover={isEditing ? {} : { scale: 1.02, cursor: "pointer" }}
        whileTap={isEditing ? {} : { scale: 1 }}
        exit={"exit"}
        onClick={handleClick}
      >
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={title}
          className={`w-full rounded-lg aspect-video bg-cover bg-center`}
        />
        <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
          <span className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
            {category}
          </span>
          <span className="font-bold subtitles-size line-clamp-3">{title}</span>
          <p className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3">{description}</p>
          <motion.div className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start">
            {t("Descargar")}
          </motion.div>
        </div>
      </motion.a>
    </div>
  )
}

export default EbooksCard

