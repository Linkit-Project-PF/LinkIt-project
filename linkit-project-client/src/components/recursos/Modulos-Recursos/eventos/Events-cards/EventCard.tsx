import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import "./EventCard.css";
import "../../ebooks/ebooksCards/ebooksCard.css"
import '../../eventos/Events-cards/EventCard.css'

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
  exit:{
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

  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, link, category]);

  return (
    <>
      <motion.div 
      className="border-[2px] h-[35.7rem] rounded-[7px] w-[22rem] flex flex-col font-montserrat lg-card"
      key={key}
      variants={eventCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        {image.includes("youtube") ? (
          <div
            className="bg-center bg-cover h-[31rem] rounded-[7px] w-full card-thumbnail"
            style={{ backgroundImage: `url(${videoToThumbnail(image)})` }}
          />
        ) : (
          <img src={image} alt="event image" className="h-[2rem] rounded-[7px] w-full" />
        )}
        <div className="flex flex-col h-[100%] p-[2rem] justify-between">
          <div>
            <p className="font-semibold text-[.9rem] border-[2px] border-linkIt-300 inline-flex p-[.3rem] rounded-[7px] category">
              {category}
            </p>
          </div>
          <h2 className=" font-bold text-[1.4rem] title">{title}</h2>
          <p className=" font-[500] description">{description}</p>
          <a href={link} target="_blank" className=" font-bold">
            Ver Grabación
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default EventCard;
