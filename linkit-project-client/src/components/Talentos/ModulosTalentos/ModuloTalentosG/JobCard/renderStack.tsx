import React, { FunctionComponent, useEffect, useRef } from "react";

interface RenderizarElementosProps {
  stack?: string[];
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
  const elementoContenedorRef = useRef<HTMLDivElement>(null);

  const addElements = () => {
    const elementoContenedor = elementoContenedorRef.current;
    if (
      elementoContenedor &&
      bigContainer.current !== null &&
      bigContainer.current.offsetWidth > 0 &&
      stack?.length !== undefined && 
      stack?.length > 0
    ) {
      elementoContenedor.style.display = "flex";
      elementoContenedor.style.flexWrap = "wrap"; 
      elementoContenedor.innerHTML = '';

      let anchoTotal = 0;
      const containerWidth = bigContainer.current.offsetWidth * 0.85; 

      for (const [indexElemento, elemento] of stack.entries()) {
        const elementoDiv = document.createElement("div");
        elementoDiv.id = `stack-${index}-index-${indexElemento}`;
        const elementoP = document.createElement("p");
        elementoP.textContent = elemento[0].toUpperCase() + elemento.substring(1);
        elementoP.className = "text-[0.5rem] font-montserrat ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] text-[#1D3750] whitespace-nowrap";
        elementoDiv.className = "mt-3 mr-2 w-fit px-2 py-1 flex items-center rounded-lg bg-[#FEFFFE]";

        elementoDiv.appendChild(elementoP);
        elementoContenedor.appendChild(elementoDiv);

        anchoTotal += elementoDiv.offsetWidth;
        if (anchoTotal > containerWidth && indexElemento < stack.length - 1) {
          elementoDiv.remove();
          const remainingCount = stack.length - indexElemento;
          
          const lastDiv = document.createElement("div");
          const lastP = document.createElement("p");
          lastP.textContent = `+${remainingCount}`;
          lastP.className = "text-[0.5rem] font-montserrat ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] text-[#1D3750] whitespace-nowrap";
          lastDiv.className = "mt-3 mr-2 w-fit px-2 py-1 flex items-center rounded-lg bg-[#FEFFFE]";
          
          lastDiv.appendChild(lastP);
          elementoContenedor.appendChild(lastDiv);
          break;
        }
      }
    }
  };

  const noElements = () => {
    const elementoContenedor = elementoContenedorRef.current;
    if (
      elementoContenedor &&
      bigContainer.current !== null &&
      bigContainer.current.offsetWidth > 0 
    ) {
      elementoContenedor.style.display = "flex";
      elementoContenedor.innerHTML = '';
      const elementoDiv = document.createElement("div");
      elementoDiv.id = `stack-${index}-index-nada`;
      const elementoP = document.createElement("p");
      elementoP.textContent = "Nada";
      elementoP.className = "text-[0.5rem] font-montserrat ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] text-[#1D3750] whitespace-nowrap";
      elementoDiv.className = "mt-3 mr-2 w-fit px-2 py-1 flex items-center rounded-lg bg-[#FEFFFE] opacity-0";

      elementoDiv.appendChild(elementoP);
      elementoContenedor.appendChild(elementoDiv);
    }
  };

  useEffect(() => {
    if(stack?.length !== undefined && stack?.length > 0){
      addElements();
      const resizeObserver = new ResizeObserver(() => addElements());
      bigContainer.current && resizeObserver.observe(bigContainer.current);
      return () => {
        bigContainer.current && resizeObserver.unobserve(bigContainer.current);
      };
    } else {
      noElements();
      const resizeObserver = new ResizeObserver(() => noElements());
      bigContainer.current && resizeObserver.observe(bigContainer.current);
      return () => {
        bigContainer.current && resizeObserver.unobserve(bigContainer.current);
      };
    }
  }, [current, stack]);

  return (
    <div 
      className="flex flex-row flex-wrap w-full font-montserrat" 
      id={`stacks-divs${index}`} 
      ref={elementoContenedorRef}
    />
  );
};

export default RenderizarStack;