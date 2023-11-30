import axios from "axios";
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SUPERADMN_ID } from "../../../../../../env";

interface Header {
    title: string;
    description: string;
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
          headers: { Authorization: `Bearer ${SUPERADMN_ID}` },
        }
      );
      setBlog(data);
    })();
  }, []);

  return (
    <div className="mt-[6rem] font-montserrat p-[5%]">
    <h3 className="border-[2px] border-linkIt-300 rounded-[8px] px-[1rem] py-[.5rem] font-bold inline-flex">{blog?.category}</h3>
    <h2 className="my-[2.5%] text-2xl font-bold max-w-[45%]">{blog?.title}</h2>
    <p className="text-xl max-w-[50%] text-linkIt-400 font-[500] ">{blog?.description}</p>
    <img src={blog?.image} alt={blog?.title} className="mb-[5%] mt-[2%] rounded-[18px]" />
    <ul className="flex flex-col gap-[3rem] w-full">
      {blog?.headers?.map((header: Header, index: number) => {
        return (
          <div className="flex flex-row gap-[1.5rem]">
            <div className="font-bold bg-linkIt-300 text-white text-[1.5rem] w-[3rem] h-[3rem] rounded-full flex flex-col justify-center items-center ">
              {index + 1}
            </div>
          <li key={index} className="flex flex-col w-full gap-[2%]">
            <h3 className="text-linkIt-300 font-[600] text-2xl">{header.title}</h3>
            <p className="text-linkIt-400 font-[500] max-w-[45%]">{header.description}</p>
          </li>
          </div>
        );
      })}
    </ul>
  </div>
  )
}

export default BlogInfo