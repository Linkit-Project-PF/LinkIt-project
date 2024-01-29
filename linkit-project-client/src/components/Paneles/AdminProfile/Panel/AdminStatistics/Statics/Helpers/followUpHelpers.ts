
function filterByClient(followups: any[], client: string): any[] {
    return followups.filter((fw: any) => fw["Tipo de cliente"] === client)
}

export function returnMostCommomCompany(followups: any[], client: string): string {
    const filteredFw = filterByClient(followups, client)
    const companyMap = new Map<string, number>();
    let result: [string, number] = ['', 0];
    for (const fw of filteredFw) {
        const count = companyMap.get(fw.Client) || 0;
        companyMap.set(fw.Client, count + 1);
    }
    for (const [key, value] of companyMap) {
        if (value > result[1]) result = [key, value];
    }
    return `${result[0]} (${result[1]})`
}

export function conversionPercentage(followups: any[], client: string): number {
    const filteredFw = filterByClient(followups, client).filter((fw: any) => fw.Status === "Won" || fw.Status === "Lost" || fw.Status === "Won and Replaced");
    const wonFws = filteredFw.filter((fw: any) => fw.Status === "Won" || fw.Status === "Won and Replaced");
    return (wonFws.length / filteredFw.length) * 100 ;
}

export function pendingFollowUps(followups: any[], client: string): number {
    const filteredFw = filterByClient(followups, client).filter((fw: any) => fw.Status !== "Won" && fw.Status !== "Lost" && fw.Status !== "Won and Replaced");
    return filteredFw.length
}