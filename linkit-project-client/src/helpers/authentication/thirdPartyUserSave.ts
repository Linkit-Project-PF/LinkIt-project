import axios from "axios";
import { User } from "firebase/auth";

export default async function saveUserThirdAuth(user: User, role?: string | null) {
    const userToSave = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        phone: user.phoneNumber || "1111111",
        country: "US",
        role: role ?? "user",
    };
    console.log("inside", userToSave, role)
    const {data} = await axios.post(
        "https://linkit-server.onrender.com/users/register",
        // "http://localhost:3000/users/register",
        userToSave
     );
    return data;
}