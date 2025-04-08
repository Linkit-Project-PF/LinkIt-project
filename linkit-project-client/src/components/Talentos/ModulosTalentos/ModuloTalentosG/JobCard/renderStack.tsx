import type React from "react"
import { type FunctionComponent, useEffect, useRef } from "react"

interface RenderizarElementosProps {
  stack?: string[]
  index: number
  bigContainer: React.RefObject<HTMLDivElement>
  current: number
}

const techColors: Record<string, { bg: string; text: string }> = {
  python: { bg: "#3776AB", text: "#FFFFFF" },
  aws: { bg: "#FF9900", text: "#232F3E" },
  azure: { bg: "#0078D4", text: "#FFFFFF" },
  etl: { bg: "#F97316", text: "#FFFFFF" }, // Naranja fuerte
  "big data": { bg: "#E03C31", text: "#FFFFFF" },
  pytorch: { bg: "#EE4C2C", text: "#FFFFFF" },
  react: { bg: "#61DAFB", text: "#282C34" },
  node: { bg: "#6366F1", text: "#FFFFFF" }, // Índigo
  javascript: { bg: "#F7DF1E", text: "#000000" },
  typescript: { bg: "#3178C6", text: "#FFFFFF" },
  java: { bg: "#007396", text: "#FFFFFF" },
  spring: { bg: "#8B5CF6", text: "#FFFFFF" }, // Púrpura
  vue: { bg: "#3B82F6", text: "#FFFFFF" }, // Azul
  angular: { bg: "#F59E0C", text: "#FFFFFF" }, // Ámbar/Naranja
  php: { bg: "#777BB4", text: "#FFFFFF" },
  laravel: { bg: "#FF2D20", text: "#FFFFFF" },
  django: { bg: "#092E20", text: "#FFFFFF" },
  flask: { bg: "#000000", text: "#FFFFFF" },
  sql: { bg: "#4479A1", text: "#FFFFFF" },
  mongodb: { bg: "#4338CA", text: "#FFFFFF" }, // Azul profundo (cambiado)
  docker: { bg: "#2496ED", text: "#FFFFFF" },
  kubernetes: { bg: "#326CE5", text: "#FFFFFF" },
  git: { bg: "#F05032", text: "#FFFFFF" },
  linux: { bg: "#FCC624", text: "#000000" },
}


const defaultColors = [
  { bg: "#3B82F6", text: "#FFFFFF" }, // Azul
  { bg: "#8B5CF6", text: "#FFFFFF" }, // Púrpura
  { bg: "#F59E0B", text: "#FFFFFF" }, // Ámbar / Naranja
  { bg: "#EC4899", text: "#FFFFFF" }, // Rosa
  { bg: "#6366F1", text: "#FFFFFF" }, // Índigo
  { bg: "#EF4444", text: "#FFFFFF" }, // Rojo
  { bg: "#F97316", text: "#FFFFFF" }, // Naranja fuerte
]


const RenderizarStack: FunctionComponent<RenderizarElementosProps> = ({ stack, index, bigContainer, current }) => {
  const elementoContenedorRef = useRef<HTMLDivElement>(null)

  // Función para obtener colores para una tecnología
  const getColorForTech = (tech: string, idx: number) => {
    const techLower = tech.toLowerCase()
    if (techColors[techLower]) {
      return techColors[techLower]
    }
    // Usar colores por defecto en rotación
    return defaultColors[idx % defaultColors.length]
  }

  const addElements = () => {
    const elementoContenedor = elementoContenedorRef.current
    if (
      elementoContenedor &&
      bigContainer.current !== null &&
      bigContainer.current.offsetWidth > 0 &&
      stack?.length !== undefined &&
      stack?.length > 0
    ) {
      elementoContenedor.style.display = "flex"
      elementoContenedor.style.flexWrap = "wrap"
      elementoContenedor.innerHTML = ""

      let anchoTotal = 0
      // Reducir el ancho disponible para asegurar que no ocupe demasiado espacio
      const containerWidth = bigContainer.current.offsetWidth * 0.75
      // Limitar el número máximo de elementos a mostrar
      const maxElements = 4

      // Determinar cuántos elementos mostrar
      const elementsToShow = Math.min(stack.length, maxElements)

      for (let i = 0; i < elementsToShow; i++) {
        const elemento = stack[i]
        if (elemento === undefined) continue

        const elementoDiv = document.createElement("div")
        elementoDiv.id = `stack-${index}-index-${i}`

        const elementoP = document.createElement("p")
        elementoP.textContent = elemento.charAt(0).toUpperCase() + elemento.slice(1)
        elementoP.className = "text-xs font-medium whitespace-nowrap"

        // Aplicar colores
        const colors = getColorForTech(elemento, i)
        elementoDiv.style.backgroundColor = colors.bg
        elementoP.style.color = colors.text

        elementoDiv.className =
          "mr-2 mb-2 px-2 py-1 rounded-md flex items-center justify-center transition-all duration-200 hover:scale-105"

        elementoDiv.appendChild(elementoP)
        elementoContenedor.appendChild(elementoDiv)

        anchoTotal += elementoDiv.offsetWidth + 8 // 8px para el margen

        // Si excede el ancho y hay más elementos, mostrar contador
        if (anchoTotal > containerWidth && i < stack.length - 1) {
          elementoDiv.remove()
          const remainingCount = stack.length - i

          const lastDiv = document.createElement("div")
          const lastP = document.createElement("p")
          lastP.textContent = `+${remainingCount}`
          lastP.className = "text-xs font-medium whitespace-nowrap"

          lastDiv.className =
            "mr-2 mb-2 px-2 py-1 rounded-md flex items-center justify-center bg-gray-600 text-white transition-all duration-200 hover:scale-105"

          lastDiv.appendChild(lastP)
          elementoContenedor.appendChild(lastDiv)
          break
        }
      }
    }
  }

  const noElements = () => {
    const elementoContenedor = elementoContenedorRef.current
    if (elementoContenedor && bigContainer.current !== null && bigContainer.current.offsetWidth > 0) {
      elementoContenedor.style.display = "flex"
      elementoContenedor.innerHTML = ""
      // No mostrar nada si no hay elementos
    }
  }

  useEffect(() => {
    if (stack?.length !== undefined && stack?.length > 0) {
      addElements()
      const resizeObserver = new ResizeObserver(() => addElements())
      bigContainer.current && resizeObserver.observe(bigContainer.current)
      return () => {
        bigContainer.current && resizeObserver.unobserve(bigContainer.current)
      }
    } else {
      noElements()
      const resizeObserver = new ResizeObserver(() => noElements())
      bigContainer.current && resizeObserver.observe(bigContainer.current)
      return () => {
        bigContainer.current && resizeObserver.unobserve(bigContainer.current)
      }
    }
  }, [current, stack])

  return (
    <div
      className="flex flex-row flex-wrap w-full max-h-[40px] overflow-hidden font-montserrat"
      id={`stacks-divs${index}`}
      ref={elementoContenedorRef}
    />
  )
}

export default RenderizarStack
