import { useState } from "react";
// import { VacancyProps } from "../../../admin.types";
import { ValidationError } from "../../../../../errors/errors";
import swal from "sweetalert";
// import { validations } from "./Validation";
import { useTranslation } from "react-i18next";
import {SpecificOKRsArea} from "../../../../../../Paneles/admin.types"

// import { useSelector } from "react-redux";

type OnCloseFunction = () => void;

interface FormOKRsProps {
  onClose: OnCloseFunction;
  token: string;
  onOkrsSpecificUpdate: (newspecificResult: SpecificOKRsArea["okrsSpecific"]) => void; 
}

interface InfoList {
  [key: string]: string[] | undefined;
}

export default function FormSpecificResults(props: FormOKRsProps) {
  const { t } = useTranslation()

  const [information, setInformation] = useState<any>({
  
    okrsSpecific: [],
  });

  // const [errors, setErrors] = useState({
  //   okrsSpecific: "",
  // });


  const [infoList, setInfoList] = useState<InfoList>({
    
    okrsSpecific: [],

  });


  const addToList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { name } = e.currentTarget;
      const value = (e.target as HTMLInputElement).value;

      if (!infoList[name]?.includes(value)) {
        setInfoList({
          ...infoList,
          [name]: [...(infoList[name] || []), value],
        });

        setInformation({
          ...information,
          [name]: [...(infoList[name] || []), value],
        });
      } else {
        swal(t("Ya se encuentra agregado"));
      }

      (e.target as HTMLInputElement).value = "";
    }
  };

  // const addToListBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
  //   const { name } = e.currentTarget;
  //   const value = (e.target as HTMLInputElement).value;

  //   if (value.trim() !== "") {
  //     if (!infoList[name]?.includes(value)) {
  //       setInfoList({
  //         ...infoList,
  //         [name]: [...(infoList[name] || []), value],
  //       });

  //       setInformation({
  //         ...information,
  //         [name]: [...(infoList[name] || []), value],
  //       });
  //     } else {
  //       swal(t("Ya se encuentra agregado"));
  //     }
  //   }
  //   (e.target as HTMLInputElement).value = "";
  // };

  const deleteFromList = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
    listName: string
  ) => {
    e.preventDefault();

    const updateList = infoList[listName]?.filter((i) => i !== id);

    setInfoList({
      ...infoList,
      [listName]: updateList,
    });

    setInformation({
      ...information,
      [listName]: updateList,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement>
  ) => {
    const { name, value } = e.target;
      setInformation({
        ...information,
        [name]: value,
      });
    
    // const validationError = validations(information as VacancyProps);
    // setErrors(validationError);
  };
  // console.log(information)
  // const handleBlurErrors = () => {
    // const validationError = validations(information as VacancyProps);
    // setErrors(validationError);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      props.onOkrsSpecificUpdate(information.okrsSpecific)
    } catch (error) {
      console.error((error as Error).message);
      throw new ValidationError(
        `${t('Error al ingresar los datos en el formulario')}: ${(error as Error).message
        }`
      );
    }
      props.onClose();
  };

  const [inputClicked, setInputClicked] = useState(false);
  const handleInputClick = () => {
    setInputClicked(true);
  };

  

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className=" flex flex-col justify-center items-center bg-linkIt-500  mx-32 my-10  rounded-[20px] border-[3px] border-linkIt-300 ">
        <div className="flex w-full justify-end ">
          <button
            className={`background-button m-2`}
            onClick={props.onClose}
          >X</button>
        </div>
        <div className=" flex flex-col text-center mb-12">
          <h1 className="text-3xl">{t('Resultados específicos')}</h1>
        {inputClicked && (
          <span className="m-0 text-xs text-linkIt-300">{t('*Presiona enter para agregar más de un resultado*')}</span>
        )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
          action=""
        >
          <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">
            

            <div className="w-full px-3 mb-6">
              
              <input
                className="appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                type="text"
                name="okrsSpecific"
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={addToList}
                // onBlur={errors.stack ? handleBlurErrors : addToListBlur}
                onClick={handleInputClick}
              />
            </div>

            
            {infoList &&
              infoList.okrsSpecific &&
              infoList.okrsSpecific.length > 0 ? (
              <div className="mx-4">
                <h3 className="text-md font-bold text-linkIt-200">
                  {t('Resultados específicos agregados')}
                </h3>
                <ul className="list-disc">
                  {infoList.okrsSpecific?.map((t: string) => {
                    return (
                      <div key={t} className="flex">
                        <li className="text-sm">{t}</li>
                        <button
                          onClick={(e) => deleteFromList(e, t, "okrsSpecific")}
                          className="ml-3 hover:text-red-500"
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
          {/* {errors.code ||
            errors.title ||
            errors.company ||
            errors.location ||
            errors.stack || 
            errors.requirements ||
            errors.description ? (
            <span className="text-red-500">
              {t('Los campos marcados con * son obligatiorios')}
            </span>
          ) : null} */}
          <div className="flex m-4">
            <div className="pr-2">
              <button
                onClick={props.onClose}
                className={`background-button`}
                type="button"
              >
                {t('Volver')}
              </button>
            </div>
            <div className="pl-2">
              <button
                type="submit"
                className={`background-button`}
              >
                {t('Guardar')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
