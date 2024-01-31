import { ReviewProps } from "../../../admin.types";

export const validations = (review: ReviewProps) => {
  const errors = {
    name: "",
    role: "",
    country: "",
    detail: "",
  };

  if (!review.name) {
    errors.name = "Nombre requerido";
  }

  if (!review.role) {
    errors.role = "Rol requerido";
  }

  if (!review.country) {
    errors.country = "País requerido";
  }

  if (!review.detail) {
    errors.detail = "Detalle requerido";
  }

  return errors;
}