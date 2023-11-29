export enum UserRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
  COMPANY = 'company',
}

export enum EnglishLevelEnum {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  BILINGUAL = 'bilingual',
}

interface IPostulation {
  jd: string
  status: string
}

export interface IUser {
  _id: string
  image?: string
  name: string
  email: string
  country: string
  linkedin: string
  englishLevel: EnglishLevelEnum 
  role: UserRoleEnum
  cv: string
  technologies: string[]
  active: boolean
  password?: string
  postulations: IPostulation[]
}

export interface ICompany {
  _id: string
  image?: string
  companyName: string
  repName?: string
  country?: string
  email: string
  password?: string 
  role: UserRoleEnum
  linkedin?: string
  active: boolean
}

export interface IAdmin {
  
}

