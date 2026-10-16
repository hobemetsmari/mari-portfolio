import { Box } from "@mui/material";
import { projectsTheme } from "./projectsTheme";
import type { ProjectStatus } from "./types";

const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  unreleased: "Coming soon",
  confidential: "Confidential",
};

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

export const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => (
  <Box
    component="span"
    sx={{
      px: 1.25,
      py: 0.25,
      borderRadius: 999,
      fontSize: "0.75rem",
      fontWeight: 700,
      color: projectsTheme.status[status].color,
      backgroundColor: projectsTheme.status[status].background,
      whiteSpace: "nowrap",
    }}
  >
    {statusLabels[status]}
  </Box>
);
