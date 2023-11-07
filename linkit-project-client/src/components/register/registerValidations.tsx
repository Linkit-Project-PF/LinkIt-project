
type User = {
    name: string,
    email: string,
    password: string,
    confirm_password: string
}

type Error = {
    name: string,
    email: string,
    password: string,
    confirm_password: string
}

function validations(user: User) {
    const errors: Error = {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    if(user.name.trim() === ""){
        errors.name = "Name is required"
    }else if(/[\d]/.test(user.name)){
        errors.name = "Name must not contain numbers"
    }

    if(user.email.trim() === ""){
        errors.email = "Email is required"
    }else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)){
        errors.email = "Email is invalid"
    }

    if(user.password.trim() === ""){
        errors.password = "Password is required"
    }else if(user.password.trim().length < 8){
        errors.password = "Password must be at least 6 characters"
    }


    return errors
}

export default validations