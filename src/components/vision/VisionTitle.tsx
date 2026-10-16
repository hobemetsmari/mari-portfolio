import { Box, Typography } from "@mui/material";
import { colors, fonts } from "../../theme/color";

const VisionTitle = () => (
  <Typography
    sx={{
      flexShrink: 0,
      color: "rgba(255, 255, 255, 0.92)",
      fontFamily: fonts.display,
      fontSize: { xs: "4rem", md: "7.5rem" },
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: "-0.06em",
    }}
  >
    vision
    <Box component="span" sx={{ color: colors.pinkPale }}>
      .
    </Box>
  </Typography>
);

export default VisionTitle;
