
export interface VolunteeringItem {
    role: string;
    organization: string;
    period: string;
    description: string;
}

export const volunteeringData: VolunteeringItem[] = [
    {
        role: "Teaching Assistant (Electricity for Engineers)",
        organization: "National Higher Institute of Preparatory Classes (INSPEI)",
        period: "2025",
        description: "Assisted the professor (Dr.) in the 'Electricity for Engineers' course for 2nd-year Preparatory Class students. Conducted tutorial sessions and helped students master concepts in electromagnetism and circuit analysis."
    },
    {
        role: "Private Tutor in Mathematics",
        organization: "Private Instruction",
        period: "2025",
        description: "Provided advanced mathematics tutoring for high school students in the Science Track (Première Scientifique). Focused on strengthening analytical skills, algebra, and exam preparation."
    },
    {
        role: "Private Tutor in Sciences (Physics, Chemistry, Technology)",
        organization: "Private Instruction",
        period: "2023 - 2024",
        description: "Delivered academic support and personalized tutoring for high school students (Seconde & Première). Helped improve student performance in Physics, Chemistry, and Technology through targeted exercises and conceptual clarification."
    }
];
