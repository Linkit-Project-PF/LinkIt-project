export interface PostEntity  {
  _id: string
  title: string
  description: string
  headers?: string[]
  createdDate: Date
  image: string
  link: string
  type: string
  archived?: boolean | null
  category: string
}
