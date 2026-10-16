import { Box, Typography } from "@mui/material";
import { navigationItems } from "./NavigationItems";

const TopbarLinks = () => (
  <Box
    component="ul"
    sx={{
      display: { xs: "none", md: "flex" },
      alignItems: "center",
      gap: 3.5,
      m: 0,
      p: 0,
      listStyle: "none",
    }}
  >
    {navigationItems.map((item) => (
      <Box component="li" key={item.href}>
        <Typography
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
      </Box>
    ))}
  </Box>
);

export default TopbarLinks;
