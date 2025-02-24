import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import workerUrl from 'pdfjs-dist/build/pdf.worker.mjs?url'



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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-8">
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
    <div className="flex flex-col items-center space-y-4">
      {/* Controles */}
      <div className="flex w-full flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            ←
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
              className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center"
            />
            <span className="text-sm text-gray-600">de {numPages || "-"}</span>
          </div>
          <button
            onClick={() => changePage(1)}
            disabled={!numPages || pageNumber >= numPages}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            →
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => changeScale(-0.1)}
            disabled={scale <= 0.5}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            -
          </button>
          <span className="text-sm text-gray-600">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => changeScale(0.1)}
            disabled={scale >= 2}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>

      <div className="relative w-full rounded-lg bg-white shadow-sm">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          </div>
        )}
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div className="flex h-[50vh] items-center justify-center bg-white">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            className="flex justify-center"
            loading={
              <div className="flex h-[50vh] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
              </div>
            }
          />
        </Document>
      </div>
      <div className="flex w-full flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            ←
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
              className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center"
            />
            <span className="text-sm text-gray-600">de {numPages || "-"}</span>
          </div>
          <button
            onClick={() => changePage(1)}
            disabled={!numPages || pageNumber >= numPages}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            →
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => changeScale(-0.1)}
            disabled={scale <= 0.5}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            -
          </button>
          <span className="text-sm text-gray-600">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => changeScale(0.1)}
            disabled={scale >= 2}
            className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>

    </div>
  )
}

