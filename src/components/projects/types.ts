export type ProjectStatus = "live" | "unreleased" | "confidential";

export interface ProjectPart {
  title: string;
  description: string;
  status: ProjectStatus;
  href?: string;
}

export interface ProjectPartGroup {
  heading?: string;
  parts: ProjectPart[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectLogo {
  src: string;
  alt: string;
  background?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  label: string;
  title: string;
  role: string;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
  logo: ProjectLogo;
  links?: ProjectLink[];
  groups?: ProjectPartGroup[];
  image?: ProjectImage;
}
