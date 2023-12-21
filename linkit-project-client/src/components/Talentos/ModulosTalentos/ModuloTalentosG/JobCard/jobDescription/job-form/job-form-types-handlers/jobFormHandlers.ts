import { stack, technologies, User } from "./jobFormTypes"



export const handleStackChange = (stack: string, userStack: stack, setUserStack: Function, setUser: Function) => {

    if(userStack.includes(stack)) return
    const newUserStack = [...userStack, stack]
    setUserStack(newUserStack)
    setUser((prevUser: User) => ({ ...prevUser, technicalStack: newUserStack }))
    
  }

 export const handleDeleteStack = (stack: string, userStack: stack, setUserStack: Function, setUser: Function) => {
    const newUserStack = userStack.filter((userStack: any) => userStack !== stack)
    setUserStack(newUserStack)
    setUser((prevUser: User) => ({ ...prevUser, technicalStack: newUserStack }))
  }

  export const handleTechChange = (tech: string, userTechnologies: technologies, setUserTechnologies: Function, setUser: Function) => {

    if(userTechnologies.includes(tech)) return
    const newUserTechnologies = [...userTechnologies, tech]
    setUserTechnologies(newUserTechnologies)
    setUser((prevUser: User) => ({ ...prevUser, technologies: newUserTechnologies }))
  }

  export const handleRecruiterChange = (recruiter: string, setRecruiter: Function, setUser: Function) => {
    setRecruiter(recruiter);
    setUser((prevUser: User) => ({ ...prevUser, recruiter: recruiter }));
  }

  export const handleDeleteTech = (tech: any, userTechnologies: technologies, setUserTechnologies: Function, setUser: Function) => {
    const newUserTechnologies = userTechnologies.filter((userTech: any) => userTech !== tech)
    setUserTechnologies(newUserTechnologies)
    setUser((prevUser: User) => ({ ...prevUser, technologies: newUserTechnologies }))
  }
