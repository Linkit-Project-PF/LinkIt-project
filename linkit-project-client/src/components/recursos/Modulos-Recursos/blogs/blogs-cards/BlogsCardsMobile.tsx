import axios from "axios";
import { SUPERADMN_ID } from "../../../../../env.ts";
import { PostEntity } from "../types.blogs.ts";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogsCard from "./BlogsCard.tsx";
import blackArrow from "/Vectores/arrow.png";
import whiteArrow from "/Vectores/white-arrow.png"
import { RootState } from "../../../../../redux/types";
import { useSelector } from "react-redux";

function BlogsCardsMobile() {
  const [currentBlog, setCurrentBlog] = useState(0);
  const [blogs, setBlogs] = useState<PostEntity[]>([]);
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<PostEntity[]>("https://linkit-server.onrender.com/posts/find?type=blog", {
          headers: {"Authorization": `Bearer ${SUPERADMN_ID}`,
          'Accept-Language': sessionStorage.getItem('lang')}
        });
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  const handleNext = () => {
    setCurrentBlog(currentBlog === blogs.length - 1 ? 0 : currentBlog + 1);
  };

  const handlePrev = () => {
    setCurrentBlog(currentBlog === 0 ? blogs.length - 1 : currentBlog - 1);
  };
  




  return (
    <div className="flex w-full justify-center items-center">
      <button disabled={blogs.length <= 1}>
        <img src={isDarkMode ? whiteArrow : blackArrow} onClick={handlePrev} alt="previus-icon" className="rotate-90 w-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />
        </button>
        <div className='grid lg:grid-cols-3 items-end justify-center gap-2 w-full h-full'>
      {blogs.length > 0 && (
          <motion.div
            key={currentBlog}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <BlogsCard
              image={blogs[currentBlog].image}
              title={blogs[currentBlog].title}
              description={blogs[currentBlog].description}
              _id={blogs[currentBlog]._id}
              genre={blogs[currentBlog].category}
            />
          </motion.div>
        )
      }
    </div>
    <button disabled={blogs.length <= 1}>
        <img onClick={handleNext} src={isDarkMode ? whiteArrow : blackArrow} alt="next-icon" className="-rotate-90 w-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />
        </button>
    </div>
  );
}

export default BlogsCardsMobile;
