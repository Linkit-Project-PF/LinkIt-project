import { useLocation } from "react-router-dom"
import BlogSidebar from "../../blogs/blogs-view/blog-sidebar/BlogSidebar"
import Newsletter from "../../../../../Utils/newsletter/newsletter"
import EbookInfo from "./EbookInfo"

export default function EbookView() {
  const location = useLocation()
  const pdfUrl = location.state?.pdfUrl

  if (!pdfUrl) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-500 font-semibold">Error: No se encontró el PDF.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container p-4 pt-[17vh] lg:pt-[23vh]">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <EbookInfo pdfUrl={pdfUrl} />
          <div className="hidden lg:block">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

