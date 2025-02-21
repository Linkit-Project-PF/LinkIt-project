export type JobDescriptionProps = {
    _id: string
    code: string
    title: string
    description: string
    type: string
    location: string
    modality: string
    stack: string[]
    aboutUs: string
    aboutClient: string
    responsabilities: string[]
    requirements: string[]
    niceToHave: string[]
    benefits: string[]
    archived: boolean
    company: string
    status: string
}

export type State = {
    Authentication: {
        isAuthenticated: boolean
        user: {
            active: boolean;
            cv: {
                cloudinaryId: string,
                fileName: string
            },
            role: string
        }
    }
}