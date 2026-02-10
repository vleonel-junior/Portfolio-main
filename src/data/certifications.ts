
export interface CertificationItem {
    title: string;
    issuer: string;
    date: string;
    url?: string;
    image?: string; // Path to the image in public/
    description?: string; // To list key modules
}

export const certificationsData: CertificationItem[] = [
    {
        title: "Data Scientist",
        issuer: "Africa Tech Up Tour / OpenClassrooms",
        date: "2024",
        image: "/images/certifications/ATUT-data-scientist.png",
        description: "Specialization acquired through the Africa Tech Up Tour program, including Deep Learning, Time Series Analysis, SQL, NLP, and ML Model Deployment."
    }
];
