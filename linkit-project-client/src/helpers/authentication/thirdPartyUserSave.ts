import axios from "axios";
import { SUPERADMN_ID } from "../../env";

export default async function saveUserThirdAuth(user: any, role: string) {
  const userToSave = {
    companyName: user.displayName,
    firstName: user.displayName.split(' ')[0],
    lastName: user.displayName.split(' ')[1] ?? '',
    email: user.email,
    image: user.photoURL,
    role: role ?? "user",
  };
  let result;
  try {
    if (role === "user") {
      result = await axios.post(
        "https://linkit-server.onrender.com/users/create",
        userToSave,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
          },
        }
      );
    } else if (role === "company") {
      result = await axios.post(
        "https://linkit-server.onrender.com/companies/create",
        userToSave,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
          },
        }
      );
    } else throw Error("Not a valid role for this path");
  } catch (error) {
    throw Error("Failed to save user info on DB: " + error);
  }
  return result.data;
}
