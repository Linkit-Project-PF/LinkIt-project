import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./EbookResources.css";

type EbooksCardProps = {
  title: string;
  description: string;
  link: string;
  category: string;
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
    }
  }
}


function EbookResourcesCard({
  title,
  description,
  link,
  category,
}: EbooksCardProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        className="bg-white w-full border-[2px] border-linkIt-500 h-[50vh] xl:h-[17rem] font-montserrat rounded-[0.75rem] flex flex-col justify-between p-[2rem] lg:p-[1.5rem] lg:h-[55vh] container-ebook-resources"
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        exit="exit"
      >
        <div>
          <p className="border-[2px] text-[0.8rem] mb-[1rem] h-[25px] lg:h-[10px] border-linkIt-300 rounded-[10px] p-[0.8rem] lg:p-[0.7rem] font-semibold items-center justify-center whitespace-nowrap inline-flex lg:text-[0.7rem] category-resources">
            {category}
          </p>
          <h1 className="font-bold text-[1.3rem] w-[100%] mb-[0.9rem] lg:text-[1rem] lg:mt-[0.5rem] title-resources">
            {title}
          </h1>
          <p className="font-semibold text-[0.8rem] mb-[1.5rem] xl:mb-[-1rem] description-resources">
            {description}
          </p>
        </div>
        <motion.a
          href={link}
          className="font-bold"
          target="_blank"
        >
          {t('Descargar')}
        </motion.a>
      </motion.div>
    </>
  );
}

export default EbookResourcesCard;
