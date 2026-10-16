import { Box, Typography } from "@mui/material";
import { projectsTheme } from "../projects/projectsTheme";
import { SectionContainer } from "../sectionContainer";
import { extras } from "./extrasData";
import { ExtrasRow } from "./extrasRow";

export const ExtrasSection = () => (
  <SectionContainer id="extras" labelledBy="extras-heading">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
        gap: { xs: 4, md: 8 },
        alignItems: "start",
      }}
    >
      <Box>
        <Typography
          sx={{ color: projectsTheme.accent, fontWeight: 700, mb: 1 }}
        >
          extras.
        </Typography>
        <Typography
          id="extras-heading"
          component="h2"
          sx={{
            color: projectsTheme.text,
            fontWeight: 700,
            lineHeight: 1.05,
            fontSize: { xs: "2.25rem", md: "3.25rem" },
            maxWidth: "14ch",
            mb: 2,
          }}
        >
          Creative in more ways than one
        </Typography>
        <Typography
          sx={{ color: projectsTheme.muted, lineHeight: 1.6, maxWidth: "44ch" }}
        >
          Besides product design and development, I've taken on design work
          wherever the company needed it.
        </Typography>
      </Box>

      <Box
        component="ul"
        sx={{ m: 0, p: 0, borderBottom: `1px solid ${projectsTheme.border}` }}
      >
        {extras.map((item) => (
          <ExtrasRow key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  </SectionContainer>
);
