export enum UserRoleEnum {
  ADMIN = "admin",
  USER = "user",
  COMPANY = "company",
}

export enum EnglishLevelEnum {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  BILINGUAL = "bilingual",
}

enum Providers {
  google = 'google',
  credentials = 'email',
  github = 'github'
}

export type Curriculum = {
  fileName: string,
  cloudinaryId: string
}

type permissons = {
  get: string[];
  create: string[];
  update: string[];
  delete: string[];
  special: string[];
};

export interface IUser extends WebUser {
  firstName: string
  lastName: string
  linkedin: string
  airTableId: string
  englishLevel: EnglishLevelEnum
  cv: Curriculum
  technologies: string[]
  postulations: string[]
}

export interface ICompany extends WebUser {
  airTableId: string
  companyName: string;
  repName?: string;
  linkedin?: string;
  interested?: string
}

export interface IAdmin extends WebUser {
  firstName: string;
  lastName: string;
  permissions: permissons;
}


interface WebUser {
  _id: string
  firebaseId: string
  image?: string
  email: string
  country?: string
  active: string
  createdDate: Date
  role: UserRoleEnum
  provider: Providers
  password?: string
}

export type UserLoginType = {
  email: string
  password: string
}

export type WebsiteUser = IAdmin  | IUser | ICompany