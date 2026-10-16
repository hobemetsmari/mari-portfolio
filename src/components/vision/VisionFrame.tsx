import { Box, Typography } from "@mui/material";
import { colors, fonts } from "../../theme/color";

const VisionFrame = () => (
  <Box
    sx={{
      position: "relative",
      flexShrink: 0,
      display: "grid",
      placeItems: "center",
      width: { xs: 160, md: 220 },
      aspectRatio: "1",
      border: "1px solid rgba(255, 255, 255, 0.9)",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: { xs: 8, md: 12 },
        border: "1px solid rgba(255, 255, 255, 0.45)",
      },
    }}
  >
    <Typography
      sx={{
        color: "#fff",
        fontFamily: fonts.display,
        fontSize: { xs: "1.6rem", md: "2.2rem" },
        fontWeight: 600,
        letterSpacing: "-0.03em",
      }}
    >
      vision
      <Box component="span" sx={{ color: colors.pinkPale }}>
        .
      </Box>
    </Typography>
  </Box>
);

export default VisionFrame;
