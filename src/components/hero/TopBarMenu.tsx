import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { colors } from "../../theme/color";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Vision", href: "#vision" },
];

const TopbarMenu = () => {
  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        px: { xs: 2.5, md: "4.5%" },
        py: 2.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: { xs: 1.5, md: 3.5 },
        }}
      >
        {navigationItems.map((item) => (
          <Typography
            key={item.href}
            component="a"
            href={item.href}
            sx={{
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s ease",
              "&:hover": {
                opacity: 0.65,
              },
            }}
          >
            {item.label}
          </Typography>
        ))}

        <Button
          component="a"
          href="#contact"
          endIcon={
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: colors.magenta,
                color: "#fff",
              }}
            >
              <ArrowOutwardIcon sx={{ fontSize: 15 }} />
            </Box>
          }
          sx={{
            px: 1,
            pl: 2,
            py: 0.5,
            borderRadius: "999px",
            bgcolor: "#fff",
            color: "#171010",
            fontSize: 11,
            fontWeight: 700,
            whiteSpace: "nowrap",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              bgcolor: "#fff",
              transform: "translateY(-1px)",
              boxShadow: "0 10px 28px rgba(60, 0, 20, 0.35)",
            },
            "& .MuiButton-endIcon": {
              ml: 1.5,
            },
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};

export default TopbarMenu;
