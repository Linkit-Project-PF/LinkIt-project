import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SUPERADMN_ID } from "../../../../../../env";

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

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://linkit-server.onrender.com/posts/find?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
            'Accept-Language': sessionStorage.getItem('lang')
          },
        }
      );
      setBlog(data);
    })();
  }, []);

  return (
    <div className="font-montserrat lg:mr-[5%]">
      <h3 className="border-[2px] text-size border-linkIt-300 rounded-[8px] p-1 font-bold inline-flex dark:border-linkIt-200 dark:bg-white">{blog?.category}</h3>
      <h2 className="titles-size my-[5%] font-semibold dark:text-white">{blog?.title}</h2>
      <p className="subtitles-size text-linkIt-400 dark:text-white">{blog?.description}</p>
      <div className="flex justify-center items-center w-full">
        {blog?.image && (
          <img
            src={`https://res.cloudinary.com/dquhriqz3/image/upload/${blog?.image}`}
            alt={blog?.title}
            className="h-[8rem] xs:h-[10rem] ssm:h-[16rem] md:h-[24rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[30rem] w-full xl:w-[80%] rounded-xl my-[5%]"
          />
        )}
      </div>
      <ul className="flex flex-col w-full gap-5">
        {blog?.headers?.map((header: Header, index: number) => {
          return (
            <div className="flex flex-row gap-[1.5rem] " key={index}>
              {header.head !== "" ?
                <div className="font-bold bg-linkIt-300 text-white flex items-center justify-center text-base ssm:text-xl xl:text-2xl h-8 w-8 ssm:h-10 ssm:w-10 xl:w-12 xl:h-12 2xl:h-16 2xl:w-16 rounded-full p-2 ssm:p-4">
                  {index + 1}
                </div>
                : 
                <div>
                </div>
              }
              <li key={index} className="flex flex-col w-full">
                <h3 className="text-linkIt-300 font-[600] subtitles-size mb-[5%]">{header.head}</h3>
                <p className="text-linkIt-400 text-size dark:text-white">{header.body}</p>
                <div className="flex justify-center items-center">
                  {header?.sectionImage && (
                    <img
                      className="h-[8rem] xs:h-[10rem] ssm:h-[15rem] md:h-[24rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[30rem] w-full xl:w-[80%] rounded-xl my-[5%]"
                      src={`https://res.cloudinary.com/dquhriqz3/image/upload/${header.sectionImage}`}
                      alt={header.head.concat('image')} />
                  )}
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  )
}

export default BlogInfo