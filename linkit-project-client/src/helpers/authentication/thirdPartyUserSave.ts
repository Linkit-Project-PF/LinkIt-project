import axios from "axios";
import { SUPERADMN_ID } from "../../env";

export default async function saveUserThirdAuth(user: any, role: string, provider: string) {

  // TODO Send info to airtable
  const userToSave = {
    firebaseId: user.uid,
    companyName: user.displayName,
    firstName: user.displayName.split(' ')[0],
    lastName: user.displayName.split(' ')[1] ?? '',
    email: user.email,
    image: user.photoURL,
    provider: provider
  };
  let result;
  console.log("authentication")
  try {
    if (role === "user") {
      // "https://linkit-server.onrender.com/users/create"
      result = await axios.post(
        "http://localhost:3000/users/create",
        userToSave,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
            'Accept-Language': sessionStorage.getItem('lang')
          },
        }
      );
    } else if (role === "company") {
      // "https://linkit-server.onrender.com/companies/create"
      result = await axios.post(
        "http://localhost:3000/companies/create",
        userToSave,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
            'Accept-Language': sessionStorage.getItem('lang')
          },
        }
      );
    } else throw Error("Not a valid role for this path");
  } catch (error) {
    console.log(error)
    throw Error("Failed to save user info on DB: " + error);
  }
  return result.data;
}
