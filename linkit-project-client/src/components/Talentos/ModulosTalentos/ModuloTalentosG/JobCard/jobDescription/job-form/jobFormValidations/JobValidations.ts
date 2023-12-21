

interface IUserJob {
    name: string
    lastName: string
    email: string
    country: string
    cv: string
    englishLevel: string
    linkedin: string
    salary: number 
    technicalStack: string[]
    availability: string
    recruiter: string
    technologies: string[]
    reason: string
}

export interface IErrors {
    name: string
    lastName: string
    email: string
    country: string
    cv: string
    englishLevel: string
    linkedin: string
    salary: number | string
    technicalStack: string
    availability: string
    recruiter: string
    technologies: string
    reason: string
}

export function JobValidations(User: IUserJob) {

    const errors = {} as IErrors

    if (User.name === "") {
        errors.name = "Name is required"
    }else if(User.name.length < 2){
        errors.name = "Name must be at least 3 characters long"
    }else if(User.name.length > 30){
        errors.name = "Name must be less than 30 characters long"
    }else if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(User.name.trim())){
        errors.name = "Name must contain only letters"
    }

    if(User.lastName === ""){
        errors.lastName = "Last name is required"
    }else if(User.lastName.length < 2){
        errors.lastName = "Last name must be at least 3 characters long"
    }else if(User.lastName.length > 30){
        errors.lastName = "Last name must be less than 30 characters long"
    }else if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(User.lastName)){
        errors.lastName = "Last name must contain only letters"
    }else if(User.lastName === User.name){
        errors.lastName = "Last name must be different from name"
    }

    if(User.email === ""){
        errors.email = "Email is required"
    }else if(!/\S+@\S+\.\S+/.test(User.email)){
        errors.email = "Email is invalid"
    }else if(User.email.length > 50){
        errors.email = "Email must be less than 50 characters long"
    }else if(User.email.length < 5){
        errors.email = "Email must be at least 5 characters long"
    }

    if(User.country === "" || User.country === "Select country" || User.country === undefined || User.country === null || User.country === "Ubicación"){
        errors.country = "Country is required"
    }else if(User.country.length < 3){
        errors.country = "Country must be at least 3 characters long"
    }else if(User.country.length > 30){
        errors.country = "Country must be less than 30 characters long"
    }else if(!/^[a-zA-Z]+$/.test(User.country)){
        errors.country = "Country must contain only letters"
    }else if(User.country === User.name){
        errors.country = "Country must be different from name"
    }else if(User.country === User.lastName){
        errors.country = "Country must be different from last name"
    }else if(User.country === User.email){
        errors.country = "Country must be different from email"
    }

    if(User.cv === ""){
        errors.cv = "CV is required"
    }else if(User.cv.length > 200){
        errors.cv = "CV must be less than 200 characters long"
    }else if(User.cv.length < 5){
        errors.cv = "CV must be at least 10 characters long"
    }

    if(User.englishLevel === ""){
        errors.englishLevel = "English level is required"
    }

    if(User.linkedin === ""){
        errors.linkedin = "Linkedin is required"
    }else if(!/^(https?:\/\/)?([\w\.]*)linkedin\.com\/in\/(.*)(\/)?$/i.test(User.linkedin)){
        errors.linkedin = "Not a valid Linkedin URL"
    }

    if(User.salary === 0){
        errors.salary = "Expected salary is required"
    }else if(User.salary.toString().startsWith("0")){
        errors.salary = "Expected salary must be greater than 0"
    }else if(User.salary > 1000000){
        errors.salary = "Expected salary must be less than 1000000"
    }else if(User.salary > 0 && User.salary < 100){
        errors.salary = "Expected salary must be at least 100"
    }else if(User.salary < 0){
        errors.salary = "Expected salary must be a positive number"
    }

    if(User.technicalStack.length === 0){
        errors.technicalStack = "Technical stack is required"
    }else if(User.technicalStack.length > 13){
        errors.technicalStack = "Technical stack must be less than 13"
    }else if(User.technicalStack.length < 1){
        errors.technicalStack = "Technical stack must be at least 1"
    }

    if(User.availability === ""){
        errors.availability = "Availability is required"
    }else if(User.availability.length > 50){
        errors.availability = "Availability must be less than 50 characters long"
    }else if(User.availability.length < 3){
        errors.availability = "Availability must be at least 5 characters long"
    }

    if(User.recruiter === ""){
        errors.recruiter = "Recruiter is required"
    }else if(User.recruiter.length > 50){
        errors.recruiter = "Recruiter must be less than 50 characters long"
    }else if(User.recruiter.length < 3){
        errors.recruiter = "Recruiter must be at least 5 characters long"
    }

    if(User.technologies.length === 0){
        errors.technologies = "At least one technology is required"
    }else if(User.technologies.length > 13){
        errors.technologies = "Technologies must be less than 13"
    }

    if(User.reason === ""){
        errors.reason = "The reason is required"
    }else if(User.reason.length > 300){
        errors.reason = "The reason must be less than 300 characters long"
    }else if(User.reason.length < 5){
        errors.reason = "The reason must be at least 5 characters long"
    }

    return errors
}