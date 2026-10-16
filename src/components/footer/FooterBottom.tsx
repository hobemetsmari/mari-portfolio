import { Box, Typography } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { colors } from "../../theme/color";

const linkSx = {
  color: colors.muted,
  textDecoration: "none",
  transition: "color 0.2s",
  "&:hover": {
    color: colors.pink,
  },
};

const FooterBottom = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: { xs: "flex-start", sm: "center" },
      justifyContent: "space-between",
      gap: 2,
      pt: 3,
      borderTop: `1px solid ${colors.border}`,
      color: colors.muted,
      fontSize: 13,
    }}
  >
    <Typography sx={{ color: "inherit", fontSize: "inherit" }}>
      © {new Date().getFullYear()} Mari Hõbemets
    </Typography>

    <Box
      component="a"
      href="#home"
      sx={{
        ...linkSx,
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        fontWeight: 600,
      }}
    >
      Back to top
      <ArrowUpwardRoundedIcon sx={{ fontSize: 16 }} aria-hidden="true" />
    </Box>
  </Box>
);

export default FooterBottom;
