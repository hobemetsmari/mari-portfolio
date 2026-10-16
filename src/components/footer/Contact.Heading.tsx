import { Box, Typography } from "@mui/material";
import { colors, fonts } from "../../theme/color";

const ContactHeading = () => (
  <Box>
    <Typography
      id="contact-title"
      component="h2"
      sx={{
        fontFamily: fonts.display,
        fontSize: { xs: "3.5rem", md: "6.5rem" },
        fontWeight: 700,
        lineHeight: 0.9,
        letterSpacing: "-0.06em",
      }}
    >
      <Box component="span" sx={{ color: "rgba(255, 255, 255, 0.45)" }}>
        contact
      </Box>
      <br />
      me
      <Box component="span" sx={{ color: colors.pink }}>
        .
      </Box>
    </Typography>
  </Box>
);

export default ContactHeading;
