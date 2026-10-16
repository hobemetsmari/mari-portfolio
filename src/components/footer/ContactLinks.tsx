import { Box } from "@mui/material";
import { colors } from "../../theme/color";
import ContactLinkRow from "./ContactLinkRow";
import { contactLinks } from "./contactLinkItem";
import { cvLinks } from "./cvLinkItems";

const ContactLinks = () => (
  <Box
    component="ul"
    sx={{
      m: 0,
      p: 0,
      listStyle: "none",
      borderTop: `1px solid ${colors.border}`,
    }}
  >
    {[...contactLinks, ...cvLinks].map((link) => (
      <ContactLinkRow key={link.label} {...link} />
    ))}
  </Box>
);

export default ContactLinks;
