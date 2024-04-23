import { VacancyProps } from "../../../admin.types";

export function validations(vacancies: VacancyProps) {
  const errors = {
    code: "",
    title: "",
    description: "",
    type: "",
    location: "",
    modality: "",
    stack: "",
    aboutUs: "",
    aboutClient: "",
    responsabilities: "",
    requirements: "",
    niceToHave: "",
    benefits: "",
    company: "",
  };

  if (!vacancies.title) {
    errors.title = "Título requerido";
  }

  if (!vacancies.code) {
    errors.code = "Código requerido";
  }

  if (typeof vacancies.title !== "string") {
    errors.title = "Título inválido";
  }

  if (!vacancies.description) {
    errors.description = "Descripción requerida";
  }

  if (vacancies.type === "") {
    errors.type = "Tipo requerido";
  }

  if (!vacancies.location) {
    errors.location = "Ubicación requerida";
  }

  if (vacancies.modality === "") {
    errors.modality = "Modalidad requerida";
  }

  // if (!vacancies.stack || vacancies.stack.length === 0) {
  //   errors.stack = "Stack requerido";
  // }

  if (!vacancies.requirements || vacancies.requirements.length === 0) {
    errors.requirements = "Requerimientos requeridos";
  }

  if (!vacancies.company) {
    errors.company = "Empresa requerida";
  }

  return errors;
}
const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export function objectIDValidator(id: string): string {
  if (!objectIdRegex.test(id)) return "El ID no es un tipo valido";
  else return "";
}

interface relationObj {
  user: string;
  jd: string;
  status: string;
}

export function validatePostulation(obj: Partial<relationObj>) {
  const validStatus = ["applied", "state1", "state2", "state3"]; //TODO: Change this to the valid user statuses
  const newObj = { user: "", jd: "", status: "" };
  if (obj.user) newObj.user = objectIDValidator(obj.user);
  else newObj.user = "El ID de usuario es necesario";
  if (obj.jd) newObj.jd = objectIDValidator(obj.jd);
  else newObj.jd = "El ID de la oferta es necesario";
  if (obj.status) {
    if (!validStatus.includes(obj.status))
      newObj.status = "No es un estado valido";
    else newObj.status = "";
  } else newObj.status = "Por favor selecciona un estado";
  return newObj;
}
