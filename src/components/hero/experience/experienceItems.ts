export type ExperienceLink = {
  label: string;
  href: string;
  background: string;
  textColor: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  type: "work" | "study";
  links?: ExperienceLink[];
};

export const experienceItems: ExperienceItem[] = [
  {
    period: "2024 – present",
    title: "Designer, Software Developer & Analyst",
    place: "HEISI IT OÜ",
    type: "work",
    links: [
      {
        label: "heisi.ee",
        href: "https://heisi.ee",
        background: "#2d2b72",
        textColor: "#ffffff",
      },
      {
        label: "moby.ee",
        href: "https://moby.ee",
        background: "#44d62c",
        textColor: "#0d1f0a",
      },
    ],
  },
  {
    period: "2021 – 2025",
    title: "BSc in Informatics",
    place: "Tallinn University",
    type: "study",
  },
  {
    period: "2018 – 2021",
    title: "Grades 10–12",
    place: "Kadrioru Saksa Gümnaasium",
    type: "study",
  },
  {
    period: "2009 – 2018",
    title: "Grades 1–9",
    place: "Saue Gümnaasium",
    type: "study",
  },
];
