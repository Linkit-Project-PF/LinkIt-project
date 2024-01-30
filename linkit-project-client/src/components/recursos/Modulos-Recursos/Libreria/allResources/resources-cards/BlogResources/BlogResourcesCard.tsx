import { motion, Variants } from "framer-motion";
import "./BlogResources.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type BlogsCardProps = {
  _id: string;
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
  exit: {
    x: -100,
    transition: {
      duration: 1,
      delay: 0.2,
      type: "spring",
    },
  },
};

function BlogsResourceCard({
  image,
  title,
  description,
  genre,
  _id,
}: BlogsCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <motion.div
      className="border-[2px] w-full h-full rounded-xl font-montserrat bg-white dark:border-linkIt-400"
      variants={blogsCardVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      exit="exit"
    >
      {image && (
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={title}
          className={`w-[20rem]  rounded-lg  xs:h-[10rem] ssm:h-[15rem] md:h-[20rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem] bg-cover bg-center`}
        />
      )}
      <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
        <p className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
          {genre}
        </p>
        <h1 className="font-bold subtitles-size line-clamp-3">{title}</h1>

        <p className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3 pt-10">
          {description}
        </p>

        <motion.a
          className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start hover:cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
          onClick={() => {
            navigate(`/blog/${_id}`);
          }}
        >
          {t("Leer Nota")}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default BlogsResourceCard;
