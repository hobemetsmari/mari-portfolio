import { Box, Link } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { projectsTheme } from "./projectsTheme";
import type { ProjectLink } from "./types";

interface ProjectLinkListProps {
  links: ProjectLink[];
}

export const ProjectLinkList = ({ links }: ProjectLinkListProps) => (
  <Box
    component="ul"
    sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, m: 0, p: 0 }}
  >
    {links.map((link) => (
      <Box component="li" key={link.href} sx={{ listStyle: "none" }}>
        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            px: 2,
            py: 1,
            borderRadius: 999,
            border: `1px solid ${projectsTheme.borderHover}`,
            color: projectsTheme.accent,
            fontWeight: 700,
            fontSize: "0.9375rem",
            transition: "background-color 160ms",
            "&:hover": { backgroundColor: projectsTheme.accentSoft },
            "&:focus-visible": {
              outline: `2px solid ${projectsTheme.accent}`,
              outlineOffset: 3,
            },
          }}
        >
          {link.label}
          <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />
        </Link>
      </Box>
    ))}
  </Box>
);
