import axios from 'axios';
import { IUser } from './types';
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
