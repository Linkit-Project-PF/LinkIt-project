export type stack = string[]
export type technologies = string[]

export interface User {
    name: string,
    lastName: string,
    email: string,
    country: string,
    cv: string,
    linkedin: string,
    englishLevel: string,
    salary: number,
    technicalStack: stack,
    recruiter: string,
    availability:string,
    technologies: technologies,
    reason: string,
}
 