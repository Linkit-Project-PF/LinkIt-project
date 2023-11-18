const errors = {
    name: "",
    lastName: "",
    company: "",
    service: "",
    email: "",
    message: ""
}

type contactos = {
        name: string,
        lastName: string,
        company: string,
        service: string[],
        email: string
        message: string
}
export default function validations (contactos: contactos) {
    if (!contactos.name) {
        errors.name = "Nombre requerido"
    }
    if (typeof contactos.name !== 'string') {
        errors.name = "Nombre inválido"
     }

     if (!contactos.lastName) {
        errors.lastName = "Apellido requerido"
        }

    if (typeof contactos.lastName !== 'string') {
        errors.lastName = "Apellido inválido"
        }
    if (!contactos.company) {
        errors.company = "Nombre de empresa requerida"
    }
    if (typeof contactos.company !== 'string') {
        errors.company = "Nombre inválido"
     }
    if (!contactos.service) {
        errors.service = "Servicio requerido"
    }
    if (!contactos.email) {
        errors.email = "Email requerido"
    } else if (!/\S+@\S+\.\S+/.test(contactos.email)) {
        errors.email = "Email inválido"
    }
    if (!contactos.message) {
        errors.message = "Mensaje requerido"
    }
    return errors 
 }