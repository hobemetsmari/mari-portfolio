import { Box } from "@mui/material";
import { ProjectTag } from "./projectTag";

interface ProjectTagListProps {
  tags: string[];
}

export const ProjectTagList = ({ tags }: ProjectTagListProps) => (
  <Box
    component="ul"
    aria-label="Tools used"
    sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: 0, p: 0 }}
  >
    {tags.map((tag) => (
      <ProjectTag key={tag} label={tag} />
    ))}
  </Box>
);
