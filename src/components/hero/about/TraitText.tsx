import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import SectionLabel from "./sectoionLabel";
import type { AboutTrait } from "./aboutTraitItems";
import { colors } from "../../../theme/color";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

type TraitTextProps = {
  trait: AboutTrait;
};

const TraitText = ({ trait }: TraitTextProps) => (
  <Box
    aria-live="polite"
    sx={{
      animation: `${fadeIn} 0.35s ease`,
    }}
  >
    <SectionLabel>{trait.label}</SectionLabel>
    <Typography
      sx={{
        color: colors.muted,
        fontSize: 15,
        lineHeight: 1.75,
      }}
    >
      {trait.text}
    </Typography>
  </Box>
);

export default TraitText;
