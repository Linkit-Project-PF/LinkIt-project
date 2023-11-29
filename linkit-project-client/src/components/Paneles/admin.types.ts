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
  users: string[];
  createdDate: string; //! ver si recibe un string o un date
  __v: number;
  _id: string;
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
  image: string;
  name: string;
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
