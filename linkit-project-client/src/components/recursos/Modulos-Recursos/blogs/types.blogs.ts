export interface PostEntity  {
  createdBy: string
  _id: string
  title: string
  description: string
  headers?: string[]
  createdDate: string
  image: string
  link: string
  type: string
  archived?: boolean | null
  category: string
}
