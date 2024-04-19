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
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        }
      );
      setBlog(data);
    })();
  }, []);

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
            src={`https://res.cloudinary.com/dquhriqz3/image/upload/${blog?.image}`}
            alt={blog?.title}
            className=" w-full lg:w-[90%] aspect-video rounded-xl my-[5%] "
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
              <p className="text-linkIt-400 text-size dark:text-white ml-[5%]">
                {header.body}
              </p>
              <div className="flex justify-center items-center">
                {header?.sectionImage && (
                  <img
                    className="h-[8rem] xs:h-[10rem] ssm:h-[15rem] md:h-[24rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[30rem] w-full xl:w-[80%] rounded-xl my-[5%]"
                    src={`https://res.cloudinary.com/dquhriqz3/image/upload/${header.sectionImage}`}
                    alt={header.head.concat("image")}
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
