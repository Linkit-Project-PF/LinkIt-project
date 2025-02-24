import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./EbookResources.css";
import { useNavigate } from "react-router-dom";

type EbooksCardProps = {
  title: string;
  description: string;
  link: string;
  category: string;
  image?: string;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      delay: 0.2,
    },
  },
  exit: {
    x: 100,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

function EbookResourcesCard({
  title,
  description,
  link,
  category,
  image,
}: EbooksCardProps): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleClick = () => {
    const slug = generateSlug(title)
   
    navigate(`/ebook/${slug}`, { state: { pdfUrl: link } });
  };
  return (
    <motion.div
      className="border-[2px] w-full h-fit rounded-xl font-montserrat bg-white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
    >
      <motion.a
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        exit="exit"
        target="_blank"
        onClick={handleClick}
      >
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={title}
          className={`w-full rounded-lg xs:h-[10rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem]  bg-cover bg-center`}        />
        <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
          <span className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center">
            {category}
          </span>
          <span className="font-bold subtitles-size line-clamp-3">{title}</span>
          <p className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3 mt-6">
            {description}
          </p>
          <motion.p className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold xs:mt-3 place-self-end justify-self-start">
            {t("Descargar")}
          </motion.p>
        </div>
      </motion.a>
    </motion.div>
  );
}

export default EbookResourcesCard;
