import { WebsiteUser } from "../components/Profiles/types";

export interface IAuthState {
  isAuthenticated: boolean;
  role: string;
  user: WebsiteUser | null;
  token: string | null;
}

export interface RootState {
  Authentication: IAuthState;
  registerLogin: any;
  jobCard: any;
  resources: any;
  darkMode: boolean;
  ourServices: any;
}

export interface JobData {
  "Alignment/Start date": string;
  "Año fecha cierre": string | "NaN";
  "Años de experiencia mínimo": number;
  BUDGET: string;
  "BUDGET in USD": string;
  "Cantidad de vacantes": number;
  "Cl. Interview time": string | "#ERROR";
  Client: string;
  "Contact Name": string;
  "Contact mail": string;
  Country: string;
  "Created By": string;
  "Created time Month": number;
  "Created time year": number;
  "Endorsement time": string;
  "English Level": string;
  "Fee acordado": number;
  JD: string;
  "Last Modified": string;
  "Lider de la búsqueda": string[];
  "Mes fecha cierre": string | "NaN";
  "Modalidad de empleo": string;
  "On-site / Remote": string;
  "Prospect type": string;
  "Recruitment role code": number;
  Responsable: string;
  "Role Code": string;
  "Role Name": string;
  "Sales code": number;
  Seniority: string;
  Status: string;
  "Talent Pool Stack": string;
  "Time to fill": string | "#ERROR";
  "Time to offer": string | "#ERROR";
  "Tipo de cliente": string;
  "Tipo de oportunidad": string;
  "To today": number;
  "Total candidates endorsed": number;
  created: string;
}
