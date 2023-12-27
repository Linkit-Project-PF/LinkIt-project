import { FunctionComponent, useState } from "react";
import { IUser, UserRoleEnum } from "../../types";
import { editUser } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { setUser } from "../../../../redux/features/AuthSlice";
import { useTranslation } from "react-i18next";

interface IComponentProps {
  user: IUser;
}
interface ISuperAdminComponentProps extends IComponentProps {
  role: UserRoleEnum.ADMIN;
}

const SuperAdminProfileForm: FunctionComponent<ISuperAdminComponentProps> = ({
  user,
  role,
}) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.Authentication);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.firstName);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!token) throw new Error("No token provided");

      const newUser = {
        ...user,
        firstName: name,
        email,
      };

      const updatedUser = await editUser(newUser);
      dispatch(setUser(updatedUser));
    } catch (error) {
      console.log(error);
    }
  };
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center content-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] min-h-[30vh] min-w-[90%] mt-[7rem] bg-linkIt-500 p-[3rem] rounded-[20px]">
      {role === UserRoleEnum.ADMIN && (
        <form action="" onSubmit={handleSubmit} className="flex flex-col">
          <div className="grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-3 font-montserrat">
            <input
              defaultValue={user.firstName}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder={t("Nombre")}
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
            />

            <input
              defaultValue={user.lastName}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder={t("Apellido")}
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
            />

            <input
              defaultValue={user.email}
              onChange={(event) => setEmail(event.target.value)}
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
              type="text"
              placeholder={t("Email corporativo")}
            />

            <input
              defaultValue={user.country}
              onChange={(event) => setEmail(event.target.value)}
              className="placeholder:font-[500] placeholder:text-opacity-80 placeholder:text-linkIt-400 bg-transparent pl-[1rem] border-[.125rem] border-linkIt-400 w-[24rem] h-[2.75rem] rounded-[10px]"
              type="text"
              placeholder={t("Pais")}
            />
          </div>

          <div className="flex flex-row justify-self-end place-self-end mt-8 gap-2">
            <button className="text-linkIt-400 border-[.125rem] border-linkIt-300 bg-white w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid">
              {t("Descartar cambios")}
            </button>
            <button
              type="submit"
              className="text-white border-[.125rem] border-linkIt-300 bg-linkIt-300 w-[11.75rem] h-[2.75rem] rounded-[10px] border-solid"
            >
              {t("Guardar cambios")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SuperAdminProfileForm;
