import { vacancieProps } from "../../../admin.types"

export default function validations (vacancies: vacancieProps) {
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
  if(typeof vacancies.description !== 'string') {
    errors.description = "Descripción inválida"
  }
  
  if(vacancies.type === "") {
    errors.type = "Tipo requerido"
  }
  if(typeof vacancies.type !== 'string') {
    errors.type = "Tipo inválido"
  }

  if(!vacancies.location) {
    errors.location = "Ubicación requerida"
  }
  if(typeof vacancies.location !== 'string') {
    errors.location = "Ubicación inválida"
  }

  if(vacancies.modality === "") {
    errors.modality = "Modalidad requerida"
  }


  if(!vacancies.stack) {
    errors.stack = "Stack requerido"
  }
  if(!vacancies.stack.length) {
    errors.stack = "Stack requerido"
  }
  if(!Array.isArray(vacancies.stack)) {
    errors.stack = "Stack inválido"
  }

  if(!vacancies.aboutUs) {
    errors.aboutUs = "Sobre nosotros requerido"
  }
  if(typeof vacancies.aboutUs !== 'string') {
    errors.aboutUs = "Sobre nosotros inválido"
  }

  if(!vacancies.aboutClient) {
    errors.aboutClient = "Sobre el cliente requerido"
  }
  if(typeof vacancies.aboutClient !== 'string') {
    errors.aboutClient = "Sobre el cliente inválido"
  }

  if(!vacancies.responsabilities) {
    errors.responsabilities = "Responsabilidades requeridas"
  }
  if(!vacancies.responsabilities.length) {
    errors.responsabilities = "Responsabilidades requeridas"
  }

  if(!Array.isArray(vacancies.responsabilities)) {
    errors.responsabilities = "Responsabilidades inválidas"
  }

  if(!vacancies.requirements) {
    errors.requirements = "Requerimientos requeridos"
  }

  if(!vacancies.requirements.length) {
    errors.requirements = "Requerimientos requeridos"
  }

 

  if(!vacancies.niceToHave) {
    errors.niceToHave = "Nice to have requerido"
  }

  if(!vacancies.niceToHave.length) {
    errors.niceToHave = "Nice to have requerido"
  }

  if(!Array.isArray(vacancies.niceToHave)) {
    errors.niceToHave = "Nice to have inválido"
  }

  if(!vacancies.benefits) {
    errors.benefits = "Beneficios requeridos"
  }

  if(!vacancies.benefits.length) {
    errors.benefits = "Beneficios requeridos"
  }

  if(!Array.isArray(vacancies.benefits)) {
    errors.benefits = "Beneficios inválidos"
  }

  if(!vacancies.company) {
    errors.company = "Empresa requerida"
  }

  if(typeof vacancies.company !== 'string') {
    errors.company = "Empresa inválida"
  }

  return errors

}