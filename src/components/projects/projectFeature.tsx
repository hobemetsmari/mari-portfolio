import { Box, Typography } from "@mui/material";
import { ProjectOpenButton } from "./projectsOpenButton";
import { ProjectPartsSummary } from "./projectPartSummary";
import { projectsTheme } from "./projectsTheme";
import type { Project } from "./types";

interface ProjectFeatureProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectFeature = ({ project, onOpen }: ProjectFeatureProps) => (
  <Box
    component="article"
    aria-labelledby={`project-${project.id}-title`}
    sx={{
      gridColumn: "1 / -1",
      position: "relative",
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1.15fr" },
      overflow: "hidden",
      borderRadius: 5,
      border: `1px solid ${projectsTheme.border}`,
      backgroundColor: projectsTheme.surfaceRaised,
      cursor: "pointer",
      transition: "border-color 160ms",
      "&:hover": { borderColor: projectsTheme.borderHover },
      "&:has(button:focus-visible)": {
        outline: `2px solid ${projectsTheme.accent}`,
        outlineOffset: 3,
      },
    }}
  >
    <Box
      sx={{
        p: { xs: 3, md: 5 },
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
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
            lineHeight: 1.02,
            fontSize: { xs: "2rem", md: "2.75rem" },
            maxWidth: "14ch",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            color: projectsTheme.muted,
            fontWeight: 600,
            fontSize: "0.9375rem",
            mt: 1.5,
          }}
        >
          {project.role}
        </Typography>
      </Box>

      <Typography
        sx={{ color: projectsTheme.text, lineHeight: 1.6, maxWidth: "44ch" }}
      >
        {project.summary}
      </Typography>

      {project.groups && (
        <Box sx={{ mt: "auto", pt: 1 }}>
          <ProjectPartsSummary groups={project.groups} />
        </Box>
      )}
    </Box>

    {project.image && (
      <Box
        component="img"
        src={project.image.src}
        alt={project.image.alt}
        loading="lazy"
        sx={{
          display: "block",
          width: "100%",
          height: "100%",
          minHeight: { xs: 220, md: 420 },
          objectFit: "cover",
          objectPosition: "top left",
          borderTop: { xs: `1px solid ${projectsTheme.border}`, md: "none" },
          borderLeft: { xs: "none", md: `1px solid ${projectsTheme.border}` },
        }}
      />
    )}
  </Box>
);
