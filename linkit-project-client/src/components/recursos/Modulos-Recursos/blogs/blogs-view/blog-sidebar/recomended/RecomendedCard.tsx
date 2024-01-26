import { motion, Variants } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";


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
  }

}


function RecomendedCard({ title, description, image, genre, _id }: BlogsCardProps) {
  const { t } = useTranslation()
  const navigate = useNavigate();

  
  const handleClick = () => {
    navigate(`/blog/${_id}`)
    window.location.reload();
  }

  return (
    <motion.div
      className="flex flex-col border-[0.13rem] w-[20vw] h-full rounded-[0.625rem] font-montserrat items-center justify-center bg-white mt-[10%]"
      variants={blogsCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {image && (
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={title}
          className={`w-full h-[15rem] lg:h-[8rem] xl:h-[20rem] rounded-[0.625rem] ${title.length > 20 ? "xl:-mt-4" : ""
            } image`}
        />
      )}
      <div className="p-[3rem] flex flex-col flex-grow w-full justify-between lg:p-[1.5rem] xl:p-[1.8rem] ">
        <div>
          <p className="border-[2px] text-[0.8rem] mb-[1rem] h-[25px] border-linkIt-300 rounded-[10px] p-[0.8rem] lg:p-[.7rem] font-semibold items-center justify-center whitespace-nowrap inline-flex lg:text-[0.7rem] ">
            {genre}
          </p>
          <h1 className="font-bold text-[1rem] lg:text-[.8rem]">
            {title}
          </h1>
          <p className="font-semibold text-[0.9rem] lg:text-[.8rem] w-full mt-[15px] xl:mb-[1rem] ">
            {description}
          </p>
        </div>
        <motion.a
          onClick={handleClick}
          className="text-[1rem] font-bold lg:text-[.8rem] lg:mt-[1rem] "
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
        >
          {t('Leer Nota')}
        </motion.a>
      </div>
    </motion.div>
  )
}

export default RecomendedCard