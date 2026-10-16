import {
  Box,
  Dialog,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ProjectLogo } from "./projectLogo";
import { ProjectLinkList } from "./projectLinkList";
import { ProjectPartItem } from "./projectPartItem";
import { ProjectTagList } from "./projectsTagList";
import { projectsTheme } from "./projectsTheme";
import type { Project } from "./types";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      aria-labelledby="project-dialog-title"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: projectsTheme.backdrop,
            backdropFilter: "blur(6px)",
          },
        },
        paper: {
          sx: {
            backgroundColor: projectsTheme.surfaceRaised,
            backgroundImage: "none",
            border: `1px solid ${projectsTheme.border}`,
            borderRadius: fullScreen ? 0 : 5,
            color: projectsTheme.text,
          },
        },
      }}
    >
      {project && (
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <IconButton
            onClick={onClose}
            aria-label="Close"
            sx={{
              position: "absolute",
              top: { xs: 12, md: 20 },
              right: { xs: 12, md: 20 },
              zIndex: 1,
              color: projectsTheme.text,
              backgroundColor: projectsTheme.surfaceRaised,
              "&:hover": { backgroundColor: projectsTheme.surface },
              "&:focus-visible": {
                outline: `2px solid ${projectsTheme.accent}`,
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          {project.image && (
            <Box
              component="img"
              src={project.image.src}
              alt={project.image.alt}
              sx={{
                display: "block",
                width: "100%",
                maxHeight: 360,
                objectFit: "cover",
                objectPosition: "top left",
                borderRadius: 3,
                border: `1px solid ${projectsTheme.border}`,
              }}
            />
          )}

          {!project.image && (
            <ProjectLogo logo={project.logo} height={180} rounded />
          )}

          <Box>
            <Typography
              sx={{ color: projectsTheme.accent, fontWeight: 700, mb: 1 }}
            >
              {project.label}
            </Typography>
            <Typography
              id="project-dialog-title"
              component="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.05,
                fontSize: { xs: "2rem", md: "2.75rem" },
                maxWidth: "18ch",
              }}
            >
              {project.title}
            </Typography>
            <Typography
              sx={{ color: projectsTheme.muted, fontWeight: 600, mt: 1.5 }}
            >
              {project.role}
            </Typography>
          </Box>

          <Typography
            sx={{ fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "62ch" }}
          >
            {project.description}
          </Typography>

          {project.links && <ProjectLinkList links={project.links} />}

          <Box>
            <Typography
              component="h3"
              sx={{ fontWeight: 700, fontSize: "1.125rem", mb: 1.5 }}
            >
              What I did
            </Typography>
            <Box
              component="ul"
              sx={{
                m: 0,
                pl: 2.5,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {project.highlights.map((highlight) => (
                <Typography
                  key={highlight}
                  component="li"
                  sx={{
                    color: projectsTheme.muted,
                    lineHeight: 1.55,
                    "&::marker": { color: projectsTheme.accent },
                  }}
                >
                  {highlight}
                </Typography>
              ))}
            </Box>
          </Box>

          {project.groups?.map((group, index) => (
            <Box key={group.heading ?? index}>
              <Typography
                component="h3"
                sx={{ fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }}
              >
                {group.heading ?? "Parts of the project"}
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0 }}>
                {group.parts.map((part) => (
                  <ProjectPartItem key={part.title} part={part} />
                ))}
              </Box>
            </Box>
          ))}

          <Box>
            <Typography
              component="h3"
              sx={{ fontWeight: 700, fontSize: "1.125rem", mb: 1.5 }}
            >
              Tools
            </Typography>
            <ProjectTagList tags={project.tags} />
          </Box>
        </Box>
      )}
    </Dialog>
  );
};
