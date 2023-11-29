import { vacancyProps } from "../../../admin.types"

export default function validations (vacancies: Partial<vacancyProps>) {
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
  }

  
  if(!vacancies.title) {
    errors.title = "Título requerido"
  }
  
  if(!vacancies.code) {
    errors.code = "Código requerido"
  }

  if(typeof vacancies.title !== 'string') {
    errors.title = "Título inválido"
  }

  if(!vacancies.description) {  
    errors.description = "Descripción requerida"
  }
  
  if(vacancies.type === "") {
    errors.type = "Tipo requerido"
  }

  if(!vacancies.location) {
    errors.location = "Ubicación requerida"
  }

  if(vacancies.modality === "") {
    errors.modality = "Modalidad requerida"
  }

  if(!vacancies.stack || vacancies.stack.length === 0) {
    errors.stack = "Stack requerido"
  }

  if(!vacancies.requirements || vacancies.requirements.length === 0) {
    errors.requirements = "Requerimientos requeridos"
  }

  if(!vacancies.company) {
    errors.company = "Empresa requerida"
  }


  return errors

}