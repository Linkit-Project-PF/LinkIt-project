import { Error, User } from "./register.types"

function validations(user: User) {
    const errors: Error = {
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    if(user.firstName.trim() === ""){
        errors.firstName = "Debes escribir un nombre"
    }else if(/[\d]/.test(user.firstName)){
        errors.firstName = "El nombre no debe contener numeros"
    }

    if(user.lastname.trim() === ""){
        errors.lastname = "Debes escribir un apellido"
    }else if(/[\d]/.test(user.lastname)){
        errors.lastname = "El apellido no debe contener numeros"
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