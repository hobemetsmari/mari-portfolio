import { Box } from "@mui/material";
import { projectsTheme } from "./projectsTheme";

interface ProjectTagProps {
  label: string;
}

export const ProjectTag = ({ label }: ProjectTagProps) => (
  <Box
    component="li"
    sx={{
      listStyle: "none",
      px: 1.5,
      py: 0.5,
      borderRadius: 999,
      border: `1px solid ${projectsTheme.border}`,
      color: projectsTheme.text,
      fontSize: "0.8125rem",
      fontWeight: 600,
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </Box>
);
