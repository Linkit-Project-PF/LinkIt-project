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
  const addAnItemToList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault(); // Evita que se propague el evento
    e.stopPropagation()
    const currentValue = inputRef.current?.value
    if(typeof currentValue === "string"){
      console.log(currentValue)
    if (infoList[name] && !infoList[name]?.includes(currentValue)) {
      const index = infoList[name]?.findIndex(
        (elemento) => elemento === referenceItem
      );
      console.log(index);
      if (index && index !== -1) {
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
          inputRef.current.value = ""; // Set the value to an empty string
        }
        setAddAnItem(false);
      }
    } else {
      swal(t("Ya se encuentra agregado"));
    }
  } else {
    console.error("Input ref not assigned yet!");
  }
  };

  return (
    <div>
      {!addAnItem && infoList[name].length -1 > infoList[name].indexOf(referenceItem) && (
        <button onClick={() => setAddAnItem(true)}>
          Agregar otro item despues de este
        </button>
      )}
      {addAnItem &&  (
        <div className="ml-5">
          <input
            className={
              errors.responsabilities
                ? '"appearance-none block w-full bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                : '"appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
            }
            type="text"
            ref={inputRef}
            onKeyPress={keyDown}
          />
          <button onClick={() => setAddAnItem(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default AddAnItemAfterThisOne;
