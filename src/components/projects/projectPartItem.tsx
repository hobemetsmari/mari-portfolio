import { Box, Link, Typography } from "@mui/material";
import { ProjectStatusBadge } from "./projectStatusBadge";
import { projectsTheme } from "./projectsTheme";
import type { ProjectPart } from "./types";

interface ProjectPartItemProps {
  part: ProjectPart;
}

export const ProjectPartItem = ({ part }: ProjectPartItemProps) => (
  <Box
    component="li"
    sx={{
      listStyle: "none",
      py: 2,
      borderTop: `1px solid ${projectsTheme.border}`,
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        mb: 0.75,
      }}
    >
      <Typography
        component="h4"
        sx={{
          fontWeight: 700,
          color: projectsTheme.text,
          fontSize: "1.0625rem",
        }}
      >
        {part.title}
      </Typography>
      <ProjectStatusBadge status={part.status} />
    </Box>
    <Typography
      sx={{
        color: projectsTheme.muted,
        fontSize: "0.9375rem",
        lineHeight: 1.55,
        maxWidth: "60ch",
      }}
    >
      {part.description}
    </Typography>
    {part.href && (
      <Link
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        sx={{
          display: "inline-block",
          mt: 1,
          color: projectsTheme.accent,
          fontWeight: 700,
          fontSize: "0.9375rem",
          borderRadius: 1,
          "&:focus-visible": {
            outline: `2px solid ${projectsTheme.accent}`,
            outlineOffset: 3,
          },
        }}
      >
        Visit {part.title.toLowerCase()}
      </Link>
    )}
  </Box>
);
