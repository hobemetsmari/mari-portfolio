import { ButtonBase } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { projectsTheme } from "./projectsTheme";

interface ProjectOpenButtonProps {
  title: string;
  onClick: () => void;
}

export const ProjectOpenButton = ({
  title,
  onClick,
}: ProjectOpenButtonProps) => (
  <ButtonBase
    onClick={onClick}
    aria-haspopup="dialog"
    aria-label={`Open details: ${title}`}
    sx={{
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: "50%",
      border: `1px solid ${projectsTheme.border}`,
      color: projectsTheme.text,
      transition: "background-color 160ms, color 160ms, border-color 160ms",
      "article:hover &": {
        backgroundColor: projectsTheme.accent,
        borderColor: projectsTheme.accent,
        color: "#1a0610",
      },
      "&::after": { content: '""', position: "absolute", inset: 0 },
    }}
  >
    <ArrowOutwardRoundedIcon fontSize="small" />
  </ButtonBase>
);
