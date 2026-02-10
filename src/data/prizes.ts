
export interface PrizeItem {
    title: string;
    organization: string;
    year: string;
    description?: string;
}

export const prizesData: PrizeItem[] = [
    {
        title: "Best Research Project",
        organization: "University Annual Science Fair",
        year: "2023",
        description: "Awarded for the project on stochastic differential equations."
    }
];
