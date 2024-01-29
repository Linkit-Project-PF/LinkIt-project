import { ICompany, IUser } from "../../../../../../Profiles/types";

interface labelUserStatistics {
  label: string;
  A: number;
  fullMark: number;
}

export interface JdEntity {
  code: string;
  title: string;
  description: string;
  type: "full-time" | "part-time" | "freelance";
  location: string;
  modality: "remote" | "specific-remote" | "on-site" | "hybrid";
  stack: string[];
  aboutUs?: string | null;
  aboutClient?: string | null;
  responsabilities?: string | null;
  requirements: string[];
  niceToHave?: string[] | null;
  benefits: string[];
  archived: boolean;
  company: string;
  createdDate: Date;
}

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
  const countryCount: any = {};
  entity.forEach((item) => {
    const country = item.country as string;
    if (country) {
      countryCount[country] = (countryCount[country] || 0) + 1;
    }
  });

  let mostRepeated = "";
  let maxCount = 0;

  for (const country in countryCount) {
    if (countryCount[country] > maxCount) {
      mostRepeated = country;
      maxCount = countryCount[country];
    }
  }

  return mostRepeated;
}

export function mostRepeatedInterest(companies: ICompany[]): string {
  const interestCount: any = {};
  companies.forEach((company) => {
    const interest = company.interested as string;
    if (interest) {
      interestCount[interest] = (interestCount[interest] || 0) + 1;
    }
  });

  let mostRepeated = "";
  let maxCount = 0;

  for (const interest in interestCount) {
    if (interestCount[interest] > maxCount) {
      mostRepeated = interest;
      maxCount = interestCount[interest];
    }
  }

  return mostRepeated;
}

function mostRepeatedCountryList(
  entity: IUser[] | ICompany[]
): Map<string, number> {
  const repetitionsMap = new Map<string, number>();
  entity.forEach((item) => {
    if (item.country) {
      const localCountry = item.country as string;
      const count = repetitionsMap.get(localCountry) || 0;
      repetitionsMap.set(localCountry, count + 1);
    }
  });
  const sorted = [...repetitionsMap.entries()].sort((a, b) => b[1] - a[1]);
  let mostCommonCountries;
  if (sorted.length > 5) {
    mostCommonCountries = new Map(sorted.slice(0, 5));
  } else mostCommonCountries = new Map(sorted);
  return mostCommonCountries;
}

export function returnCountryData(
  entity: IUser[] | ICompany[]
): labelUserStatistics[] {
  const mapOfCountries = mostRepeatedCountryList(entity);
  let total: number = 0;
  for (const value of mapOfCountries.values()) {
    total = total + value;
  }
  const result: labelUserStatistics[] = [];
  for (const [key, value] of mapOfCountries) {
    result.push({
      label: key,
      A: value,
      fullMark: total,
    });
  }
  return result;
}

export function returnInterestData(entity: ICompany[]): labelUserStatistics[] {
  let payrollCounter = 0;
  let recruitingCounter = 0;
  let staffCounter = 0;
  entity.forEach((company) => {
    if (company.interested) {
      if (company.interested === "payroll") payrollCounter++;
      else if (company.interested === "recruiting") recruitingCounter++;
      else if (company.interested === "staff-aug") staffCounter++;
    }
  });
  const total = payrollCounter + recruitingCounter + staffCounter;
  const data: labelUserStatistics[] = [
    {
      label: "Payroll",
      A: payrollCounter,
      fullMark: total,
    },
    {
      label: "Recruiting",
      A: recruitingCounter,
      fullMark: total,
    },
    {
      label: "Staff-Augmentation",
      A: staffCounter,
      fullMark: total,
    },
  ];
  return data;
}

function repeatedPropertyMap(
  entities: JdEntity[],
  property: string
): Map<string, number> {
  const repetitionsMap = new Map<string, number>();
  entities.forEach((item) => {
    if (item[property as keyof JdEntity]) {
      const localProp = item[property as keyof JdEntity] as string;
      const count = repetitionsMap.get(localProp) || 0;
      repetitionsMap.set(localProp, count + 1);
    }
  });
  const sorted = [...repetitionsMap.entries()].sort((a, b) => b[1] - a[1]);
  let mostCommonItemMap;
  if (sorted.length > 5) {
    mostCommonItemMap = new Map(sorted.slice(0, 5));
  } else mostCommonItemMap = new Map(sorted);
  return mostCommonItemMap;
}

export function mostCommonJd(entities: JdEntity[], type: string): string {
  if (entities.length) {
    const mapResult = repeatedPropertyMap(entities, type);
    const toSet = [...mapResult.entries()][0][0];
    return toSet;
  } else return "";
}

// TODO RESUSE THIS
export function repeatedLocationData(entity: JdEntity[]) {
  const mapResult = repeatedPropertyMap(entity, "location");
  const data = [];
  for (const [key, value] of mapResult) {
    data.push({ name: key, value: value });
  }
  return data;
}

export function repeatedTypeData(entity: JdEntity[]) {
  const mapResult = repeatedPropertyMap(entity, "type");
  const data = [];
  for (const [key, value] of mapResult) {
    data.push({ name: key, value: value });
  }
  return data;
}

export function repeatedCompanyData(entity: JdEntity[]) {
  const mapResult = repeatedPropertyMap(entity, "company");
  const data = [];
  for (const [key, value] of mapResult) {
    data.push({ name: key, value: value });
  }
  return data;
}

function mostCommonStackList(entities: JdEntity[]): Map<string, number> {
  const counterMap = new Map<string, number>();
  entities.forEach((jd) => {
    jd.stack.forEach((value) => {
      const count = counterMap.get(value) || 0;
      counterMap.set(value, count + 1);
    });
  });
  const sorted = [...counterMap.entries()].sort((a, b) => b[1] - a[1]);
  let mostCommonItemMap;
  if (sorted.length > 5) {
    mostCommonItemMap = new Map(sorted.slice(0, 5));
  } else mostCommonItemMap = new Map(sorted);
  return mostCommonItemMap;
}

export function mostCommonStack(entities: JdEntity[]): string {
  if (entities.length) {
    const mapResult = mostCommonStackList(entities);
    const toSet = [...mapResult.entries()][0][0];
    return toSet;
  } else return "";
}

export function repeatedStackData(entity: JdEntity[]) {
  const mapResult = mostCommonStackList(entity);
  const data = [];
  for (const [key, value] of mapResult) {
    data.push({ name: key, value: value });
  }
  return data;
}
