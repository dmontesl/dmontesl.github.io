import { Github, Linkedin, Mail } from "lucide-react";

export const siteConfig = {
  author: "Daniel Montes",
  title: "Daniel Montes | Personal Website",
  description: "Personal website of Daniel Montes - Software Engineer & Researcher",
  url: "https://dmontesl.github.io",
  social: [
    {
      name: "GitHub",
      href: "https://github.com/dmontesl",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/dmontesl",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:contact@example.com",
      icon: Mail,
    },
  ],
} as const;
