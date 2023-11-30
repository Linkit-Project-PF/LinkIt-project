import axios from 'axios';
import { IUser, ICompany } from './types';
import { SUPERADMN_ID } from '../../env';

export const URL = `https://linkit-server.onrender.com`

export const editUser = async (user: IUser): Promise<IUser> => {
  const userObj = {
    image: user.image,
    name: user.name,
    email: user.email,
    country: user.country,
    linkedin: user.linkedin,
    englishLevel: user.englishLevel,
    cv: user.cv,
    technologies: user.technologies,
    active: user.active,
  }
	const response = await axios.put(`${URL}/users/update/${user._id}`, 
    userObj
  , {
    headers: { Authorization: `Bearer ${SUPERADMN_ID}` },
  })
  console.log(response)
	return response.data
}

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
  }
  const response = await axios.put(`${URL}/companies/update/${company._id}`,
  companyObj
  , {
    headers: { Authorization: `Bearer ${SUPERADMN_ID}` },
  })
  console.log(response)
  return response.data
  }

