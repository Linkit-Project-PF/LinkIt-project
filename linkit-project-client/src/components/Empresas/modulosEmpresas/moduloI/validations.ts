import { contacts } from "./typeContacts";

const errors = {
    name: "",
    lastName: "",
    company: "",
    service: "",
    email: "",
    message: ""
}


export default function validations (contacts: contacts) {
    if (!contacts.name) {
        errors.name = "Nombre requerido"
    }
    if (typeof contacts.name !== 'string') {
        errors.name = "Nombre inválido"
     }

     if (!contacts.lastName) {
        errors.lastName = "Apellido requerido"
        }

    if (typeof contacts.lastName !== 'string') {
        errors.lastName = "Apellido inválido"
        }
    if (!contacts.company) {
        errors.company = "Nombre de empresa requerida"
    }
    if (typeof contacts.company !== 'string') {
        errors.company = "Nombre inválido"
     }
    if (!contacts.service) {
        errors.service = "Servicio requerido"
    }
    if (!contacts.email) {
        errors.email = "Email requerido"
    } else if (!/\S+@\S+\.\S+/.test(contacts.email)) {
        errors.email = "Email inválido"
    }
    if (!contacts.message) {
        errors.message = "Mensaje requerido"
    }
    return errors 
 }