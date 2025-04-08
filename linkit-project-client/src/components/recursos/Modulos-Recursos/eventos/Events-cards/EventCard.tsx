import type React from "react"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./EventCard.css"

type EventCardProps = {
  image: string
  title: string
  category: string
  description: string
  link: string
  isEditing?: boolean
  createdDate?: string
  createdBy?: string
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

function EventCard({ 
  image, 
  title, 
  category, 
  description, 
  link, 
  isEditing,
  createdDate,
  createdBy 
}: EventCardProps) {
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

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (link.includes("youtube.com") || link.includes("youtu.be")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

      const slug = generateSlug(title)
      const videoId = getYoutubeId(link)
      const eventData = {
        title,
        description,
        category,
        videoUrl: link,
        image,
        slug,
        videoId,
        createdDate,
        createdBy
      }
      sessionStorage.setItem("eventData", JSON.stringify(eventData))

      setTimeout(() => {
        navigate(`/events/${slug}`, {
          state: {
            videoUrl: link,
            title,
            description,
            category,
            image,
            videoId,
            createdDate,
            createdBy
          },
        })
      }, 500)
    } else {
      window.open(link, "_blank")
    }
  }

  // Determinar si es un evento de YouTube o de otra plataforma
  const isYoutubeEvent = link.includes("youtube.com") || link.includes("youtu.be")

  // Determinar el tipo de esquema según el tipo de evento
  const schemaType = isYoutubeEvent ? "VideoObject" : "Event";
  
  // Obtener la URL de la imagen
  const imageUrl = image.includes("youtube") 
    ? `https://img.youtube.com/vi/${link.split("v=")[1]}/maxresdefault.jpg`
    : `https://res.cloudinary.com/dquhriqz3/image/upload/${image}`;

  return (
    <div 
      className="border-[2px] w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white dark:border-linkIt-400"
      itemScope
      itemType={`https://schema.org/${schemaType}`}
    >
      {/* Metadatos comunes */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      
      {/* Metadatos específicos según el tipo */}
      {isYoutubeEvent ? (
        // Metadatos para VideoObject
        <>
          <meta itemProp="uploadDate" content={createdDate || new Date().toISOString()} />
          <meta itemProp="thumbnailUrl" content={imageUrl} />
          <meta itemProp="embedUrl" content={`https://www.youtube.com/embed/${getYoutubeId(link)}`} />
          <meta itemProp="contentUrl" content={link} />
          
          {/* Información del autor/publisher */}
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content={createdBy || "LinkIt"} />
          </div>
          
          <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="LinkIt" />
            <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
              <meta itemProp="url" content="https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg" />
            </div>
          </div>
        </>
      ) : (
        // Metadatos para Event
        <>
          {createdDate && <meta itemProp="startDate" content={createdDate} />}
          <meta itemProp="url" content={link} />
          <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
          
          {/* Información del organizador */}
          <div itemProp="organizer" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="LinkIt" />
            <meta itemProp="url" content="https://www.linkit-hr.com" />
          </div>
          
          {/* Ubicación virtual */}
          <div itemProp="location" itemScope itemType="https://schema.org/VirtualLocation">
            <meta itemProp="url" content={link} />
          </div>
        </>
      )}
      
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
            itemProp="thumbnail"
          />
        ) : (
          <img
            src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
            alt={title.concat("Image")}
            className="w-full rounded-lg aspect-video bg-cover bg-center"
            itemProp="image"
          />
        )}
        <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
          <div className="flex flex-col">
            <span 
              className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center"
              itemProp="about"
            >
              {category}
            </span>
          </div>
          
          <span 
            className="font-bold subtitles-size line-clamp-3"
            itemProp="name"
          >
            {title}
          </span>
          <p 
            className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3"
            itemProp="description"
          >
            {description}
          </p>
          <p className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start">
            {t("Ver Grabación")}
          </p>
        </div>
      </motion.button>
    </div>
  )
}

export default EventCard