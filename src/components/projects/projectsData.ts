import mobyWebsite from "../../assets/moby-website.png";
import mobyLogo from "../../assets/moby.png";
import ritLogo from "../../assets/rit.png";
import insaLogo from "../../assets/insa.png";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "moby",
    label: "moby.",
    title: "Sports club management platform",
    role: "Designer, frontend developer & analyst",
    summary:
      "Website and platform for sports clubs, designed and built end to end.",
    description:
      "End-to-end design and development for Moby, from the public website to the software clubs use to run their day. I worked across analysis, UI design and frontend development, turning requirements into finished, working features.",
    highlights: [
      "Designed the user interface in Figma, from first wireframes to final screens",
      "Built the admin and client apps in React and TypeScript",
      "Analysed requirements together with the team and turned them into features",
    ],
    tags: ["React", "TypeScript", "Redux Toolkit", "MUI", "Figma"],
    logo: { src: mobyLogo, alt: "Moby" },
    image: { src: mobyWebsite, alt: "Moby website front page" },
    groups: [
      {
        parts: [
          {
            title: "Website",
            description:
              "Designed and built the public website that introduces the product to clubs and their members.",
            status: "live",
            href: "https://moby.ee/",
          },
          {
            title: "Platform",
            description:
              "Admin and client apps for managing a sports club, designed and developed from the ground up.",
            status: "unreleased",
          },
        ],
      },
      {
        heading: "Also at Heisi",
        parts: [
          {
            title: "Logistics operations system",
            description:
              "Full frontend for an operations management system in the logistics sector.",
            status: "confidential",
          },
        ],
      },
    ],
  },
  {
    id: "rit",
    label: "rit.",
    title: "Internal government systems",
    role: "UI designer",
    summary:
      "Interfaces for internal public sector systems, built with the TEDI design system.",
    description:
      "Designed interfaces for internal public sector systems. The design work followed TEDI, a public design system, to keep the experience consistent and accessible.",
    highlights: [
      "Designed views and components following TEDI",
      "Kept accessibility in line with WCAG requirements",
    ],
    tags: ["TEDI", "WCAG"],
    links: [{ label: "TEDI design system", href: "https://www.tedi.ee/" }],
    logo: { src: ritLogo, alt: "RIT" },
  },
  {
    id: "insa",
    label: "insa.",
    title: "Internal government systems",
    role: "UI designer & frontend developer",
    summary:
      "Interfaces for internal public sector systems, built with the Veera design system.",
    description:
      "Designed and built interfaces for internal public sector systems using Veera, a public design system, with accessibility built in from the start.",
    highlights: [
      "Designed views and components following Veera",
      "Built the interfaces in React and TypeScript",
      "Kept accessibility in line with WCAG requirements",
    ],
    tags: ["React", "TypeScript", "Veera", "WCAG"],
    links: [
      {
        label: "Veera design system",
        href: "https://veera.eesti.ee/5333da51f/p/08d37e-veera-disainisusteem-100",
      },
    ],
    logo: { src: insaLogo, alt: "INSA" },
  },
];
