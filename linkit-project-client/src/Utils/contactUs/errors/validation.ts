import { returnContactErrors } from "./returnErrors";
import { contacts } from "../typeContacts";

export const validateContact = (contacts: contacts): void => {
  if (!contacts.firstName) returnContactErrors("Nombre requerido");
  if (!contacts.lastName) returnContactErrors("Apellido requerido");
  if (!contacts.company) returnContactErrors("Nombre de empresa requerida");
  if (contacts.service.length === 0) returnContactErrors("Selecciona al menos un servicio");
  if (!contacts.email) returnContactErrors("Email requerido");
  if (!contacts.message) returnContactErrors("Mensaje requerido");
  
};
