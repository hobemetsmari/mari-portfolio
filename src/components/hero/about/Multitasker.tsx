import { Box, Typography } from "@mui/material";
import SectionLabel from "./sectoionLabel";
import { colors } from "../../../theme/color";

const Multitasker = () => (
  <Box
    sx={{
      maxWidth: 620,
      ml: { md: "auto" },
      textAlign: { xs: "left", md: "right" },
    }}
  >
    <SectionLabel>multitasker.</SectionLabel>
    <Typography
      sx={{
        color: colors.muted,
        fontSize: 15,
        lineHeight: 1.75,
      }}
    >
      Doing just one thing has always bored me. I've tried everything from
      academic competitions to sports, until I found IT. Here I can use my
      creativity, math skills and love for healthy competition all at once.
    </Typography>
  </Box>
);

export default Multitasker;
