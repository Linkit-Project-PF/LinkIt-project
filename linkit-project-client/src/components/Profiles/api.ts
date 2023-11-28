import axios from 'axios';
import { IUser } from './types';

export const URL = `https://linkit-server.onrender.com`

export const editUser = async (user: IUser, userToken: string): Promise<IUser> => {
	const response = await axios.put(`${URL}/users/update/${user._id}`, {
    ...user
  }, {
    headers: { Authorization: `Bearer ${userToken}` },
  })
  console.log(response)
	return response.data
}
