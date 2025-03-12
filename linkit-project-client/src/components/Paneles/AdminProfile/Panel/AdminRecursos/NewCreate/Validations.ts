import type { ResourceProps } from "../../../../admin.types"

export function validateResource(resource: ResourceProps): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!resource.type) {
    errors.type = "El tipo de recurso es obligatorio"
  }

  if (!resource.title || resource.title.trim() === "") {
    errors.title = "El título es obligatorio"
  }

  if (!resource.category || resource.category.trim() === "") {
    errors.category = "La categoría es obligatoria"
  }

  if (resource.type === "blog" || resource.type === "social") {
    if (!resource.description || resource.description.trim() === "") {
      errors.description = "La descripción es obligatoria"
    }
  }

  if (!resource.image || resource.image.trim() === "") {
    errors.image = "La imagen es obligatoria"
  }

  if (resource.type === "social" && (!resource.link || resource.link.trim() === "")) {
    errors.link = "El link del evento es obligatorio"
  }

  if (resource.type === "ebook" && (!resource.link || resource.link.trim() === "")) {
    errors.link = "El PDF es obligatorio"
  }

  return errors
}

