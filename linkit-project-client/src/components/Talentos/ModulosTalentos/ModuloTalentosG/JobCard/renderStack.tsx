import React, { FunctionComponent, useEffect, useState, useRef } from "react";

interface RenderizarElementosProps {
  stack: string[];
  index: number;
  bigContainer: React.RefObject<HTMLDivElement>;
  current: number;
}

const RenderizarStack: FunctionComponent<RenderizarElementosProps> = ({
  stack,
  index,
  bigContainer,
  current,
}) => {
  const [elementsRendered, setElementsRendered] = useState(false);
  const elementoContenedorRef = useRef<HTMLDivElement>(null);

  const deleteElements = (
    anchoTotal: number,
    bigContainerWidth: number,
    indexElemento: number,
    elementoP: HTMLElement
  ): void => {
    if (anchoTotal >= bigContainerWidth * 0.8) {
      const elementoAEliminar = document.getElementById(
        `stack-${index}-index-${indexElemento}`
      );
      if (elementoAEliminar?.offsetWidth) {
        anchoTotal -= elementoAEliminar.offsetWidth;
      }
      elementoAEliminar?.remove();
      const remaininigOneMoreElement = `${stack.length - indexElemento} +`;
      elementoP.textContent = remaininigOneMoreElement;
      deleteElements(anchoTotal, bigContainerWidth, indexElemento - 1, elementoP);
    }
  };

  const addElements = () => {
    const elementoContenedor = elementoContenedorRef.current;
    if (
      elementoContenedor &&
      bigContainer.current !== null &&
      bigContainer.current.offsetWidth > 0
    ) {
      elementoContenedor.style.display = "flex";
      elementoContenedor.innerHTML = ''; // Limpiar elementos previos

      for (const [indexElemento, elemento] of stack.entries()) {
        const elementoDiv = document.createElement("div");
        elementoDiv.id = `stack-${index}-index-${indexElemento}`;
        const elementoP = document.createElement("p");
        elementoP.textContent = elemento[0].toUpperCase() + elemento.substring(1);
        elementoP.className = "text-[0.5rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] text-[#1D3750] w-full";
        elementoDiv.className = "mt-3 mr-2 w-fit px-2 py-1 flex items-center rounded-lg bg-[#FEFFFE]";

        elementoDiv.appendChild(elementoP);
        elementoContenedor.appendChild(elementoDiv);
      }
      
      // Set state to trigger re-render
      setElementsRendered(true);
    }
  };

  useEffect(() => {
    addElements();
    const resizeObserver = new ResizeObserver(() => addElements());
    bigContainer.current && resizeObserver.observe(bigContainer.current);
    return () => {
      bigContainer.current && resizeObserver.unobserve(bigContainer.current);
    };
  }, [current]);

  useEffect(() => {
    if (elementsRendered) {
      const elementoContenedor = elementoContenedorRef.current;
      if (elementoContenedor && bigContainer.current) {
        let anchoTotal = 0;
        const children = Array.from(elementoContenedor.children);
        for (const [indexElemento, child] of children.entries()) {
          const anchoElementoDiv = (child as HTMLElement).offsetWidth;
          anchoTotal += anchoElementoDiv;

          if (anchoTotal >= bigContainer.current.offsetWidth * 0.9) {
            const lastDiv = document.createElement("div");
            const lastP = document.createElement("p");
            const remainingElements = `${stack.length - indexElemento - 1} +`;
            lastP.textContent = remainingElements;
            lastP.className = "text-[0.5rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] text-[#1D3750] w-full";
            lastDiv.className = "mr-2 mt-3 h-5 w-fit px-2 py-1 flex items-center rounded-lg bg-[#FEFFFE]";

            lastDiv.appendChild(lastP);
            elementoContenedor.appendChild(lastDiv);
            const lastDivWidth = lastDiv.offsetWidth;
            anchoTotal += lastDivWidth;
            deleteElements(anchoTotal, bigContainer.current.offsetWidth, indexElemento, lastP);
            break;
          }
        }
      }
    }
  }, [elementsRendered]);

  return <div className="flex flex-row w-full" id={`stacks-divs${index}`} ref={elementoContenedorRef}></div>;
};

export default RenderizarStack;
