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
      className="border-[2px] w-[23vw] h-full rounded-xl font-montserrat bg-white dark:border-linkIt-200 mb-10"
      variants={blogsCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {image && (
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={title}
          className="w-full rounded-lg h-[6rem] xs:h-[10rem] ssm:h-[15rem] md:h-[20rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem] bg-cover bg-center"
        />
      )}
      <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">

        <span className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
          {genre}
        </span>
        <span className="font-bold subtitles-size line-clamp-3">
          {title}
        </span>
        <p className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3 mt-8">
          {description}
        </p>
        <motion.a
          onClick={handleClick}
          className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start hover:cursor-pointer"
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