import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import "./EventCard.css";
import "../../ebooks/ebooksCards/ebooksCard.css"
import '../../eventos/Events-cards/EventCard.css'
import { useTranslation } from "react-i18next";


type EventCardProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
};

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
  }
}

function EventCard({
  image,
  title,
  category,
  description,
  link,
}: EventCardProps) {
  const videoToThumbnail = (link: string) => {
    const videoId = link.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  const { t } = useTranslation();
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, link, category]);

  return (
    <motion.div
      className="border-[2px] w-full h-full rounded-xl font-montserrat items-center justify-center bg-white"
      key={key}
      variants={eventCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {image.includes("youtube") ? (
        <div
          className="w-full rounded-xl h-[6rem] xs:h-[10rem] ssm:h-[15rem] md:h-[20rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${videoToThumbnail(image)})` }}
        />
      ) : (
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={title.concat('Image')}
          className="w-full rounded-xl h-[6rem] xs:h-[10rem] ssm:h-[15rem] md:h-[20rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem] bg-cover bg-center" />
      )}

      <div className="flex flex-col justify-start h-full p-[7%]">
        <p className="border-[1px] text-[0.6rem] xs:text-[0.8rem] ssm:text-[1rem] md:text-[1.3rem] lg:text-[0.9rem] border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center w-fit">
          {category}
        </p>

        <h2 className="font-bold text-[0.9rem] xs:text-[1.2rem] ssm:text-[1.5rem] md:text-[1.8rem] lg:text-[1.5rem]">{title}</h2>
        <p className="font-semibold text-[0.6rem] xs:text-[0.8rem] ssm:text-[1rem] md:text-[1.3rem] lg:text-[1rem]">{description}</p>
        <a href={link} target="_blank" className="text-[0.6rem] xs:text-[0.8rem] ssm:text-[1rem] md:text-[1.3rem] lg:text-[0.9rem] font-bold mt-2 xs:mt-3">
          {t('Ver Grabación')}
        </a>
      </div>
    </motion.div>

  );
}

export default EventCard;
