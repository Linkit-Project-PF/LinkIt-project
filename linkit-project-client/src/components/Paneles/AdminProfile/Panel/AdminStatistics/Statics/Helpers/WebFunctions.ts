import { ICompany, IUser } from "../../../../../../Profiles/types";

export function mostUsedProvider(users: IUser[], companies: ICompany[]) {
    const allUsers = [...users, ...companies];
    const googleProv = allUsers.filter((item) => item.provider === "google");
    const githubProv = allUsers.filter((item) => item.provider === "github");
    const emailProv = allUsers.filter((item) => item.provider === "email");
    if (
      googleProv.length > githubProv.length &&
      googleProv.length > emailProv.length
    )
      return "Google";
    else if (
      githubProv.length > googleProv.length &&
      githubProv.length > emailProv.length
    )
      return "GitHub";
    else if (
        emailProv.length > googleProv.length &&
        emailProv.length > githubProv.length
    ) 
      return "Email";
  }


export function mostRepeatedCountry(entity: IUser[] | ICompany[]): string {
    const countryCount: any = {}
    entity.forEach((item) => {
        const country = item.country as string
        if (country) {
            countryCount[country] = (countryCount[country] || 0) + 1
        }
    })

    let mostRepeated = "";
    let maxCount = 0;

    for (const country in countryCount) {
        if (countryCount[country] > maxCount) {
            mostRepeated = country;
            maxCount = countryCount[country]
        }
    }

    return mostRepeated
    
}


export function mostRepeatedInterest(companies: ICompany[]): string {
    const interestCount: any = {}
    companies.forEach(company => {
        const interest = company.interested as string
        if (interest) {
            interestCount[interest] = (interestCount[interest] || 0) + 1
        }
    })

    let mostRepeated = ""
    let maxCount = 0;

    for (const interest in interestCount) {
        if (interestCount[interest] > maxCount) {
            mostRepeated = interest;
            maxCount = interestCount[interest]
        }
    }

    return mostRepeated
}