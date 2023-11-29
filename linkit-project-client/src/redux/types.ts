import { IUser, ICompany } from "../components/Profiles/types"

export interface IAuthState {
  isAuthenticated: boolean
  role: string
  user: IUser | null
  company: ICompany | null
  token: string | null
}

export interface RootState {
  Authentication: IAuthState
  registerLogin: any
  jobCard: any
  resources: any
}