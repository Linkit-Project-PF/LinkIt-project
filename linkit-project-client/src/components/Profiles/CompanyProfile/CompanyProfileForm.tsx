import { FunctionComponent, useState } from "react";
import { ICompany } from "../types";
import { editCompany } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { setUser } from "../../../redux/features/AuthSlice";
import { useTranslation } from "react-i18next";

interface IComponentProps {
  company: ICompany;
}

const CompanyForm: FunctionComponent<IComponentProps> = ({ company }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.Authentication);
  const [repName, setRepName] = useState(company.repName);
  const [email, setEmail] = useState(company.email);
  const [companyName, setCompanyName] = useState(company.companyName);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!token) throw new Error("No token provided");

      const newCompany = {
        ...company,
        companyName,
        repName,
        email,
      };

      const updatedCompany = await editCompany(newCompany);
      dispatch(setUser(updatedCompany));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-linkIt-500 mx-5 p-10 rounded-[20px] md:mx-10 md:p-20 md:pb-10">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">
              {t("Nombre de la empresa")}
            </label>
            <input
              defaultValue={company.repName}
              onChange={(event) => setRepName(event.target.value)}
              type="text"
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">
              {t("Representante")}
            </label>
            <input
              defaultValue={company.repName}
              onChange={(event) => setRepName(event.target.value)}
              type="text"
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">
              {t("Empresa")}
            </label>
            <input
              defaultValue={company.companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              type="text"
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="ml-2">
              {t("Email corporativo")}
            </label>
            <input
              defaultValue={company.email}
              onChange={(event) => setEmail(event.target.value)}
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
              type="text"
              placeholder={t("Email corporativo")}
            />
          </div>

          {/* <input
            defaultValue={user.technologies.join(", ")}
            onChange={(event) => setTechnologies(event.target.value.split(","))}
            className="border-[.125rem] border-linkIt-400 bg-transparent pl-[1rem] w-[24rem] h-[2.75rem] rounded-[10px]"
            placeholder="Stack tecnológico"
          /> */}
        </div>

        <div className="flex flex-row justify-self-end place-self-end mt-8 gap-2">
          <button className="text-linkIt-400 border-[.125rem] border-linkIt-300 bg-white w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid">
            {t("Descartar")}
          </button>
          <button
            type="submit"
            className="text-white border-[.125rem] border-linkIt-300 bg-linkIt-300 w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid"
          >
            {t("Guardar")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
