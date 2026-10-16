import { Box, Typography } from "@mui/material";
import SectionLabel from "./sectoionLabel";
import illustration from "../../../assets/about-illustration.png";
import { fonts, colors } from "../../../theme/color";

const AboutIntro = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
      alignItems: "center",
      gap: { xs: 5, md: 8 },
    }}
  >
    <Box>
      <SectionLabel>about.</SectionLabel>
      <Typography
        id="about-title"
        component="h2"
        sx={{
          mb: 3,
          fontFamily: fonts.display,
          fontSize: { xs: "2.4rem", md: "3.6rem" },
          fontWeight: 700,
          lineHeight: 1.02,
          letterSpacing: "-0.045em",
        }}
      >
        Designer. Creative.
        <br />
        Out of the box.
      </Typography>
      <Typography
        sx={{
          maxWidth: 440,
          color: colors.text,
          fontSize: { xs: "1.05rem", md: "1.2rem" },
          lineHeight: 1.6,
        }}
      >
        I'm a junior frontend developer who believes{" "}
        <Box component="span" sx={{ color: colors.green, fontWeight: 600 }}>
          determination
        </Box>{" "}
        is the greatest power one can have.
      </Typography>
    </Box>

    <Box
      component="img"
      src={illustration}
      alt="Illustration of a person leaping out of a head into a colourful forest"
      sx={{
        width: "100%",
        aspectRatio: "3 / 2",
        objectFit: "cover",
        borderRadius: { xs: "24px", md: "36px" },
      }}
    />
  </Box>
);

export default AboutIntro;
