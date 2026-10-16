import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import type { ExperienceItem } from "./experienceItems";
import { colors, fonts } from "../../../theme/color";

type TimelineItemProps = {
  item: ExperienceItem;
};

const TimelineItem = ({ item }: TimelineItemProps) => {
  const isWork = item.type === "work";

  return (
    <Box
      component="li"
      sx={{
        position: "relative",
        pb: { xs: 5, md: 6 },
        "&:last-of-type": { pb: 0 },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 4,
          left: { xs: -40, md: "auto" },
          right: { xs: "auto", md: -40 },
          width: 16,
          height: 16,
          borderRadius: "50%",
          border: `3px solid ${colors.amber}`,
          background: isWork ? colors.amber : colors.surface,
        }}
      />
      <Typography
        sx={{
          mb: 1,
          color: colors.amber,
          fontFamily: fonts.display,
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {item.period}
      </Typography>
      <Typography
        component="h3"
        sx={{
          mb: 0.5,
          fontFamily: fonts.display,
          fontSize: { xs: "1.35rem", md: "1.75rem" },
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
        }}
      >
        {item.title}
      </Typography>
      <Typography sx={{ color: colors.muted, fontSize: 15 }}>
        {item.place}
      </Typography>

      {item.links && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            gap: 1,
            mt: 1.5,
          }}
        >
          {item.links.map((link) => (
            <Box
              key={link.href}
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                px: 1.5,
                py: 0.5,
                borderRadius: "999px",
                background: link.background,
                color: link.textColor,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "transform 0.2s, filter 0.2s",
                "&:hover": {
                  transform: "translateY(-1px)",
                  filter: "brightness(1.15)",
                },
              }}
            >
              {link.label}
              <ArrowOutwardIcon sx={{ fontSize: 14 }} aria-hidden="true" />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TimelineItem;
