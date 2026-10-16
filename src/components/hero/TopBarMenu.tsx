import { useState } from "react";
import { Box, GlobalStyles, Portal } from "@mui/material";
import { colors } from "../../theme/color";
import TopbarContactButton from "./TopBarContactButton";
import TopbarLinks from "./topBarLinks";
import TopbarMobileMenu from "./TopBarMobileMneu";
import { useScrolled } from "./useScrolled";
import { NAV_HEIGHT } from "./NavigationItems";

const TopbarMenu = () => {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const filled = scrolled || menuOpen;

  return (
    <>
      <GlobalStyles
        styles={{
          html: {
            scrollPaddingTop: NAV_HEIGHT + 12,
            scrollBehavior: "smooth",
          },
          "@media (prefers-reduced-motion: reduce)": {
            html: { scrollBehavior: "auto" },
          },
        }}
      />

      <Box aria-hidden sx={{ height: NAV_HEIGHT, flexShrink: 0 }} />

      <Portal>
        <Box
          component="header"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            pt: "env(safe-area-inset-top, 0px)",
            backgroundColor: filled ? "rgba(20, 17, 26, 0.78)" : "transparent",
            backdropFilter: filled ? "blur(14px)" : "none",
            borderBottom: `1px solid ${scrolled ? colors.border : "transparent"}`,
            transition: "background-color 0.25s ease, border-color 0.25s ease",
          }}
        >
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
              position: "relative",
              maxWidth: 1440,
              mx: "auto",
              height: NAV_HEIGHT,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: { xs: 1.5, md: 3.5 },
              px: { xs: 2.5, md: "4.5%" },
            }}
          >
            <TopbarLinks />
            <TopbarContactButton />
            <TopbarMobileMenu
              open={menuOpen}
              onToggle={() => setMenuOpen((open) => !open)}
              onClose={() => setMenuOpen(false)}
            />
          </Box>
        </Box>
      </Portal>
    </>
  );
};

export default TopbarMenu;
