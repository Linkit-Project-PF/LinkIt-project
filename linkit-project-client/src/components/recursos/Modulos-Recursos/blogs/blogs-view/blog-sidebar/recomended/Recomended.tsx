import { useState, useEffect } from "react"
import axios from "axios"
import { SUPERADMN_ID } from "../../../../../../../env"
import RecomendedCard from "./RecomendedCard"

interface Header {
    title: string,
    description: string
}

type Blog = {
    _id: string
    title: string
    description: string
    type: string
    image: string
    headers: Header[]
    category: string
}

function Recomended() {
    const [blogs, setBlogs] = useState<Blog[] | null >(null)

    const randomBlogs = blogs?.sort(() => Math.random() - Math.random()).slice(0, 3)
    
    useEffect(()=>{
        const fetchBlogs = async ()=> {
            const response = await axios.get("https://linkit-server.onrender.com/posts/find?type=blog",
            {
                headers: {
                    Authorization: `Bearer ${SUPERADMN_ID}`,
                    'Accept-Language': sessionStorage.getItem('lang')
                }
            }
            )
            setBlogs(response.data)
            console.log(blogs)
        }
        fetchBlogs()
    },[])


  return (
    <>
        {
            randomBlogs?.map((blog, index) => (
                    <RecomendedCard
                        key={index}
                        title={blog.title}
                        description={blog.description}
                        image={blog.image}
                        genre={blog.category}
                        _id={blog._id}
                    />
            ))
        }
    </>
  )
}

export default Recomended