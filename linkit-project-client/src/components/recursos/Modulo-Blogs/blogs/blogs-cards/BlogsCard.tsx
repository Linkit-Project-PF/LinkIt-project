import { motion } from 'framer-motion';
import "././BlogsCards.css";

type BlogsCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  genre: string;
};

function BlogsCard({ image, title, description, link, genre }: BlogsCardProps) {
  return (
    <motion.div
      className="flex flex-col border-[0.13rem] w-[23rem] rounded-[0.625rem] font-montserrat text-[1.5rem] h-[83vh] items-center justify-center bg-white shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-[100%] h-[12rem] rounded-[0.625rem]"
      />
      <div className="p-[3rem] flex flex-col flex-grow justify-between">
        <div>
          <p className="border-[2px] text-[0.8rem] w-[30%] mb-[10px] h-[25px] border-linkIt-300 rounded-[10px] p-[0.7rem] font-semibold flex items-center justify-center ">{genre}</p>
          <h1 className="font-bold w-[18rem] text-[1.3rem]">{title}</h1>
          <p className="font-semibold text-[0.9rem] mt-[15px] line-clamp-3">{description}</p>
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