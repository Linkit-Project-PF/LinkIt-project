import { ResourceProps } from "../../../admin.types";

export const validations = (resource: ResourceProps) => {
  const errors = {
    title: "",
    description: "",
    link: "",
    image: "",
    category: "",
    headers: [],
  };

  if (!resource.title) {
    errors.title = "Título requerido";
  }
  if (!resource.description) {
    errors.description = "Descripción requerida";
  }
  if (!resource.link) {
    errors.link = "Link requerido";
  }
  if (!resource.category) {
    errors.category = "Categoría requerido";
  }
  return errors;
}