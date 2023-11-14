
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
        errors.name = "Debes escribir un nombre"
    }else if(/[\d]/.test(user.name)){
        errors.name = "El nombre no debe contener numeros"
    }

    if(user.email.trim() === ""){
        errors.email = "Debes escribir un email"
    }else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)){
        errors.email = "Email inválido"
    }

    if(user.password.trim() === ""){
        errors.password = "Debes escribir una contraseña"
    }else if(user.password.length < 8){
        errors.password = "La contraseña debe tener al menos 8 caracteres"
    }else if(!/[!@#$%^&*(),.?":{}|<>]/.test(user.password)){
        errors.password = "La contraseña debe contener al menos 1 caracter especial";
    }

    if(user.confirm_password.trim() === ""){
        errors.confirm_password = "Debes escribir la confirmación de la contraseña"
    }else if(user.password !== user.confirm_password){
        errors.confirm_password = "Las contraseñas no coinciden"
    }

    return errors
}

export default validations