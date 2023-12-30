import axios from "axios";
import { IUser, ICompany, IAdmin } from "./types";
import { SUPERADMN_ID } from "../../env";
import { UserProps } from "../Paneles/admin.types";

export const URL = `https://linkit-server.onrender.com`;

export const editUser = async (user: IUser): Promise<IUser> => {
  const userObj = {
    image: user.image,
    firstName: user.firstName,
    lastName: user.lastName,
    country: user.country,
    linkedin: user.linkedin,
    englishLevel: user.englishLevel,
    cv: user.cv,
    technologies: user.technologies,
    active: user.active,
  };
  const response = await axios.put(`${URL}/users/update/${user._id}`, userObj, {
    headers: { Authorization: `Bearer ${SUPERADMN_ID}` },
  });
  const result = response.data.filter(
    (users: UserProps) => users._id === user._id
  );
  return result[0];
};

export const editAdmin = async (admin: IAdmin): Promise<IAdmin> => {
  const adminObj = {
    image: admin.image,
    country: admin.country,
    firstName: admin.firstName,
    lastName: admin.lastName,
  };
  const { data } = await axios.put(
    `${URL}/admins/update/${admin._id}`,
    adminObj,
    {
      headers: { Authorization: `Bearer ${SUPERADMN_ID}` },
    }
  );
  return data;
};

// COMPANY //

export const editCompany = async (company: ICompany): Promise<ICompany> => {
  const companyObj = {
    image: company.image,
    companyName: company.companyName,
    repName: company.repName,
    country: company.country,
    email: company.email,
    linkedin: company.linkedin,
    active: company.active,
  };
  const response = await axios.put(
    `${URL}/companies/update/${company._id}`,
    companyObj,
    {
      headers: { Authorization: `Bearer ${SUPERADMN_ID}` },
    }
  );
  console.log(response);
  return response.data;
};
