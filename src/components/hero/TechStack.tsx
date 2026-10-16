import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { colors, fonts } from "../../theme/color";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "RTK Query",
  "MUI",
  "SCSS",
  "React Hook Form",
  "i18next",
  "Figma",
  "Git",
];

const gap = "12px";

const scroll = keyframes`
  to {
    transform: translateX(calc(-100% - ${gap}));
  }
`;

const TechList = ({ hidden = false }: { hidden?: boolean }) => (
  <Box
    component="ul"
    aria-hidden={hidden || undefined}
    sx={{
      flexShrink: 0,
      display: "flex",
      justifyContent: "flex-start",
      gap,
      minWidth: "100%",
      m: 0,
      p: 0,
      listStyle: "none",
      animation: `${scroll} 36s linear infinite`,
      "@media (prefers-reduced-motion: reduce)": {
        flexWrap: "wrap",
        minWidth: 0,
        animation: "none",
        display: hidden ? "none" : "flex",
      },
    }}
  >
    {technologies.map((tech) => (
      <Box
        key={tech}
        component="li"
        sx={{
          px: { xs: 2.25, md: 2.75 },
          py: { xs: 1.25, md: 1.5 },
          border: `1px solid ${colors.border}`,
          borderRadius: "999px",
          background: colors.surface,
          fontFamily: fonts.display,
          fontSize: { xs: 14, md: 16 },
          fontWeight: 500,
          lineHeight: 1,
          whiteSpace: "nowrap",
          transition: "color 0.2s, border-color 0.2s",
          "&:hover": {
            color: colors.pink,
            borderColor: `${colors.pink}80`,
          },
        }}
      >
        {tech}
      </Box>
    ))}
  </Box>
);

const TechStack = () => (
  <Box
    component="section"
    aria-labelledby="tech-stack-title"
    sx={{ py: { xs: 9, md: 12 } }}
  >
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 5 }}>
        <Typography
          sx={{
            mb: 1.25,
            color: colors.pink,
            fontFamily: fonts.display,
            fontSize: { xs: 18, md: 22 },
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          tools.
        </Typography>
        <Typography
          id="tech-stack-title"
          component="h2"
          sx={{
            fontFamily: fonts.display,
            fontSize: { xs: "2.1rem", md: "3.5rem" },
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          What I build with
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap,
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          "&:hover ul": {
            animationPlayState: "paused",
          },
          "@media (prefers-reduced-motion: reduce)": {
            maskImage: "none",
          },
        }}
      >
        <TechList />
        <TechList hidden />
      </Box>
    </Box>
  </Box>
);

export default TechStack;
