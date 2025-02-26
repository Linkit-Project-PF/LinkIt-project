import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

import workerUrl from "pdfjs-dist/build/pdf.worker.mjs?url"

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

interface EbookInfoProps {
  pdfUrl: string
}

export default function EbookInfo({ pdfUrl }: EbookInfoProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768
      setIsMobile(isMobileView)
      setScale(isMobileView ? 1 : 1)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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

  const measureContainer = (containerRef: HTMLDivElement | null) => {
    if (containerRef) {
      const width = containerRef.clientWidth - 48 
      setContainerWidth(width)
    }
  }

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

  return (
    <div className="flex h-[calc(100vh-20vh)] flex-col bg-background md:h-[calc(100vh-23vh)]">
      {/* Controles superiores */}
      <div className="sticky top-0 z-10 rounded-lg shadow-sm md:p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Navegación de páginas */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 md:h-10 md:w-10"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                max={numPages || 1}
                value={pageNumber}
                onChange={(e) => {
                  const value = Number.parseInt(e.target.value)
                  if (!isNaN(value) && value >= 1 && value <= (numPages || 1)) {
                    setPageNumber(value)
                  }
                }}
                className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center text-sm md:text-base"
              />
              <span className="text-sm text-gray-600 md:text-base">de {numPages || "-"}</span>
            </div>
            <button
              onClick={() => changePage(1)}
              disabled={!numPages || pageNumber >= numPages}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 md:h-10 md:w-10"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>

          {/* Controles de zoom */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => changeScale(-0.1)}
              disabled={scale <= 0.5}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 md:h-10 md:w-10"
            >
              <ZoomOut className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <span className="w-16 text-center text-sm text-gray-600 md:text-base">{Math.round(scale * 100)}%</span>
            <button
              onClick={() => changeScale(0.1)}
              disabled={scale >= 2}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 md:h-10 md:w-10"
            >
              <ZoomIn className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor del PDF */}
      <div ref={measureContainer} className="relative w-full  flex-1 rounded-lg overflow-auto bg-white  shadow-sm md:p-4">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          </div>
        )}
        <div className="flex h-auto items-center justify-center">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex h-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              width={containerWidth || undefined}
              className="max-w-full touch-pan-y"
              loading={
                <div className="flex h-full items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                </div>
              }
            />
          </Document>
        </div>
      </div>
    </div>
  )
}
