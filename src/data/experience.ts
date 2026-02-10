
export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  logo?: string;
  url?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    company: "LKA Services (Bénin)",
    role: "Data Scientist Intern (End-of-Studies Internship)",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    description: "Designed and developed data processing and analysis solutions. Automated classification processes and contributed to improving data management systems to optimize decision-making.",
    technologies: ["Data Analysis", "Python", "Automation", "Machine Learning"]
  },
  {
    company: "LESCAL (Laboratoire d'Études Statistiques et Conception d'Applications et Logiciels)",
    role: "Data Scientist Intern",
    startDate: "Aug 2024",
    endDate: "Oct 2024",
    description: "Contributed to statistical studies and software application design. Analyzed datasets to extract actionable insights and supported the development of data-driven applications.",
    technologies: ["Statistics", "Data Conception", "Software Design"]
  }
];
