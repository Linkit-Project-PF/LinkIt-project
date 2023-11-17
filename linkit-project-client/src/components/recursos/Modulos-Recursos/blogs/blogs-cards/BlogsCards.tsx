import blogs from "../../../../../Utils/blogs.json";
import { useState } from "react";
import { motion } from "framer-motion";
import BlogsCard from "./BlogsCard";
import "./BlogsCards.css";

function BlogsCards() {
  const [currentBlog, setCurrentBlog] = useState(0);

  const handlePrev = () => {
    if (currentBlog > 0) {
      setCurrentBlog(currentBlog - 1);
    }
  };

  const handleNext = () => {
    if (currentBlog < Math.ceil(blogs.length / 3) - 1) {
      setCurrentBlog(currentBlog + 1);
    } else {
      setCurrentBlog(0);
    }
  };

  const blogsToShow = 3;
  const startIndex = currentBlog * blogsToShow;
  let endIndex = startIndex + blogsToShow;

  let blogsToShowArray = blogs.slice(startIndex, endIndex);

  if (blogsToShowArray.length < blogsToShow) {
    blogsToShowArray = [
      ...blogsToShowArray,
      ...blogs.slice(0, blogsToShow - blogsToShowArray.length),
    ];
  }

  return (
    <div className="flex flex-row gap-[2rem] justify-center cards-container">
      <button onClick={handlePrev} className=" h-[2rem] self-center">
        <img src="Vectores/previus.png" alt="previus-icon" />
      </button>
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
              link={blog.link}
              genre={blog.genre}
            />
          </motion.div>
        );
      })}
      <button onClick={handleNext} className=" h-[2rem] self-center">
        <img src="Vectores/next.png" alt="next-icon" />
      </button>
    </div>
  );
}

export default BlogsCards;
