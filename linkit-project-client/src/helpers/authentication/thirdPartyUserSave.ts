import axios from "axios";

export default async function saveUserThirdAuth(user: any) {
    const userToSave = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        phone: user.phoneNumber || "1111111",
        country: "US",
    };
    const {data} = await axios.post(
        "https://linkit-server.onrender.com/users/register",
        userToSave
     );
    return data;
}