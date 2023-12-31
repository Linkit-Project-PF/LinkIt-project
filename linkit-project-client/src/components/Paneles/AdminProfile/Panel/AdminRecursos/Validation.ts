import { ResourceProps } from "../../../admin.types";

export const validations = (resource: ResourceProps) => {
  const errors = {
    title: "",
    description: "",
    link: "",
    type: "",
    image: "",
    category: "",
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

  if (!resource.type) {
    errors.type = "Tipo requerido";
  }
  if (!resource.image) {
    errors.image = "Imagen requerido";
  }
  if (!resource.category) {
    errors.category = "Categoría requerido";
  }

  return errors;
}