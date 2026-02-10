
export interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
    year?: string;
    category?: string;
    featured?: boolean;
}

export const academicProjects: ProjectItem[] = [
    {
        title: "Sparse FTT+ (Transformer)",
        description: "Development of Sparse FT-Transformer+, a new architecture for tabular data combining the performance of Transformers with interpretability. Features include a shared Value matrix across heads and a Sparsemax-based attention mechanism to identify key features.",
        technologies: ["Deep Learning", "Transformers", "Tabular Data", "Interpretability"],
        githubUrl: "https://github.com/vleonel-junior/Sparse-FT_Transformer-Plus",
        year: "2026",
        category: "Academic"
    },
    {
        title: "Gomory - Cutting Plane Method",
        description: "A pure Python implementation of the Gomory cutting plane method for solving Integer Linear Programming (ILP) problems. Designed for educational purposes, it features exact fractional arithmetic and step-by-step simplex tableaux generation.",
        technologies: ["Python", "Linear Programming", "Optimization"],
        githubUrl: "https://github.com/vleonel-junior/Gomory",
        year: "2025",
        category: "Academic"
    },
    {
        title: "Black-Scholes Simulation",
        description: "Analytical resolution of the Black-Scholes equation by transforming it into the heat equation. Includes the derivation of the pricing formula and the calculation of the Delta Greek for a European Call option.",
        technologies: ["Mathematics", "PDE", "Finance"],
        githubUrl: "https://github.com/vleonel-junior/Black-sholes",
        year: "2025",
        category: "Academic"
    }
];

export const personalProjects: ProjectItem[] = [
    // Placeholder for future personal projects
];

// For backward compatibility if other pages use it (though we should update them)
export const projectsData: ProjectItem[] = [...academicProjects, ...personalProjects];
