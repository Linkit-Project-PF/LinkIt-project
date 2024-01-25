import axios from "axios";
import { SUPERADMN_ID } from "../../../../../env.ts";
import { PostEntity } from "../types.blogs.ts";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogsCard from "./BlogsCard.tsx";
import blackArrow from "/Vectores/arrow.png";

function BlogsCards() {
  const [currentBlog, setCurrentBlog] = useState(0);
  const [blogs, setBlogs] = useState<PostEntity[]>([]);

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

  
  
  
  let blogsToShow = window.matchMedia("(max-width: 1023px)").matches ? 1 : 3;
  
  
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
      ...blogsToShowArray,
      ...blogs.slice(0, blogsToShow - blogsToShowArray.length),
    ];
  }


  return (
    <div className="flex w-full h-full justify-center items-center space-x-[5%]">
        <img src={blackArrow} onClick={handlePrev} alt="previus-icon" className="rotate-90 w-[20px] h-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />
        <div className='grid lg:grid-cols-3 items-center gap-2 w-full h-full'>
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
        <img onClick={handleNext} src={blackArrow} alt="next-icon" className="-rotate-90 w-[20px] h-[20px] justify-self-start ssm:justify-self-center cursor-pointer" />
      
    </div>
  );
}

export default BlogsCards;
