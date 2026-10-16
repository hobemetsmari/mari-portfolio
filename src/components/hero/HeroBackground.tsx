import { Box } from "@mui/material";
import heroImage from "../../assets/hero-image2.png";
import { colors } from "../../theme/color";

const HeroBackground = () => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        borderRadius: "inherit",
        background: `linear-gradient(115deg, ${colors.magenta} 0%, ${colors.plum} 45%, ${colors.plumDeep} 100%)`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "100%",
          maxWidth: 1440,
          transform: "translateX(-50%)",
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt=""
          sx={{
            position: "absolute",
            width: "auto",
            maxWidth: "none",
            objectFit: "contain",

            height: { xs: "68%", sm: "95%", md: "125%" },
            left: { xs: "57%", sm: "48%", md: "52%" },
            top: { xs: "30%", sm: "15%", md: "30%" },
            bottom: { xs: "auto", md: 0 },

            transform: {
              xs: "translateX(-50%) scale(1.15)",
              sm: "translateX(-50%) scale(1.05)",
              md: "scale(1.1)",
            },
            transformOrigin: {
              xs: "center center",
              md: "center bottom",
            },
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, rgba(192, 0, 104, 0.5), rgba(140, 0, 65, 0.45), rgba(35, 10, 35, 0.55))",
          mixBlendMode: "multiply",
        }}
      />
    </Box>
  );
};

export default HeroBackground;
