import { Box, Typography } from "@mui/material";
import { projectsTheme } from "../projects/projectsTheme";
import type { ExtraWork } from "./types";

interface ExtrasRowProps {
  item: ExtraWork;
}

export const ExtrasRow = ({ item }: ExtrasRowProps) => (
  <Box
    component="li"
    sx={{
      listStyle: "none",
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "140px 1fr" },
      gap: { xs: 0.5, sm: 3 },
      py: 2.5,
      borderTop: `1px solid ${projectsTheme.border}`,
    }}
  >
    <Typography sx={{ color: projectsTheme.accent, fontWeight: 700 }}>
      {item.type}
    </Typography>
    <Typography sx={{ color: projectsTheme.text, lineHeight: 1.6 }}>
      {item.description}
    </Typography>
  </Box>
);
