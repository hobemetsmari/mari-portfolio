import { Box } from "@mui/material";
import { projectsTheme } from "./projectsTheme";
import type { ProjectLogo as ProjectLogoType } from "./types";

interface ProjectLogoProps {
  logo: ProjectLogoType;
  height?: number;
  rounded?: boolean;
}

export const ProjectLogo = ({
  logo,
  height = 148,
  rounded = false,
}: ProjectLogoProps) => (
  <Box
    sx={{
      height,
      display: "grid",
      placeItems: "center",
      px: 4,
      backgroundColor: logo.background ?? projectsTheme.logoBackground,
      borderRadius: rounded ? 3 : 0,
      borderBottom: rounded ? "none" : `1px solid ${projectsTheme.border}`,
    }}
  >
    <Box
      component="img"
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      sx={{
        display: "block",
        maxWidth: "62%",
        maxHeight: height * 0.42,
        objectFit: "contain",
      }}
    />
  </Box>
);
