import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import "././BlogsCards.css";

type BlogsCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  genre: string;
};

const blogsCardVariants: Variants = {
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

function BlogsCard({ image, title, description, link, genre }: BlogsCardProps) {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, link, genre]);

  return (
    <motion.div 
    className="flex flex-col border-[0.13rem] w-screen lg:w-[17rem] xl:w-[21rem] rounded-[0.625rem] font-montserrat text-[1.5rem] h-screen xl:h-[33rem] lg:h-[89vh] items-center justify-center bg-white card-container"
    key={key}
    variants={blogsCardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-[12rem] rounded-[0.625rem] ${
          title.length > 20 ? "xl:-mt-4" : ""
        }`}
      />
      <div className="p-[3rem] flex flex-col flex-grow justify-between lg:w-full lg:p-[1rem] xl:p-[1.8rem]">
        <div>
          <p className="border-[2px] text-[0.8rem] mb-[10px] xl:mb-[1.5rem] h-[25px] border-linkIt-300 rounded-[10px] p-[0.8rem] font-semibold items-center justify-center whitespace-nowrap inline-flex lg:text-[0.7rem]">
            {genre}
          </p>
          <h1 className="font-bold w-full text-[1.3rem] lg:text-[1rem] xl:w-[17rem]">
            {title}
          </h1>
          <p className="font-semibold text-[0.9rem] mt-[15px] xl:mb-[1rem] xl:w-[17rem]">
            {description}
          </p>
        </div>
        <motion.a
          href={link}
          target="_blank"
          className="text-[1rem] font-bold "
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
        >
          Leer Nota
        </motion.a>
      </div>
    </motion.div>
  );
}

export default BlogsCard;