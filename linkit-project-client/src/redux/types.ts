import { IUser } from "../components/Profiles/types"

export interface IAuthState {
  authState: {
  isAuthenticated: boolean
  role: string
  user: IUser | null
  token: string | null
  }
  token: string | null
  user: IUser | null
}

export interface RootState {
  Authentication: IAuthState
  registerLogin: any
  jobCard: any
  resources: any
}