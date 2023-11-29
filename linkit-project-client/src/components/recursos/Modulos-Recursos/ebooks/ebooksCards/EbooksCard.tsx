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
  const {t} = useTranslation();
  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, link, category]); // re-render when these props change

  return (
    <motion.div
      key={key}
      className="bg-white w-full border-[2px] border-linkIt-500 h-[0vh] xl:h-[42vh] font-montserrat rounded-[0.75rem] flex flex-col justify-between p-[2rem] lg:p-[1.5rem] lg:h-[55vh] container-ebook"
      variants={cardVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <div>
        <p className="border-[2px] text-[0.8rem] mb-[1rem] h-[25px] lg:h-[10px] border-linkIt-300 rounded-[10px] p-[0.8rem] lg:p-[0.7rem] font-semibold items-center justify-center whitespace-nowrap inline-flex lg:text-[0.7rem] category">
          {category}
        </p>
        <h1 className="font-bold text-[1.3rem] w-[100%] mb-[0.9rem] lg:text-[1rem] lg:mt-[0.5rem] title">{title}</h1>
        <p className="font-semibold text-[0.8rem] mb-[1.5rem] xl:mb-[-1rem] description">{description}</p>
      </div>
      <motion.a 
      href={link} 
      className="font-bold link-ebook" 
      target="_blank"
      >
        {t('Descargar')}
      </motion.a>
    </motion.div>
  );
}

export default EbooksCard;
