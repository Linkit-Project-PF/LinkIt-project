import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./ebooksCard.css";

type EbooksCardProps = {
  title: string;
  description: string;
  link: string;
  category: string;
  image?: string;
};

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6, // increase duration
      ease: "easeInOut", // change easing function
      type: "tween", // change transition type
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.6, // increase duration
      ease: "easeInOut", // change easing function
    },
  },
};

function EbooksCard({
  title,
  description,
  link,
  category,
  image,
}: EbooksCardProps): JSX.Element {
  const [key, setKey] = useState(Math.random());
  const { t } = useTranslation();
  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, link, category]); // re-render when these props change

  return (
    <motion.a
      key={key}
      className="border-[2px] w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white"
      variants={cardVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      href={link}
      target="_blank"
      whileHover={{ scale: 1.02, cursor: "pointer" }}
      whileTap={{ scale: 1 }}

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
        <motion.div
          
          className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start"
        >
          {t('Descargar')}
        </motion.div>
      </div>
    </motion.a>
  );
}

export default EbooksCard;
