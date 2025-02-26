import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./EventCard.css"
import "../../ebooks/ebooksCards/ebooksCard.css"
import "../../eventos/Events-cards/EventCard.css"

type EventCardProps = {
  image: string
  title: string
  category: string
  description: string
  link: string
  isEditing?: boolean
}

const eventCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      type: "spring",
    },
  },
  exit: {
    x: -100,
    transition: {
      duration: 1,
      delay: 0.2,
      type: "spring",
    },
  },
}

function EventCard({ image, title, category, description, link, isEditing }: EventCardProps) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [key] = useState(Math.random())

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
  
    if (link.includes("youtube.com") || link.includes("youtu.be")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const slug = generateSlug(title);
      setTimeout(() => {
        navigate(`/events/${slug}`, {
          state: {
            videoUrl: link,
            title,
            description,
            category,
          },
        });
      }, 500);
    } else {
      window.open(link, "_blank");
    }
  };
  

  return (
    <div className="border-[2px] w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white dark:border-linkIt-400">
      <motion.button
        key={key}
        onClick={handleClick}
        className="w-full text-left"
        variants={isEditing ? {} : eventCardVariants}
        initial={isEditing ? {} : "hidden"}
        animate={isEditing ? {} : "visible"}
        whileHover={isEditing ? {} : { scale: 1.02, cursor: "pointer" }}
        whileTap={isEditing ? {} : { scale: 1 }}
        exit="exit"
      >
        {image.includes("youtube") ? (
          <div
            className="rounded-lg aspect-video bg-cover bg-center"
            style={{ backgroundImage: `url(https://img.youtube.com/vi/${link.split("v=")[1]}/maxresdefault.jpg)` }}
          />
        ) : (
          <img
            src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
            alt={title.concat("Image")}
            className="w-full rounded-lg aspect-video bg-cover bg-center"
          />
        )}

        <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
          <span className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
            {category}
          </span>

          <span className="font-bold subtitles-size line-clamp-3">{title}</span>
          <p className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3">{description}</p>
          <p className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start">
            {t("Ver Grabación")}
          </p>
        </div>
      </motion.button>
    </div>
  )
}

export default EventCard

