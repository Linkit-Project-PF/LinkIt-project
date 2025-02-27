import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"
import BlogSidebar from "../../blogs/blogs-view/blog-sidebar/BlogSidebar"
import Newsletter from "../../../../../Utils/newsletter/newsletter"
import { EventsInfo } from "./EventsInfo"

interface EventData {
  videoUrl: string
  title: string
  description: string
  category: string
  image?: string
  videoId?: string
}

export default function EventsView() {
  const location = useLocation()
  const { slug } = useParams()
  const [eventData, setEventData] = useState<EventData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        // Primero intentamos usar los datos del state
        if (location.state) {
          setEventData(location.state)
          setLoading(false)
          return
        }

        // Si no hay state, intentamos recuperar de sessionStorage
        const savedData = sessionStorage.getItem("eventData")
        if (savedData) {
          const parsedData = JSON.parse(savedData)
          if (parsedData.slug === slug) {
            setEventData({
              videoUrl: parsedData.videoUrl,
              title: parsedData.title,
              description: parsedData.description,
              category: parsedData.category,
              image: parsedData.image,
              videoId: parsedData.videoId,
            })
            setLoading(false)
            return
          }
        }

        // Si no hay datos en sessionStorage, hacemos fetch a la API
        const response = await axios.get(`https://linkit-server.onrender.com/posts/events/${slug}`)
        const data = response.data

        if (!data) throw new Error("Event not found")

        setEventData({
          videoUrl: data.link,
          title: data.title,
          description: data.description,
          category: data.category,
          image: data.image,
          videoId: data.link.includes("v=") ? data.link.split("v=")[1] : data.link.split("youtu.be/")[1],
        })
        setLoading(false)
      } catch (error) {
        console.error("Error fetching event:", error)
        setError("Video no encontrado")
        setLoading(false)
      }
    }

    fetchEventData()
  }, [location.state, slug])

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
      </div>
    )
  }

  if (error || !eventData) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-red-500 font-semibold">Error: {error || "Video no encontrado"}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container p-4 pt-[17vh] lg:pt-[23vh]">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">{eventData.title}</h1>
            <p className="text-gray-600">{eventData.description}</p>
            <EventsInfo
              videoUrl={eventData.videoUrl}
              title={eventData.title}
              description={eventData.description}
              category={eventData.category}
            />
          </div>
          <div className="hidden lg:block">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

