import { Box, Button, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { colors, fonts } from "../../theme/color";

const HeroContent = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 3, md: "10%" },
        pt: { xs: 2, md: 10 },
        pb: { xs: 7, md: 14 },
        color: "#fff",
        transform: { xs: "translateY(-35px)", md: "none" },
      }}
    >
      <Typography
        sx={{
          mb: 2,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: colors.pinkPale,
        }}
      >
        Software developer · Analyst · Designer
      </Typography>

      <Typography
        component="h1"
        sx={{
          maxWidth: 1000,
          fontFamily: fonts.display,
          fontSize: {
            xs: "3rem",
            sm: "5rem",
            md: "6.5rem",
          },
          lineHeight: { xs: 0.95, sm: 0.92, md: 0.92 },
          letterSpacing: "-0.06em",
          fontWeight: 700,
        }}
      >
        Great design
        <br />{" "}
        <Box component="span" sx={{ color: colors.pink }}>
          knows
        </Box>
        <br />
        the observer.
      </Typography>

      <Box
        sx={{
          mt: { xs: 3, md: 4 },
          maxWidth: 650,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 3,
        }}
      >
        <Typography
          sx={{
            maxWidth: 390,
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: 15,
            lineHeight: 1.8,
          }}
        >
          Great design should know their client and its needs. Design should
          feel invisible.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroContent;
