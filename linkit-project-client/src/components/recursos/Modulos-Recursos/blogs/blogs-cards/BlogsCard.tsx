import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type BlogsCardProps = {
  image: string;
  title: string;
  description: string;
  _id: string;
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

function BlogsCard({ image, title, description, _id, genre }: BlogsCardProps) {
  const [key, setKey] = useState(Math.random());
  const{t} = useTranslation()
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${_id}`);
  }

  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, _id, genre]);

  return (
    <motion.div 
    className="border-[2px] w-full h-full rounded-xl font-montserrat  bg-white"
    variants={blogsCardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    key={key}
    >
      <img
        src={image}
        alt={title}
        className={`w-full rounded-xl h-[6rem] xs:h-[10rem] ssm:h-[15rem] md:h-[20rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem] bg-cover bg-center ${
          title.length > 20 ? "xl:-mt-4" : ""
        } image`}
      />
      <div className="grid justify-items-start h-full p-[7%]">
        
          <p className="border-[1px] text-[0.6rem] xs:text-[0.8rem] ssm:text-[1rem] md:text-[1.3rem] border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
            {genre}
          </p>
          <h1 className="font-bold text-[0.9rem] xs:text-[1.2rem] ssm:text-[1.5rem] md:text-[1.8rem]">
            {title}
          </h1>
          <p className="font-semibold text-[0.6rem] xs:text-[0.8rem] ssm:text-[1rem] md:text-[1.3rem]">
            {description}
          </p>
        
        <motion.a
          onClick={handleClick}
          className="text-[0.6rem] xs:text-[0.8rem] ssm:text-[1rem] md:text-[1.3rem] font-bold mt-2 xs:mt-3"
          whileHover={{ scale: 1.02, cursor: 'pointer' }}
          whileTap={{ scale: 1 }}
        >
          {t('Leer Nota')}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default BlogsCard;
