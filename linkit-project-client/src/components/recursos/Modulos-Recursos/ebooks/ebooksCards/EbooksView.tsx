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
    <div className="min-h-screen w-full">
      <div className="container mx-auto p-4 pt-[17vh] lg:pt-[23vh]">
        <div className="grid gap-8">
          <div className="mx-auto w-full max-w-4xl lg:max-w-none lg:grid-cols-[1fr_300px] lg:gap-8 lg:grid">
            <EbookInfo pdfUrl={pdfUrl} />
            <div className="hidden lg:block">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

