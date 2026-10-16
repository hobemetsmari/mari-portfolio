import { useState } from "react";
import { Box } from "@mui/material";
import TraitText from "./TraitText";
import PhotoCarousel from "./PhotoCarousel";
import { aboutTraits } from "./aboutTraitItems";

const AboutTraits = () => {
  const [active, setActive] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 5, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: 620,
          minHeight: { xs: 220, sm: 160, md: 140 },
          ml: { md: "auto" },
          textAlign: { xs: "left", md: "right" },
        }}
      >
        <TraitText key={active} trait={aboutTraits[active]} />
      </Box>
      <PhotoCarousel active={active} onChange={setActive} />
    </Box>
  );
};

export default AboutTraits;
