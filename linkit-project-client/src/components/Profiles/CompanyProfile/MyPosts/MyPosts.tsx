import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { SUPERADMN_ID } from "../../../../env";
import CompanyPosts from "./CompanyPosts";
import { ICompany } from "../../types";

export interface ICompanyPost {
  _id: string;
  contactMail: string;
  BUDGET: string;
  EnglishLevel: string;
  "On-site / Remote": string;
  "Cantidad de vacantes": number;
  Country: string;
  "Role Code": string;
  "Mes fecha cierre": string;
  "Time to offer": string;
  "Año fecha cierre": string;
  "Alignment/Start date": string;
  "Time to fill": string;
  "Reasons closed lost": string;
  "Created time year": number;
  "Tipo de oportunidad": string;
  "Fee acordado": number;
  BUDGETinUSD: string;
  "Años de experiencia mínimo": number;
  "Role Name": string;
  "Created time Month": number;
  Responsable: string;
  "Total candidates endorsed": number;
  Area: string;
  "Contact Name": string;
  "Líder de la búsqueda": string[];
  Status: string;
  "Recruitment role code": number;
  "Prospect type": string;
  "Talent Pool Stack": string;
  created: string;
  JD: string;
  "Tipo de cliente": string;
  "Endorsement time": string;
  "Created By": string;
}

interface componentprops {
  loader: (value: boolean) => void;
}

function MyPosts({ loader }: componentprops) {
  const [companyPosts, setCompanyPosts] = useState<ICompanyPost[]>();

  const companyName = useSelector(
    (state: RootState) => (state.Authentication.user as ICompany).companyName
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `https://linkit-server.onrender.com/resources/companyjds?company=${companyName}`,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        }
      );
      setCompanyPosts(response.data);
      loader(false);
    };
    fetchPosts();
    return () => loader(true);
  }, []);

  if (!companyPosts) return null;

  return (
    <div className="flex left-1/2 top-1/2 mx-3 md:mx-6 p-5 bg-linkIt-500 rounded-[20px]">
      <CompanyPosts posts={companyPosts} />
    </div>
  );
}

export default MyPosts;
