export type vacancieProps = {
  code: string
  title: string
  description: string
  type: string
  location: string
  modality: string
  stack: string[]
  aboutUs: string
  aboutClient?: string | null
  responsabilities: string
  requirements: string[]
  niceToHave: string[]
  benefits: string[]
  archived: boolean
  company: string
  status: string
  users: string[]
  createdDate: string //! ver si recibe un string o un date
  __v: number;
  _id: string;
};

export type ResourceProps = {
  id: number,
  title: string,
  description: string,
  link: string,
  type: string,
  date: string,
  image: string,
  category: string,
  archived: boolean,
}