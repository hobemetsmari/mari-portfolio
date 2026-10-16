import { Box, IconButton, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { colors, fonts } from "../../theme/color";
import { navigationItems } from "./NavigationItems";

interface TopbarMobileMenuProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const TopbarMobileMenu = ({
  open,
  onToggle,
  onClose,
}: TopbarMobileMenuProps) => (
  <Box
    sx={{ display: { xs: "block", md: "none" }, order: -1, ml: -1, mr: "auto" }}
  >
    <IconButton
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      sx={{ color: "#fff" }}
    >
      {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
    </IconButton>

    <Box
      id="mobile-menu"
      component="ul"
      hidden={!open}
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        m: 0,
        px: 2.5,
        pt: 1,
        pb: 3,
        listStyle: "none",
        backgroundColor: "rgba(20, 17, 26, 0.96)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {navigationItems.map((item) => (
        <Box
          component="li"
          key={item.href}
          sx={{ borderBottom: `1px solid ${colors.border}` }}
        >
          <Typography
            component="a"
            href={item.href}
            onClick={onClose}
            sx={{
              display: "block",
              py: 1.75,
              color: "#fff",
              fontFamily: fonts.display,
              fontSize: "1.35rem",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { color: colors.pink },
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default TopbarMobileMenu;
