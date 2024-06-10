import { contacts } from "./typeContacts";

export default function validations (contacts: contacts) {
    const errors = {
        firstName: "",
        lastName: "",
        company: "",
        service: "",
        email: "",
        message: "",
        web: ""
    }
    
    if (contacts.firstName.length === 0) {
        errors.firstName = "Nombre requerido"
    }
    if (contacts.web?.length === 0) {

        errors.web = "La Web es requerida"
    }
    if (typeof contacts.firstName !== 'string') {
        errors.firstName = "Nombre inválido"
     }

     if (contacts.lastName.length === 0) {
        errors.lastName = "Apellido requerido"
        }

    if (typeof contacts.lastName !== 'string') {
        errors.lastName = "Apellido inválido"
        }
    if (contacts.company.length === 0) {
        errors.company = "Nombre de empresa requerida"
    }
    if (typeof contacts.company !== 'string') {
        errors.company = "Nombre inválido"
     }
    if (contacts.service.length === 0) {
        errors.service = "Selecciona al menos un servicio"}
    if (!contacts.email) {
        errors.email = "Email requerido"
    } else if (!/\S+@\S+\.\S+/.test(contacts.email)) {
        errors.email = "Email inválido"
    }
    if (contacts.message.length === 0) {
        errors.message = "Mensaje requerido"
    }
    return errors 
 }