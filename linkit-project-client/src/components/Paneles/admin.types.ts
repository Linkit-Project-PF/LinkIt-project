export type VacancyProps = {
  code: string;
  title: string;
  description: string;
  type: string;
  location: string;
  modality: string;
  stack: string[];
  aboutUs: string;
  aboutClient?: string | null;
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
  users: any[];
};

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
};

export type UserProps = {
  _id: string;
  airTableId: string;
  name: string;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  role: string;
  linkedin: string;
  cv: string;
  technologies: string[];
  active: boolean;
  postulations: postulations[];
};

interface postulations {
  jd: string;
  status: string;
}

export type ReviewProps = {
  _id: string;
  name: string,
  rol: string
  country: string
  detail: string
  archived: boolean,
}

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

export interface ClientFollowUpProps{
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
  "Recruitment role code": number;
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

export interface ViewColClientsFollowUp {
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
  Client: boolean;
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
  JD: boolean;
  "Last Modified": boolean;
  "Lider de la búsqueda": boolean;
  "Mes fecha cierre": boolean;
  "Modalidad de empleo": boolean;
  "Nombre talento": boolean;
  "On-site / Remote": boolean;
  "Prospect type": boolean;
  "Recruitment role code": boolean;
  "Reasons closed lost": boolean;
  Recruiter: boolean;
  Responsable: boolean;
  "Role Code": boolean;
  "Role Name": boolean;
  "Role Closed date": boolean;
  "Sales code": boolean;
  Seniority: boolean;
  Status: boolean;
  "Talent Pool Stack": boolean;
  "Talent Start Date": boolean;
  "Time to fill": boolean;
  "Time to offer": boolean;
  "Tipo de cliente": boolean;
  "Tipo de oportunidad": boolean;
  "To today": boolean;
  "Total candidates endorsed": boolean;
  created: boolean;
}