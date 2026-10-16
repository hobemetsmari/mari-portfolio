import { Box, Typography } from "@mui/material";
import { visionSkills } from "./visionSkillItems";
import { colors } from "../../theme/color";

const VisionSkills = () => (
  <Box
    component="ul"
    sx={{
      m: 0,
      p: { xs: 3, md: 4 },
      listStyle: "none",
      display: "grid",
      gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "repeat(5, 1fr)" },
      rowGap: 4,
      columnGap: 2,
      borderRadius: "24px",
      background: "rgba(20, 17, 22, 0.35)",
    }}
  >
    {visionSkills.map(({ label, icon: Icon }) => (
      <Box
        key={label}
        component="li"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.25,
          textAlign: "center",
          color: "#fff",
          transition: "color 0.2s",
          "&:hover": {
            color: colors.pinkPale,
          },
        }}
      >
        <Icon sx={{ fontSize: { xs: 36, md: 44 } }} aria-hidden="true" />
        <Typography sx={{ color: "inherit", fontSize: 14, fontWeight: 600 }}>
          {label}
        </Typography>
      </Box>
    ))}
  </Box>
);

export default VisionSkills;
