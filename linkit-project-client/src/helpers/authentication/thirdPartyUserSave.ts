import axios from "axios";
import { SUPERADMN_ID } from "../../env";

export default async function saveUserThirdAuth(user: any, role: string) {
  let result;
  console.log(SUPERADMN_ID);
  try {
    if (role === "user") {
      const userToSave = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        role: role ?? "user",
      };
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
      const companyToSave = {
        companyName: user.displayName,
        email: user.email,
        image: user.photoURL,
        role: role ?? "company",
      };
      result = await axios.post(
        "https://linkit-server.onrender.com/companies/create",
        companyToSave,
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
