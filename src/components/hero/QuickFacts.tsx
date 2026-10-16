import { Box, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import { colors, fonts } from "../../theme/color";

const facts = [
  {
    icon: <CodeRoundedIcon />,
    title: "2+",
    description: "Years of experience",
    background: "#2a1522",
    iconColor: colors.pink,
  },
  {
    icon: <AccessibilityNewRoundedIcon />,
    title: "WCAG",
    description: "Accessibility best practices",
    background: "#221a2c",
    iconColor: colors.violetSoft,
  },
  {
    icon: <DesignServicesRoundedIcon />,
    title: "UI + Code",
    description: "From design to development",
    background: "#2b1820",
    iconColor: colors.pinkPale,
  },
];

const QuickFacts = () => (
  <Box
    component="section"
    aria-label="Professional highlights"
    sx={{
      position: "relative",
      zIndex: 2,
      maxWidth: 1200,
      mx: "auto",
      px: { xs: 2, md: 4 },
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(3, minmax(0, 1fr))",
        },
        gap: 2,
      }}
    >
      {facts.map((fact) => (
        <Box
          key={fact.title}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            p: { xs: 3, md: 4 },
            minHeight: { xs: 145, md: 175 },
            borderRadius: "24px",
            background: fact.background,
            color: colors.text,
            transition: "transform 0.25s ease",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box sx={{ display: "flex", color: fact.iconColor }}>{fact.icon}</Box>

          <Box>
            <Typography
              component="h3"
              sx={{
                fontFamily: fonts.display,
                fontSize: { xs: "1.6rem", md: "2rem" },
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.2,
                mb: 0.75,
              }}
            >
              {fact.title}
            </Typography>

            <Typography
              sx={{
                color: colors.muted,
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              {fact.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default QuickFacts;
