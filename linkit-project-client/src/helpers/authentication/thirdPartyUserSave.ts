import axios from "axios";

export default async function saveUserThirdAuth(user: any, role: string) {
    const userToSave = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        phone: user.phoneNumber || "1111111",
        country: "US",
        role: role ?? "user",
    };
    let result
    try {
        if (role === "user") {
        result = await axios.post(
            "https://linkit-server.onrender.com/users/create",
            userToSave
         )
        } else if (role === "company") {
            result = await axios.post(
                'https://linkit-server.onrender.com/companies/create',
                userToSave
                )
         } else throw Error("Not a valid role for this path")
        
    } catch (error) {
        throw Error("Failed to save user info on DB: " + error)
    }
    return result.data;
}