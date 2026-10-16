import { Box, Typography } from "@mui/material";
import { ProjectLogo } from "./projectLogo";
import { ProjectOpenButton } from "./projectsOpenButton";
import { projectsTheme } from "./projectsTheme";
import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => (
  <Box
    component="article"
    aria-labelledby={`project-${project.id}-title`}
    sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      borderRadius: 5,
      border: `1px solid ${projectsTheme.border}`,
      backgroundColor: projectsTheme.surface,
      cursor: "pointer",
      transition: "border-color 160ms",
      "&:hover": { borderColor: projectsTheme.borderHover },
      "&:has(button:focus-visible)": {
        outline: `2px solid ${projectsTheme.accent}`,
        outlineOffset: 3,
      },
    }}
  >
    <ProjectLogo logo={project.logo} />

    <Box
      sx={{
        p: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography sx={{ color: projectsTheme.accent, fontWeight: 700 }}>
          {project.label}
        </Typography>
        <ProjectOpenButton
          title={project.title}
          onClick={() => onOpen(project)}
        />
      </Box>

      <Box>
        <Typography
          id={`project-${project.id}-title`}
          component="h3"
          sx={{
            color: projectsTheme.text,
            fontWeight: 700,
            lineHeight: 1.1,
            fontSize: { xs: "1.5rem", md: "1.625rem" },
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            color: projectsTheme.muted,
            fontSize: "0.875rem",
            fontWeight: 600,
            mt: 1,
          }}
        >
          {project.role}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: projectsTheme.text,
          fontSize: "0.9375rem",
          lineHeight: 1.6,
        }}
      >
        {project.summary}
      </Typography>
    </Box>
  </Box>
);
