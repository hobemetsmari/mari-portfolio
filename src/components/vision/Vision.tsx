import { Box } from "@mui/material";
import VisionBackground from "./VisionBackground";
import VisionTitle from "./VisionTitle";
import VisionStatement from "./VisionStatement";
import VisionSkills from "./VisionSkills";

const Vision = () => (
  <Box
    component="section"
    id="vision"
    aria-labelledby="vision-title"
    sx={{
      position: "relative",
      overflow: "hidden",
    }}
  >
    <VisionBackground />
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2.5, md: 4 },
        py: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
        }}
      >
        <VisionTitle />
        <VisionStatement />
      </Box>
      <VisionSkills />
    </Box>
  </Box>
);

export default Vision;
