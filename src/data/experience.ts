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
    title: "Senior Software Engineer",
    company: "Example Company",
    location: "Remote",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Led development of microservices architecture serving millions of requests daily",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["TypeScript", "React", "Node.js", "AWS", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Tech Startup",
    location: "San Francisco, CA",
    startDate: "2019-06",
    endDate: "2021-12",
    description: [
      "Developed full-stack web applications using React and Python",
      "Designed and implemented RESTful APIs",
      "Collaborated with product team to define technical requirements",
    ],
    technologies: ["Python", "React", "PostgreSQL", "Redis"],
  },
  {
    title: "Research Assistant",
    company: "University",
    location: "Madrid, Spain",
    startDate: "2017-09",
    endDate: "2019-05",
    description: [
      "Conducted research in machine learning and data analysis",
      "Published papers in peer-reviewed journals",
      "Developed algorithms for data processing pipelines",
    ],
    technologies: ["Python", "TensorFlow", "MATLAB", "R"],
  },
];
