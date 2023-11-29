import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SUPERADMN_ID } from "../../../../../env";
import { PostEntity } from "../types.blogs";

export default function BlogView() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<PostEntity | null>(null);

  console.log(id)
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://linkit-server.onrender.com/posts/find?id=${id}`, {
        headers: {Authorization: `Bearer ${SUPERADMN_ID}`}
      });
      setBlog(data);
    })();
  }, []);
  
  return (
    <div className="mt-[6rem]">
      <h4>{blog?.title}</h4>
    </div>
  )
}
