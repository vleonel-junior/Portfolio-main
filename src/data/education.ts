
export interface EducationItem {
    degree: string;
    institution: string;
    year: string;
    description?: string;
}

export const educationData: EducationItem[] = [
    {
        degree: "Engineering Degree in Mathematical Engineering and Modeling",
        institution: "National Higher School of Mathematical Engineering and Modeling (ENSGMM, UNSTIM, Bénin)",
        year: "2022 - 2025",
        description: "Specialized in random modeling, statistics, and machine learning."
    },
    {
        degree: "Preparatory Classes for Engineering Studies (MPSI/PCSI)",
        institution: "National Higher Institute of Preparatory Classes (INSPEI/ UNSTIM, Bénin)",
        year: "2020 - 2022",
        description: "Intensive training in Mathematics, Physics, and Engineering Sciences."
    },
    {
        degree: "Scientific Baccalaureate (Mathematics and Physical Sciences)",
        institution: "Notre Dame de Toutes Grâces College, Cotonou, Benin",
        year: "2020",
        description: "High School Diploma with emphasis on Mathematics and Physics."
    }
];
