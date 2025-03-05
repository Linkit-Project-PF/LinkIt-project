import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { motion } from "framer-motion";

const SUPERADMN_ID = import.meta.env.VITE_SUPERADMN_ID;

interface Header {
  head: string;
  body: string;
  sectionImage: string;
}


interface Blog {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  headers: Header[];
}

function BlogInfo() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://linkit-server.onrender.com/posts/find?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        setBlog(data);
      } catch (error) {
        console.error("Error al cargar el blog:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (blog) {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [blog]);

  const handleImageLoad = () => {
    if(imagesLoaded < 0) {
      setImagesLoaded((prev) => prev + 1);
    }
 
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-50 px-4">
        <motion.img
          src="/Linkit-logo/linkit-logo-blue.svg"
          alt="Linkit Logo"
          className="w-24 h-24"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <motion.h1
          className="text-lg font-semibold text-gray-700"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Cargando contenido...
        </motion.h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-montserrat w-full px-4 md:px-10 lg:px-16"
    >
      <span className="border-2 text-sm border-linkIt-300 rounded-lg px-3 py-1 font-bold dark:border-blue-400 dark:bg-white">
        {blog?.category}
      </span>
      <motion.h1
        className="text-3xl font-semibold my-4 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {blog?.title}
      </motion.h1>
      <p className="text-lg text-gray-600 dark:text-white">
        {blog?.description}
      </p>
      {blog?.image && (
        <motion.img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${blog.image}`}
          alt={blog.title}
          className="w-full lg:w-4/5 aspect-video rounded-xl my-6 object-cover mx-auto" // Centrar imagen

          onLoad={handleImageLoad}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <ul className="flex flex-col gap-6">
        {blog?.headers?.map((header, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col"
          >
            {header.head && (
              <div className="flex items-center">

                <span className="font-bold bg-linkIt-300 text-white px-3 py-1 rounded-full mr-3 ml-2">

                  {index + 1}
                </span>
                <span className="text-linkIt-300 font-semibold text-lg">
                  {header.head}
                </span>
              </div>
            )}
            <p className="text-gray-700 dark:text-white mt-2">
              {HTMLReactParser(header.body)}
            </p>
            {header.sectionImage && (
              <motion.img
                src={`https://res.cloudinary.com/dquhriqz3/image/upload/${header.sectionImage}`}
                alt={`${header.head} image`}

                className="w-full lg:w-3/4 rounded-xl my-4 object-cover mx-auto"
                onLoad={handleImageLoad}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
  
}

export default BlogInfo;
