import { Box } from "@mui/material";
import AboutIntro from "./AboutIntro";
import AboutTraits from "./AboutTraits";
import { colors } from "../../../theme/color";

const About = () => (
  <Box
    component="section"
    id="about"
    aria-labelledby="about-title"
    sx={{
      mt: { xs: 5, md: 6 },
      borderRadius: { xs: "40px 40px 0 0", md: "80px 80px 0 0" },
      background: colors.surface,
    }}
  >
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2.5, md: 4 },
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 8, md: 10 },
      }}
    >
      <AboutIntro />
      <AboutTraits />
    </Box>
  </Box>
);

export default About;
