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
  exit: {
    x: -100,
    transition: {
      duration: 1,
      delay: 0.2,
      type: "spring",
    },
  },
};

function BlogsCard({ image, title, description, _id, genre }: BlogsCardProps) {
  const [key, setKey] = useState(Math.random());
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${_id}`);
  };

  useEffect(() => {
    setKey(Math.random()); // change key to force re-render
  }, [title, description, _id, genre]);

  return (
    <motion.button
      className="border-[2px] w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white dark:border-linkIt-400"
      variants={blogsCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={key}
      whileHover={{ scale: 1.02, cursor: "pointer" }}
      onClick={handleClick}
      whileTap={{ scale: 1 }}
    >
      <img
        src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
        alt={title}
        className={`w-full rounded-lg aspect-video bg-cover bg-center`}
      />
      <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
        <p className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
          {genre}
        </p>
        <span className="font-bold subtitles-size line-clamp-3">{title}</span>
        <span className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3">
          {description}
        </span>

        <motion.p
          className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start"
         
        >
          {t("Leer Nota")}
        </motion.p>
      </div>
    </motion.button>
  );
}

export default BlogsCard;
