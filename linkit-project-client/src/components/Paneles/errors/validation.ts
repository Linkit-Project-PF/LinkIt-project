import { returnFormErrors } from "./returnErrors";
import { ReviewProps, VacancyProps } from "../admin.types";

export const validateVacancy = (form: VacancyProps): void => {
  if(!form.code) returnFormErrors("Code is required")
  if(!form.title) returnFormErrors("Title is required")
  if(!form.description) returnFormErrors("Description is required")
  if(!form.type) returnFormErrors("Type is required")
  if(!form.location) returnFormErrors("Location is required")
  if(!form.modality) returnFormErrors("Modality is required")
  if(!form.requirements) returnFormErrors("Requirements is required")
  if(!form.responsabilities) returnFormErrors("Responsabilities is required")
  if(!form.company) returnFormErrors("Company is required")
  if(!form.status) returnFormErrors("Status is required")
  
}

export const validateReview = (form: ReviewProps): void => {
  if(!form.name) returnFormErrors("Name is required")
  if(!form.role) returnFormErrors("Role is required")
  if(!form.country) returnFormErrors("Country is required")
  if(!form.detail) returnFormErrors("Detail is required")
}