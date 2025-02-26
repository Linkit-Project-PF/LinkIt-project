import { useLocation } from "react-router-dom"
import BlogSidebar from "../../blogs/blogs-view/blog-sidebar/BlogSidebar"
import Newsletter from "../../../../../Utils/newsletter/newsletter"
import { EventsInfo } from "./EventsInfo"

export default function EventsView() {
  const location = useLocation()
  const { videoUrl, title, description, category } = location.state || {}

  if (!videoUrl) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-red-500 font-semibold">Error: Video no encontrado</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container p-4 pt-[17vh] lg:pt-[23vh]">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <EventsInfo videoUrl={videoUrl} title={title} description={description} category={category} />
          <div className="hidden lg:block">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}
