import { useState, useEffect } from "react"
import axios from "axios"
import RecomendedCard from "./RecomendedCard"
import { useParams } from "react-router-dom"

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
    const blogId = useParams();

    const filterBlogs = blogs?.filter((b:Blog)=> b._id !== blogId.id)
    
    useEffect(()=>{
        const fetchBlogs = async ()=> {
            const response = await axios.get("https://linkit-server.onrender.com/posts/find?type=blog",
            )
            setBlogs(response.data)
        }
        fetchBlogs()
    },[])


  return (
    <div>
        {
            filterBlogs?.map((blog, index) => (
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
    </div>
  )
}

export default Recomended