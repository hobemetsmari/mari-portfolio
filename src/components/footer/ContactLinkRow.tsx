import { Box, Typography } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { colors, fonts } from "../../theme/color";

interface ContactLinkRowProps {
  label: string;
  value: string;
  href: string;
  icon: SvgIconComponent;
  external?: boolean;
  download?: string;
}

const ContactLinkRow = ({
  label,
  value,
  href,
  icon: Icon,
  external,
  download,
}: ContactLinkRowProps) => {
  const ActionIcon = download ? FileDownloadOutlinedIcon : ArrowOutwardIcon;

  return (
    <Box component="li" sx={{ borderBottom: `1px solid ${colors.border}` }}>
      <Box
        component="a"
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={`${label}: ${value}`}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 2, md: 3 },
          py: { xs: 2.5, md: 3 },
          color: colors.text,
          textDecoration: "none",
          transition: "color 0.2s",
          "&:hover": {
            color: colors.pink,
          },
          "&:hover .contact-arrow": {
            transform: download ? "translateY(3px)" : "translate(3px, -3px)",
          },
        }}
      >
        <Icon sx={{ fontSize: { xs: 22, md: 26 }, color: colors.muted }} />
        <Typography
          component="span"
          sx={{
            flex: 1,
            minWidth: 0,
            color: "inherit",
            fontFamily: fonts.display,
            fontSize: { xs: "1.15rem", md: "1.6rem" },
            fontWeight: 500,
            letterSpacing: "-0.02em",
            overflowWrap: "anywhere",
          }}
        >
          {value}
        </Typography>
        <ActionIcon
          className="contact-arrow"
          aria-hidden="true"
          sx={{ fontSize: 22, transition: "transform 0.2s" }}
        />
      </Box>
    </Box>
  );
};

export default ContactLinkRow;
