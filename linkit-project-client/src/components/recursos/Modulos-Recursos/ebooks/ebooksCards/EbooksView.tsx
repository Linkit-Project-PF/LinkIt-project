import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import BlogSidebar from "../../blogs/blogs-view/blog-sidebar/BlogSidebar"
import Newsletter from "../../../../../Utils/newsletter/newsletter"
import EbookInfo from "./EbookInfo"
import axios from "axios"

interface EbookData {
  pdfUrl: string
  title: string
  description: string
  category: string
  image?: string
}

export default function EbookView() {
  const location = useLocation()
  const { slug } = useParams()
  const [ebookData, setEbookData] = useState<EbookData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEbookData = async () => {
      try {
        // Primero intentamos usar los datos del state
        if (location.state) {
          setEbookData({
            pdfUrl: location.state.pdfUrl,
            title: location.state.title,
            description: location.state.description,
            category: location.state.category,
            image: location.state.image,
          })
          setLoading(false)
          return
        }

        // Si no hay state, intentamos recuperar de sessionStorage
        const savedData = sessionStorage.getItem("ebookData")
        if (savedData) {
          const parsedData = JSON.parse(savedData)
          if (parsedData.slug === slug) {
            setEbookData({
              pdfUrl: parsedData.link,
              title: parsedData.title,
              description: parsedData.description,
              category: parsedData.category,
              image: parsedData.image,
            })
            setLoading(false)
            return
          }
        }

        // Si no hay datos en sessionStorage, hacemos fetch a la API
        const response = await axios.get(`https://linkit-server.onrender.com/posts/ebook/${slug}`)
        if (!response) throw new Error("Ebook not found")
      
        setEbookData({
          pdfUrl: response.data.link,
          title: response.data.title,
          description: response.data.description,
          category: response.data.category,
          image: response.data.image,
        })
        setLoading(false)
      } catch (error) {
        console.error("Error fetching ebook:", error)
        setError("No se encontró el PDF.")
        setLoading(false)
      }
    }

    fetchEbookData()
  }, [location.state, slug])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
      </div>
    )
  }

  if (error || !ebookData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-500 font-semibold">Error: {error || "No se encontró el PDF."}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto p-4 pt-[17vh] lg:pt-[23vh]">
        <div className="grid gap-8">
          <div className="mx-auto w-full max-w-4xl lg:max-w-none lg:grid-cols-[1fr_300px] lg:gap-8 lg:grid">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{ebookData.title}</h1>
              <p className="text-gray-600">{ebookData.description}</p>
              <EbookInfo pdfUrl={ebookData.pdfUrl} />
            </div>

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

