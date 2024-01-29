import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./ebooksCard.css";

type EbooksCardProps = {
  title: string;
  description: string;
  link: string;
  category: string;
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
}: EbooksCardProps): JSX.Element {
  const [key, setKey] = useState(Math.random());
  const { t } = useTranslation();
  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, link, category]); // re-render when these props change

  return (
    <motion.div
      key={key}
      className="border-[2px] w-full h-full rounded-xl font-montserrat bg-white"
      variants={cardVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
        <p className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
          {category}
        </p>
        <h1 className="font-bold subtitles-size line-clamp-3">{title}</h1>
        <p className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3">{description}</p>
        <motion.a
          href={link}
          className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start"
          target="_blank"
        >
          {t('Descargar')}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default EbooksCard;
