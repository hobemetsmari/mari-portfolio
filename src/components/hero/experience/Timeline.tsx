import { Box } from "@mui/material";
import TimelineItem from "./TimelineItem";
import { experienceItems } from "./experienceItems";
import { colors } from "../../../theme/color";

const Timeline = () => (
  <Box
    component="ol"
    sx={{
      position: "relative",
      m: 0,
      p: 0,
      pl: { xs: "40px", md: 0 },
      pr: { xs: 0, md: "40px" },
      listStyle: "none",
      textAlign: { xs: "left", md: "right" },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 12,
        bottom: 8,
        left: { xs: 7, md: "auto" },
        right: { xs: "auto", md: 7 },
        width: 2,
        background: colors.border,
      },
    }}
  >
    {experienceItems.map((item) => (
      <TimelineItem key={`${item.place}-${item.period}`} item={item} />
    ))}
  </Box>
);

export default Timeline;
