import { Box } from "@mui/material";

const VisionBackground = () => (
  <Box
    aria-hidden="true"
    sx={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      borderRadius: "inherit",
      background:
        "linear-gradient(115deg, rgba(192, 0, 104, 0.42) 0%, rgba(139, 23, 78, 0.32) 45%, rgba(59, 23, 63, 0.5) 100%), #2a2430",
    }}
  />
);

export default VisionBackground;
