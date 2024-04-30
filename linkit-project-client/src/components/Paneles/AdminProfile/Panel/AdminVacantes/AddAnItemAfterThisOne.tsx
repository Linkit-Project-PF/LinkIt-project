import { VacancyProps } from "../../../admin.types";
import { useRef, useState } from "react";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

interface InfoList {
  [key: string]: string[];
}
type ErrorState = {
  code: string;
  title: string;
  description: string;
  type: string;
  location: string;
  modality: string;
  stack: string;
  aboutUs: string;
  aboutClient: string;
  responsabilities: string;
  requirements: string;
  niceToHave: string;
  benefits: string;
  company: string;
};
interface AddAnItemAfterThisOneProps {
  name: string;
  infoList: InfoList;
  setInfoList: React.Dispatch<React.SetStateAction<InfoList>>;
  information: Partial<VacancyProps>;
  setInformation: React.Dispatch<React.SetStateAction<Partial<VacancyProps>>>;
  errors: ErrorState;
  referenceItem: string;
}

const AddAnItemAfterThisOne: React.FC<AddAnItemAfterThisOneProps> = ({
  name,
  infoList,
  setInfoList,
  information,
  setInformation,
  errors,
  referenceItem,
}) => {
  const [addAnItem, setAddAnItem] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  if (infoList[name] !== undefined && infoList[name].length > 10) {
    // Your code here
  }

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
    addAnItemToList(e);
    setAddAnItem(false);
    e.preventDefault(); // Evita que se propague el evento
    e.stopPropagation();
    }
  };
  const updateItem = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault(); // Evita que se propague el evento
    e.stopPropagation()

    setAddAnItem(false);
  }
  const addAnItemToList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault(); // Evita que se propague el evento
    e.stopPropagation()
    const currentValue = inputRef.current?.value
    if(typeof currentValue === "string"){
    if (infoList[name] && !infoList[name]?.includes(currentValue)) {
      const index = infoList[name]?.findIndex(
        (elemento) => elemento === referenceItem
      );
        const updatedInfoList = { ...infoList };
        let currentList = updatedInfoList[name] || [];

        if (index < currentList.length) {
          const newList = [...currentList.slice(0, index + 1), currentValue, ...currentList.slice(index + 1)];
          currentList = newList
        } else {
          currentList[index] = currentValue;
        }
        setInfoList({
          ...infoList,
          [name]: currentList,
        });

        setInformation({
          ...information,
          [name]: currentList,
        });
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        setAddAnItem(false);
    } else {
      swal(t("Ya se encuentra agregado"));
    }
  } else {
    console.error("Input ref not assigned yet!");
  }
  };

  return (
    <div className="flex items-center">
      {!addAnItem && infoList[name].length -1 > infoList[name].indexOf(referenceItem) && (
        <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded" onClick={() => setAddAnItem(true)}>
          + Agregar
        </button>
      )}
      {addAnItem &&  (
        <div className="flex items-center">
          <input
            className={
              errors.responsabilities
                ? "block w-[300px] h-[2rem] bg-linkIt-500 text-black border border-red-500 rounded py-2 px-3 mb-3 focus:outline-none focus:bg-white "
                : "block w-full h-[2rem] bg-linkIt-500 text-black border border-linkIt-300 rounded py-2 px-3 mb-3 focus:outline-none focus:bg-white"
            }
            type="text"
            ref={inputRef}
            onKeyPress={keyDown}
          />
          <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 mb-3 rounded ml-2" onClick={() => setAddAnItem(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
  
};  

export default AddAnItemAfterThisOne;
