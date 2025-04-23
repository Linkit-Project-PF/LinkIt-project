import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { Helmet } from "react-helmet-async"
import CallToAction from "../../../../../Utils/Buttons/CTA/callToAction"

import workerUrl from "pdfjs-dist/build/pdf.worker.mjs?url"

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

interface EbookInfoProps {
  pdfUrl: string;
  title?: string;
  description?: string;
  category?: string;
  image?: string;
  createdDate?: string;
  createdBy?: string;
}

export default function EbookInfo({ 
  pdfUrl, 
  title, 
  description, 
  category, 
  image, 
  createdDate, 
  createdBy 
}: EbookInfoProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [ebookData, setEbookData] = useState<any>(null)


  useEffect(() => {
    if (!title || !description) {
      const storedData = sessionStorage.getItem("ebookData")
      if (storedData) {
        setEbookData(JSON.parse(storedData))
      }
      const isMobile = window.innerWidth <= 768; 
      if (isMobile) {
        setScale(0.55);
      }
    }
  }, [title, description])

  // Generar el esquema JSON-LD para Schema.org
  const generateSchemaMarkup = () => {
    const ebookTitle = title || ebookData?.title || "Ebook"
    const ebookDescription = description || ebookData?.description || ""
    const ebookCategory = category || ebookData?.category || ""
    const ebookImage = image || ebookData?.image || ""
    const ebookCreatedDate = createdDate || new Date().toISOString()
    const ebookCreatedBy = createdBy || "LinkIt"
    
    const ebookSchema = {
      "@context": "https://schema.org",
      "@type": ["Book", "DigitalDocument"],
      "name": ebookTitle,
      "description": ebookDescription,
      "image": ebookImage ? `https://res.cloudinary.com/dquhriqz3/image/upload/${ebookImage}` : "",
      "datePublished": ebookCreatedDate,
      "author": {
        "@type": "Person",
        "name": ebookCreatedBy
      },
      "publisher": {
        "@type": "Organization",
        "name": "LinkIt",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg"
        }
      },
      "inLanguage": "es",
      "fileFormat": "application/pdf",
      "url": pdfUrl,
      "genre": ebookCategory,
      "educationalUse": "Formación profesional",
      "audience": {
        "@type": "Audience",
        "audienceType": "Profesionales IT"
      },
    };

    return JSON.stringify(ebookSchema);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
  }

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading PDF:", error)
    setError("No se pudo cargar el PDF. Por favor, intente nuevamente.")
    setLoading(false)
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPage) => {
      const nextPage = prevPage + offset
      return numPages ? Math.min(Math.max(1, nextPage), numPages) : prevPage
    })
  }

  const changeScale = (delta: number) => {
    setScale((prevScale) => Math.min(Math.max(0.5, prevScale + delta), 2))
  }


  // Formatear la fecha para mostrarla de manera amigable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-4 md:p-8">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Intentar nuevamente
        </button>
      </div>
    )
  }

  // Usar props o datos almacenados
  const ebookTitle = title || ebookData?.title || "Ebook"
  const ebookDescription = description || ebookData?.description || ""
  const ebookCategory = category || ebookData?.category || ""
  const ebookCreatedDate = createdDate || ""
  const ebookCreatedBy = createdBy || "LinkIt"

  return (
    <>
      {/* Implementación de Schema.org con Helmet */}
      <Helmet>
        <title>{ebookTitle} | LinkIt</title>
        <meta name="description" content={ebookDescription} />
        <script type="application/ld+json">
          {generateSchemaMarkup()}
        </script>
      </Helmet>
     
     <div className="flex flex-col items-center justify-center w-full font-montserrat  ">

     
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{ebookTitle}</h1>
        
        {/* Mostrar autor y fecha si están disponibles */}
        {(ebookCreatedBy || ebookCreatedDate) && (
          <div className="flex items-center text-sm text-gray-500 mb-2">
            {ebookCreatedBy && <span>Por {ebookCreatedBy}</span>}
            {ebookCreatedBy && ebookCreatedDate && <span className="mx-2">•</span>}
            {ebookCreatedDate && <time dateTime={ebookCreatedDate}>{formatDate(ebookCreatedDate)}</time>}
          </div>
        )}
        
        <p className="text-gray-600 mb-4">{ebookDescription}</p>
        {ebookCategory && (
          <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
            {ebookCategory}
          </span>
        )}
      </div>

        {/* Controles de navegación y zoom */}
        <div className="flex items-center justify-between w-full max-w-4xl mb-4 bg-white p-2 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <button
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-gray-600">
              Página {pageNumber} de {numPages || "-"}
            </span>
            <button
              onClick={() => changePage(1)}
              disabled={!numPages || pageNumber >= numPages}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeScale(-0.1)}
              disabled={scale <= 0.5}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <span className="text-sm text-gray-600">{Math.round(scale * 100)}%</span>
            <button
              onClick={() => changeScale(0.1)}
              disabled={scale >= 2}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Contenedor del PDF */}
        <div className="flex items-center justify-center w-full max-w-4xl flex-1 overflow-hidden bg-white rounded-lg shadow-md">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            </div>
          )}
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="max-w-full"
            />
          </Document>
          
        </div>
        
        <div className="mt-20">
            <CallToAction 
              variant="default"
              customTitle="¿Te interesó este artículo?"
              buttonStyle="filled"
            />
          </div>
          </div>
    </>
  )
}
        
