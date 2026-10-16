import { Box, Typography } from "@mui/material";
import SectionLabel from "../about/sectoionLabel";
import Timeline from "./Timeline";
import illustration from "../../../assets/journey.png";
import { colors, fonts } from "../../../theme/color";

const Experience = () => (
  <Box
    component="section"
    id="experience"
    aria-labelledby="experience-title"
    sx={{
      position: "relative",
      overflow: "hidden",
      background: colors.surface,
      borderRadius: { xs: "0 0 40px 40px", md: "0 0 80px 80px" },
    }}
  >
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2.5, md: 4 },
        pt: { xs: 4, md: 6 },
        pb: { xs: 8, md: 12 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        columnGap: 8,
        rowGap: { xs: 6, md: 0 },
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          position: { md: "sticky" },
          top: { md: 96 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 5 },
        }}
      >
        <Box>
          <SectionLabel>experience.</SectionLabel>
          <Typography
            id="experience-title"
            component="h2"
            sx={{
              fontFamily: fonts.display,
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
            }}
          >
            My journey
            <br />
            and studies
          </Typography>
        </Box>

        <Box
          component="img"
          src={illustration}
          alt=""
          aria-hidden="true"
          sx={{
            display: "block",
            width: "100%",
            maxWidth: { xs: 420, md: 520 },
            height: "auto",
            borderRadius: { xs: "28px", md: "40px" },
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </Box>

      <Box sx={{ pt: { md: 1 } }}>
        <Timeline />
      </Box>
    </Box>
  </Box>
);

export default Experience;
