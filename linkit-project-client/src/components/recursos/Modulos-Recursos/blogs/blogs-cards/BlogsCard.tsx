import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type BlogsCardProps = {
  image: string;
  title: string;
  description: string;
  _id: string;
  genre: string;
  isEditing?: boolean;
};

const blogsCardVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.2, type: "spring" },
  },
  exit: { x: -100, transition: { duration: 1, delay: 0.2, type: "spring" } },
};

function BlogsCard({
  image,
  title,
  description,
  _id,
  genre,
  isEditing,
}: BlogsCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate()

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setTimeout(() => {
      navigate(`/blog/${_id}/${generateSlug(title)}`)
    }, 500) 
  }


  return (
    <motion.article
      className="border-2 w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white dark:border-linkIt-400"
      variants={isEditing ? {} : blogsCardVariants}
      initial={isEditing ? {} : "hidden"}
      animate={isEditing ? {} : "visible"}
      whileHover={isEditing ? {} : { scale: 1.02, cursor: "pointer" }}
      whileTap={isEditing ? {} : { scale: 1 }}
      exit="exit"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <button
        onClick={handleClick}
        rel="noopener noreferrer"
        className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start"
      >
        {t("Leer Nota")}

        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={`Imagen destacada del blog: ${title}`}
          className="w-full rounded-lg aspect-video bg-cover bg-center"
          itemProp="image"
        />
      </button>
      <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
        <p
          className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold"
          itemProp="articleSection"
        >
          {genre}
        </p>
        <h2
          className="font-bold subtitles-size line-clamp-3 text-left"
          itemProp="headline"
        >
          {title}
        </h2>
        <p
          className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3 text-left"
          itemProp="description"
        >
          {description}
        </p>
        <a
          href={`/blog/${_id}/${generateSlug(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start"
        >
          {t("Leer Nota")}
        </a>
      </div>
    </motion.article>
  );
}

export default BlogsCard;
