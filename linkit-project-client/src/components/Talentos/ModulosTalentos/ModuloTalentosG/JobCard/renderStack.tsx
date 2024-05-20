import { FunctionComponent, useEffect } from "react";
interface renderizarElementosProps {
  stack: string[];
  index: number;
  bigContainer: React.RefObject<HTMLDivElement>;
  current:number
}

const RenderizarStack: FunctionComponent<renderizarElementosProps> = ({
  stack,
  index,
  bigContainer,
  current

}) => {
  const deleteElements = (anchoTotal : number, bigContainerWidth:number, indexElemento:number, elementoP:HTMLElement):void=>{
    if (anchoTotal >= bigContainerWidth * 0.8) {
      const elementoAEliminar = document.getElementById(
        `stack-${index}-index-${indexElemento}`
      );
      if(elementoAEliminar?.offsetWidth) anchoTotal = anchoTotal - elementoAEliminar?.offsetWidth
      elementoAEliminar?.remove()
      const remaininigOneMoreElement = `${stack.length - indexElemento} +`;
      elementoP.textContent = remaininigOneMoreElement
      deleteElements(anchoTotal,bigContainerWidth, indexElemento-1, elementoP)
    }else{
      return
    }
  }
  const addElements= ()=>{
    const elementoContenedor = document.getElementById(`stacks-divs${index}`);
    if (elementoContenedor && bigContainer.current !== null && bigContainer.current.offsetWidth > 0) {
      elementoContenedor.style.display = "flex";
      let anchoTotal = 0;

      for (const [indexElemento, elemento] of stack.entries()) {
        const elementoDiv = document.createElement("div");
        elementoDiv.id = `stack-${index}-index-${indexElemento}`;
        const elementoP = document.createElement("p");
        elementoP.textContent =
        elemento[0].toUpperCase() + elemento.substring(1);
        elementoP.classList.add("text-[0.5rem]");
        elementoP.classList.add("ssm:text-[0.8rem]");
        elementoP.classList.add("sm:text-[1rem]");
        elementoP.classList.add("lg:text-[0.8rem]");
        elementoP.classList.add("xl:text-[1rem]");
        elementoP.classList.add("text-[#1D3750]");
        elementoP.classList.add("w-full");
        elementoDiv.classList.add("mt-3");
        elementoDiv.classList.add("mr-2");
        elementoDiv.classList.add("mt-3");
        elementoDiv.classList.add("h-5");
        elementoDiv.classList.add("w-fit");
        elementoDiv.classList.add("px-2");
        elementoDiv.classList.add("py-1");
        elementoDiv.classList.add("flex");
        elementoDiv.classList.add("items-center");
        elementoDiv.classList.add("rounded-lg");
        elementoDiv.classList.add("bg-[#FEFFFE]");

        elementoDiv.appendChild(elementoP);
        elementoContenedor.appendChild(elementoDiv);

        const anchoElementoDiv = elementoDiv.offsetWidth;
        anchoTotal += anchoElementoDiv;

        if (anchoTotal >= bigContainer.current.offsetWidth * 0.9) {
          const lastDiv = document.createElement("div");
          const elementoP = document.createElement("p");
          const remaininigElements = `${stack.length - indexElemento} +`;
          elementoP.textContent = remaininigElements;
          elementoP.classList.add("text-[0.5rem]");
          elementoP.classList.add("ssm:text-[0.8rem]");
          elementoP.classList.add("sm:text-[1rem]");
          elementoP.classList.add("lg:text-[0.8rem]");
          elementoP.classList.add("xl:text-[1rem]");
          elementoP.classList.add("text-[#1D3750]");
          elementoP.classList.add("w-full");
          lastDiv.classList.add("mr-2");
          lastDiv.classList.add("mt-3");
          lastDiv.classList.add("h-5");
          lastDiv.classList.add("w-fit");
          lastDiv.classList.add("px-2");
          lastDiv.classList.add("py-1");
          lastDiv.classList.add("flex");
          lastDiv.classList.add("items-center");
          lastDiv.classList.add("rounded-lg");
          lastDiv.classList.add("bg-[#FEFFFE]");

          lastDiv.appendChild(elementoP);
          elementoContenedor.appendChild(lastDiv);
          const anchoElementoDiv = lastDiv.offsetWidth;
          anchoTotal += anchoElementoDiv;
          deleteElements(anchoTotal, bigContainer.current.offsetWidth, indexElemento, elementoP)
          break;
        }
      }
    }
  }

  useEffect(() => {
addElements()
  }, [current]);

  return <div className="flex flex-row"  id={`stacks-divs${index}`}></div>;
};

export default RenderizarStack;
