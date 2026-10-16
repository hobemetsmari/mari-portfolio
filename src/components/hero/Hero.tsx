import { Box } from "@mui/material";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import TopbarMenu from "./TopBarMenu";
import { colors } from "../../theme/color";

const radius = { xs: "0 0 40px 40px", md: "0 0 80px 80px" };

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        isolation: "isolate",
        mb: { xs: 6, md: 9 },
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: radius,
        },
        "&::before": {
          zIndex: -1,
          background: "rgba(192, 0, 104, 0.38)",
          transform: {
            xs: "translateY(14px) scaleX(0.98)",
            md: "translateY(22px) scaleX(0.985)",
          },
        },
        "&::after": {
          zIndex: -2,
          background: "rgba(139, 23, 78, 0.22)",
          transform: {
            xs: "translateY(28px) scaleX(0.96)",
            md: "translateY(44px) scaleX(0.97)",
          },
        },
      }}
    >
      <Box
        component="section"
        id="home"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minHeight: { xs: "700px", md: "760px" },
          overflow: "hidden",
          borderRadius: radius,
          background: colors.bg,
        }}
      >
        <HeroBackground />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 1440,
            mx: "auto",
          }}
        >
          <TopbarMenu />
          <HeroContent />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
