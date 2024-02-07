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

function BlogsCards() {
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

  
  
  
  let blogsToShow = 3;
  
  
  const startIndex = currentBlog * blogsToShow;
  const endIndex = startIndex + blogsToShow;
  
  let blogsToShowArray = blogs.slice(startIndex, endIndex);



  const handlePrev = () => {
    setCurrentBlog(currentBlog === 0 ? Math.ceil(blogs.length / blogsToShow) - 1 : currentBlog - 1);
  };

  const handleNext = () => {
    setCurrentBlog(currentBlog === Math.ceil(blogs.length / blogsToShow) - 1 ? 0 : currentBlog + 1);
  };

  if (blogsToShowArray.length < blogsToShow) {
    blogsToShowArray = [
      ...blogs.slice(0, blogsToShow - blogsToShowArray.length),
    ];
  }


  return (
    <div className="flex w-full justify-center items-center">
        <img src={isDarkMode ? whiteArrow : blackArrow} onClick={handlePrev} alt="previus-icon" className="rotate-90 w-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />
        <div className='grid grid-cols-3 items-end justify-items-center gap-3 w-full h-full mx-3'>
      {blogsToShowArray.map((blog, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <BlogsCard
              image={blog.image}
              title={blog.title}
              description={blog.description}
              _id={blog._id}
              genre={blog.category}
            />
          </motion.div>
        );
      })}
    </div>
        <img onClick={handleNext} src={isDarkMode ? whiteArrow : blackArrow} alt="next-icon" className="-rotate-90 w-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />
      
    </div>
  );
}

export default BlogsCards;