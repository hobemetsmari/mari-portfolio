import { Box, Typography } from "@mui/material";
import { ProjectStatusBadge } from "./projectStatusBadge";
import { projectsTheme } from "./projectsTheme";
import type { ProjectPartGroup } from "./types";

interface ProjectPartsSummaryProps {
  groups: ProjectPartGroup[];
}

export const ProjectPartsSummary = ({ groups }: ProjectPartsSummaryProps) => (
  <Box component="ul" sx={{ m: 0, p: 0 }}>
    {groups
      .flatMap((group) => group.parts)
      .map((part) => (
        <Box
          component="li"
          key={part.title}
          sx={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            py: 1.25,
            borderTop: `1px solid ${projectsTheme.border}`,
          }}
        >
          <Typography
            sx={{
              color: projectsTheme.text,
              fontWeight: 600,
              fontSize: "0.9375rem",
            }}
          >
            {part.title}
          </Typography>
          <ProjectStatusBadge status={part.status} />
        </Box>
      ))}
  </Box>
);
