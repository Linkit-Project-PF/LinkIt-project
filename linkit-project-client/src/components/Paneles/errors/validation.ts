import { returnFormErrors } from "./returnErrors";

export const validateForm = (form: any): void => {
  if(!form.code) returnFormErrors("Code is required")
  if(!form.title) returnFormErrors("Title is required")
  if(!form.description) returnFormErrors("Description is required")
  if(!form.type) returnFormErrors("Type is required")
  if(!form.location) returnFormErrors("Location is required")
  if(!form.modality) returnFormErrors("Modality is required")
  if(!form.stack) returnFormErrors("Stack is required")
  if(!form.requirements) returnFormErrors("Requirements is required")
}