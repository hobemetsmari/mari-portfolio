import { Box, Typography } from "@mui/material";
import { colors, fonts } from "../../theme/color";

const VisionStatement = () => (
  <Box
    sx={{
      maxWidth: 520,
      ml: { md: "auto" },
      color: "#fff",
      textAlign: { xs: "left", md: "right" },
    }}
  >
    <Typography
      id="vision-title"
      component="h2"
      sx={{
        fontFamily: fonts.display,
        fontSize: { xs: "2.4rem", md: "3.6rem" },
        fontWeight: 700,
        lineHeight: 1.02,
        letterSpacing: "-0.045em",
      }}
    >
      Career
    </Typography>
    <Typography
      sx={{
        mt: 3,
        fontSize: { xs: "1.05rem", md: "1.2rem" },
        lineHeight: 1.6,
      }}
    >
      I dream of a career that makes me{" "}
      <Box component="span" sx={{ color: colors.pinkPale, fontWeight: 600 }}>
        proud
      </Box>
      .
    </Typography>
    <Typography
      sx={{
        mt: 2,
        color: "rgba(255, 255, 255, 0.75)",
        fontSize: 15,
        lineHeight: 1.75,
      }}
    >
      I believe that in IT I can apply my analytical, mathematical and creative
      skills all at once.
    </Typography>
  </Box>
);

export default VisionStatement;
