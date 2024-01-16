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

  if (!resource.image) {
    errors.image = "Imagen requerido";
  }
  if (!resource.category) {
    errors.category = "Categoría requerido";
  }
  if (resource.description.length > 150) {
    errors.description = "La descripción debe ser menor a 150 caracteres"
  }

  return errors;
}