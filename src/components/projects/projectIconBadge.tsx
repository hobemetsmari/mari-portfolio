import { Box } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import { projectsTheme } from "./projectsTheme";

interface ProjectIconBadgeProps {
  icon: SvgIconComponent;
}

export const ProjectIconBadge = ({ icon: Icon }: ProjectIconBadgeProps) => (
  <Box
    aria-hidden
    sx={{
      width: 52,
      height: 52,
      borderRadius: 3,
      display: "grid",
      placeItems: "center",
      backgroundColor: projectsTheme.accentSoft,
      color: projectsTheme.accent,
    }}
  >
    <Icon />
  </Box>
);
