export type VacancyProps = {
  code: string;
  title: string;
  description: string;
  type: string;
  location: string;
  modality: string;
  stack: string[];
  aboutUs: string;
  aboutClient?: string;
  responsabilities: string;
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  archived: boolean;
  company: string;
  status: string;
  createdDate: string; //! ver si recibe un string o un date
  __v: number;
  _id: string;
  users: string[];
};

export interface Header {
  head: string;
  body: string;
  sectionImage: string;
}

export type ResourceProps = {
  _id: string;
  title: string;
  description: string;
  link: string;
  type: string;
  createdDate: string;
  image: string;
  category: string;
  archived: boolean;
  createdBy : string; 
  headers: Header[];
};

export type ViewResourceProps = {
  _id: boolean;
  title: boolean;
  description: boolean;
  link: boolean;
  type: boolean;
  createdDate: boolean;
  image: boolean;
  category: boolean;
  archived: boolean;
};

export type UserProps = {
  _id: string;
  airTableId: string;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  role: string;
  linkedin: string;
  cv: string;
  technologies: string[];
  active: boolean;
  registeredDate: Date;
};

export type ReviewProps = {
  _id: string;
  name: string;
  rol: string;
  country: string;
  detail: string;
  archived: boolean;
  createdDate: string;
};
export type ViewReviewProps = {
  _id: boolean;
  name: boolean;
  rol: boolean;
  country: boolean;
  detail: boolean;
  archived: boolean;
};

export interface ViewColVacancy {
  title: boolean;
  description: boolean;
  type: boolean;
  location: boolean;
  modality: boolean;
  stack: boolean;
  users: boolean;
  AboutUs: boolean;
  AboutClient: boolean;
  responsabilities: boolean;
  requiriments: boolean;
  niceToHave: boolean;
  benefits: boolean;
  company: boolean;
  status: boolean;
  code: boolean;
  archived: boolean;
}

export interface ClientFollowUpProps {
  "Recruitment role code": number;
  "1st Client interview": string;
  "1st Offer": string;
  "1st endorsement": string;
  "2nd Client interview": string;
  "Alignment/Start date": string;
  "Año fecha cierre": string;
  "Años de experiencia mínimo": string;
  Area: string;
  BUDGET: string;
  "BUDGET in USD": string;
  "Cantidad de vacantes": string;
  "Cl. Interview time": string;
  Client: string;
  "Contact Name": string;
  "Contact mail": string;
  Comments: string;
  "Closed Rate": string;
  Country: string;
  "Created By": string;
  "Created time Month": string;
  "Created time year": string;
  "Endorsement time": string;
  "English Level": string;
  "Fee acordado": string;
  "Hourly Type": string;
  JD: string;
  "Last Modified": string;
  "Lider de la búsqueda": string;
  "Mes fecha cierre": string;
  "Modalidad de empleo": string;
  "Nombre talento": string;
  "On-site / Remote": string;
  "Prospect type": string;
  "Reasons closed lost": string;
  Recruiter: string;
  Responsable: string;
  "Role Code": string;
  "Role Name": string;
  "Role Closed date": string;
  "Sales code": string;
  Seniority: string;
  Status: string;
  "Talent Pool Stack": string;
  "Talent Start Date": string;
  "Time to fill": string;
  "Time to offer": string;
  "Tipo de cliente": string;
  "Tipo de oportunidad": string;
  "To today": string;
  "Total candidates endorsed": string;
  created: string;
}

export interface ViewColClientsFollowUps {
  "Recruitment role code": boolean;
  Client: boolean;
  "Role Name": boolean;
  "Tipo de cliente": boolean;
  "Lider de la búsqueda": boolean;
  Status: boolean;
  "Tipo de oportunidad": boolean;
  "Role Code": boolean;
  JD: boolean;
  "1st Client interview": boolean;
  "1st Offer": boolean;
  "1st endorsement": boolean;
  "2nd Client interview": boolean;
  "Alignment/Start date": boolean;
  "Año fecha cierre": boolean;
  "Años de experiencia mínimo": boolean;
  Area: boolean;
  BUDGET: boolean;
  "BUDGET in USD": boolean;
  "Cantidad de vacantes": boolean;
  "Cl. Interview time": boolean;
  "Contact Name": boolean;
  "Contact mail": boolean;
  Comments: boolean;
  "Closed Rate": boolean;
  Country: boolean;
  "Created By": boolean;
  "Created time Month": boolean;
  "Created time year": boolean;
  "Endorsement time": boolean;
  "English Level": boolean;
  "Fee acordado": boolean;
  "Hourly Type": boolean;
  "Last Modified": boolean;
  "Mes fecha cierre": boolean;
  "Modalidad de empleo": boolean;
  "Nombre talento": boolean;
  "On-site / Remote": boolean;
  "Prospect type": boolean;
  "Reasons closed lost": boolean;
  Recruiter: boolean;
  Responsable: boolean;
  "Role Closed date": boolean;
  "Sales code": boolean;
  Seniority: boolean;
  "Talent Pool Stack": boolean;
  "Talent Start Date": boolean;
  "Time to fill": boolean;
  "Time to offer": boolean;
  "To today": boolean;
  "Total candidates endorsed": boolean;
  created: boolean;
}

export interface CompaniesProps {
  active: boolean;
  airTableId: string;
  companyName: string;
  country: string;
  email: string;
  firebaseId: string;
  image: string;
  interested: string;
  linkedin: string;
  registeredDate: string;
  repName: string;
  role: string;
  __v: number;
  _id: string;
  createdDate: string;
}

export interface ViewColHeadCompaniesU {
  rol: boolean;
  empresa: boolean;
  pais: boolean;
  correo: boolean;
  linkedin: boolean;
  representante: boolean;
  imágen: boolean;
  "Fecha de registro": boolean;
  interesado: boolean;
  "AirTable Id": boolean;
  "Firebase Id": boolean;
  estado: boolean;
}


export interface Admin {
  role: string;
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  createdDate: string;
  image: string;
  firebaseId: string;
  active: boolean;
  permissions: {
    get: string[];
    create: string[];
    update: string[];
    delete: string[];
    special: string[];
  };
  __v: number;
  _id: string;
}

export interface ViewColHeadAdmins {
  rol: boolean;
  nombre: boolean;
  apellido: boolean;
  pais: boolean;
  correo: boolean;
  'Fecha de creación': boolean;
  imágen: boolean;
  'Firebase Id': boolean;
  Estado: boolean;
}

export interface TalentProps {
  active: boolean;
  airTableId: string;
  country: string;
  cv: string;
  email: string;
  englishLevel: string;
  firebaseId: string;
  firstName: string;
  image: string;
  lastName: string;
  linkedin: string;
  postulations: any[]; //* Revisar si se puede más específico
  registeredDate: string;
  role: string;
  technologies: any[]; //* Revisar si se puede más específico
  __v: number;
  _id: string;
  createdDate: string;
}

export interface ViewColHeadTalent {
  rol: boolean;
  nombre: boolean;
  apellido: boolean;
  pais: boolean;
  correo: boolean;
  curriculum:boolean;
  linkedin: boolean;
  tecnologías: boolean;
  'Fecha de creación': boolean;
  postulaciones: boolean;
  'Nivel de inglés': boolean;
  imágen: boolean; 
  estado: boolean; 
}

export interface SpecificOKRsArea {
  okrSpecificName: string
  okrsSpecific: string[]
}

export interface Area {
  name: string
  specificOKRsArea: SpecificOKRsArea[]
}

export interface OKRsType {
  map(arg0: (okr1: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
  generalTitleOKR: string
  areas: Area[]
  archived: boolean
}
