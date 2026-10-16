import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { SectionContainer } from "../sectionContainer";
import { ProjectCard } from "./projectsCard";
import { ProjectDialog } from "./projectDialog";
import { projects } from "./projectsData";
import { projectsTheme } from "./projectsTheme";
import type { Project } from "./types";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionContainer id="projects" labelledBy="projects-heading">
      <Typography sx={{ color: projectsTheme.accent, fontWeight: 700, mb: 1 }}>
        projects.
      </Typography>
      <Typography
        id="projects-heading"
        component="h2"
        sx={{
          color: projectsTheme.text,
          fontWeight: 700,
          lineHeight: 1.05,
          fontSize: { xs: "2.25rem", md: "3.25rem" },
          maxWidth: "14ch",
          mb: { xs: 5, md: 7 },
        }}
      >
        Things I&apos;ve designed and built
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </Box>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionContainer>
  );
};
