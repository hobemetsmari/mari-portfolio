import { Box } from "@mui/material";
import ContactHeading from "./Contact.Heading";
import ContactLinks from "./ContactLinks";
import FooterBottom from "./FooterBottom";
import { colors } from "../../theme/color";

const Footer = () => (
  <Box
    component="footer"
    id="contact"
    aria-labelledby="contact-title"
    sx={{ background: colors.bg }}
  >
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2.5, md: 4 },
        pt: { xs: 10, md: 14 },
        pb: 4,
        display: "flex",
        flexDirection: "column",
        gap: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
        }}
      >
        <ContactLinks />
        <ContactHeading />
      </Box>
      <FooterBottom />
    </Box>
  </Box>
);

export default Footer;
