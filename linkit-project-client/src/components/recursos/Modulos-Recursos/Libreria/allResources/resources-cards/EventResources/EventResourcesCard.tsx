import { motion, Variants } from "framer-motion";
import './EventResourcesCard.css'

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

function EventResourceCard({
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

  return (
    <>
      <motion.div 
      className="border-[2px] h-[30rem] rounded-[7px] w-full flex flex-col font-montserrat lg-card-resources"
      variants={eventCardVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{once: true}}
      exit="exit"
      >
        {image.includes("youtube") ? (
          <div
            className="bg-center bg-cover h-[31rem] rounded-[7px] w-full card-thumbnail-resources"
            style={{ backgroundImage: `url(${videoToThumbnail(image)})` }}
          />
        ) : (
          <img src={image} alt="event image" className="h-[20rem] rounded-[7px] w-full" />
        )}
        <div className="flex flex-col h-[100%] p-[2rem]">
          <div>
            <p className="font-semibold text-[.9rem] border-[2px] border-linkIt-300 inline-flex p-[.3rem] rounded-[7px] category-resources">
              {category}
            </p>
          </div>
          <h2 className="mt-[1rem] font-bold text-[1.1rem] title">{title}</h2>
          <p className="mt-[2rem] font-[500] description-resources">{description}</p>
          <a href={link} target="_blank" className="mt-[2rem] font-bold">
            Ver Grabación
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default EventResourceCard;
