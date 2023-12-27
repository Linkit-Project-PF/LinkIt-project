type User = {
    email: string,
    password: string,
}

type Error = {
    email: string,
    password: string,
}

function validations(user: User) {
    const errors: Error = {
        email: "",
        password: "",
    }

    if(user.email.trim() === ""){
        errors.email = "Email is required"
    }else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)){
        errors.email = "Email is invalid"
    }

    if(user.password.trim() === ""){
        errors.password = "Password is required"
    }else if(user.password.length < 8){
        errors.password = "Password must be at least 8 characters"
    }else if(!/[!@#$%^&*(),.?":{}|<>]/.test(user.password)){
        errors.password = "Password must contain at least one special character";
    }

    return errors
}

export default validations