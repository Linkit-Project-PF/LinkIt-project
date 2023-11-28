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
  _id: string
  status: string
}

export interface IUser {
  _id:	string
  airTableId:	string
  image: string
  name: string
  email: string
  country: string
  linkedin: string
  englishLevel: EnglishLevelEnum 
  cv: string
  role: UserRoleEnum
  technologies: string[]
  active: boolean
  postulations: IPostulation[]
}