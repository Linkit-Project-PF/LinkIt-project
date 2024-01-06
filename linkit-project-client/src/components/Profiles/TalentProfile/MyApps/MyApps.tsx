import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import axios from "axios";
import { SUPERADMN_ID } from "../../../../env";
import TalentApps from "./TalentApps";
import { IUser } from "../../types";

interface ITalentApp {}

interface componentProps {
  loader: (value: boolean) => void;
}

function MyApps({ loader }: componentProps) {
  const [talentApps, setTalentApps] = useState<ITalentApp[]>();

  const user = useSelector(
    (state: RootState) => state.Authentication.user
  ) as IUser;

  useEffect(() => {
    const fetchApps = async () => {
      const postulArray: any[] = [];
      for (const postul of user.postulations) {
        const response = await axios.get(
          `https://linkit-server.onrender.com/resources/companyjds?code=${postul}`,
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        postulArray.push(response.data);
      }
      setTalentApps(postulArray);
      loader(false);
    };
    fetchApps();
    return () => loader(true);
  }, []);

  if (!talentApps) return null;
  return (
    <div className="flex bg-linkIt-500 p-[1rem] rounded-[20px] mt-5 md:mx-16 mx-5">
      {user.postulations.length ? (
        <TalentApps apps={talentApps} />
      ) : (
        <h1>No tienes postulaciones </h1>
      )}
    </div>
  );
}

export default MyApps;
