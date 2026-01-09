export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    title: "Senior Data Scientist",
    company: "BIP Consulting",
    location: "Remote",
    startDate: "2025-08",
    endDate: "Present",
    description: [
      "Led development of multiple optimization models for biogas production",
      "Mentored junior developers and conducted code reviews",
      "Deployed GenAI solutions in databricks environment for data analysis",
    ],
    technologies: ["Python", "Pyomo", "SQL", "Azure", "Docker", "Databricks", "Langchain", "MLflow", "FastAPI"],
  },
  {
    title: "Data Scientist",
    company: "Capgemini",
    location: "Madrid, Spain",
    startDate: "2024-05",
    endDate: "2025-08",
    description: [
      "Developed a hybrid machine learning and optimization solution for detecting energy theft in smart grids",
      "Implemented VRP optimization models for logistics clients",
      "Led the development of machine learning models for anomaly detection of AGV fleets in industrial settings",
    ],
    technologies: ["Python", "Pyomo", "Streamlit", "GCP", "BigQuery", "XGBoost"],
  },
  {
    title: "Predoctoral Researcher",
    company: "University of Valladolid",
    location: "Valladolid, Spain",
    startDate: "2020-09",
    endDate: "2024-05",
    description: [
      "Conducted research in mathematical optimization and process systems engineering",
      "Published papers in peer-reviewed journals",
      "Developed decomposition algorithms for large-scale optimization problems",
    ],
    technologies: ["GAMS", "MATLAB", "MATLAB", "R"],
  },
];
