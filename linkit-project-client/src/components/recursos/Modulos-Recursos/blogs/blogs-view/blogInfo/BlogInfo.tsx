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
  const totalImages = blog?.headers.filter((h) => h.sectionImage).length || 0;

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
    if (blog && !blog.image && totalImages === 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [blog]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded >= totalImages + (blog?.image ? 1 : 0)) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [imagesLoaded, totalImages, blog?.image]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-gray-50 px-4">
        {/* Logo girando */}
        <motion.img
          src="/Linkit-logo/linkit-logo-blue.svg"
          alt="Linkit Logo"
          className="w-24 h-24"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
  
        {/* Texto animado */}
        <motion.h1
          className="text-lg font-semibold text-gray-700"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Cargando contenido...
        </motion.h1>
  
        {/* Barra de carga centrada */}
        <div className="w-full max-w-md h-2 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }
  

  return (
    <div className="font-montserrat lg:mr-[5%] grid w-full">
      <span className="border-[2px] text-size border-linkIt-300 rounded-[8px] p-1 font-bold inline-flex dark:border-linkIt-200 dark:bg-white justify-self-start">
        {blog?.category}
      </span>
      <span className="titles-size my-[5%] font-semibold dark:text-white">
        {blog?.title}
      </span>
      <p className="subtitles-size text-linkIt-400 dark:text-white">
        {blog?.description}
      </p>
      <div className="flex justify-center items-center w-full">
        {blog?.image && (
          <img
            src={`https://res.cloudinary.com/dquhriqz3/image/upload/${blog.image}`}
            alt={blog.title}
            className="w-full lg:w-[90%] aspect-video rounded-xl my-[5%]"
            onLoad={handleImageLoad}
          />
        )}
      </div>
      <ul className="flex flex-col w-full gap-5">
        {blog?.headers?.map((header: Header, index: number) => {
          let headerIndex = index + 1;
          const headerWithHead = blog.headers.filter((h) => h.head !== "");
          const headerWithHeadIndex = headerWithHead.findIndex(
            (h) => h === header
          );
          if (headerWithHeadIndex !== -1) {
            headerIndex = headerWithHeadIndex + 1;
          }
          return (
            <li className="flex flex-col w-full mb-[3%]" key={index}>
              <div className="flex items-center mb-1">
                {header.head !== "" && (
                  <div className="font-bold bg-linkIt-300 text-white flex items-center justify-center subtitles-size h-fit rounded-full px-2 ssm:px-3 aspect-square mr-2">
                    {headerIndex}
                  </div>
                )}
                {header.head !== "" && (
                  <span className="text-linkIt-300 font-[600] subtitles-size ml-[1%]">
                    {header.head}
                  </span>
                )}
              </div>
              <div className="text-linkIt-400 text-size dark:text-white ml-[5%]">
                {HTMLReactParser(header.body)}
              </div>
              <div className="flex justify-center items-center">
                {header?.sectionImage && (
                  <img
                    className="h-[8rem] xs:h-[10rem] ssm:h-[15rem] md:h-[24rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[30rem] w-full xl:w-[80%] rounded-xl my-[5%]"
                    src={`https://res.cloudinary.com/dquhriqz3/image/upload/${header.sectionImage}`}
                    alt={header.head.concat(" image")}
                    onLoad={handleImageLoad}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogInfo;
