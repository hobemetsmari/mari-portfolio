import { Box, IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CarouselSlide, { type SlidePosition } from "./carouselSlide";
import { colors } from "../../../theme/color";
import { aboutTraits } from "./aboutTraitItems";

const getPosition = (
  index: number,
  active: number,
  total: number,
): SlidePosition => {
  const offset = (index - active + total) % total;
  if (offset === 0) return "center";
  if (offset === 1) return "right";
  if (offset === total - 1) return "left";
  return "hidden";
};

const arrowSx = {
  flexShrink: 0,
  color: colors.text,
  border: `1px solid ${colors.border}`,
  "&:hover": {
    borderColor: colors.pink,
    color: colors.pink,
    background: "transparent",
  },
};

type PhotoCarouselProps = {
  active: number;
  onChange: (index: number) => void;
};

const PhotoCarousel = ({ active, onChange }: PhotoCarouselProps) => {
  const total = aboutTraits.length;

  const showPrevious = () => onChange((active - 1 + total) % total);
  const showNext = () => onChange((active + 1) % total);

  return (
    <Box
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, md: 2 },
      }}
    >
      <IconButton
        aria-label="Previous photo"
        onClick={showPrevious}
        sx={arrowSx}
      >
        <ChevronLeftRoundedIcon />
      </IconButton>

      <Box
        sx={{
          position: "relative",
          flex: 1,
          height: { xs: 180, md: 240 },
          overflow: "hidden",
        }}
      >
        {aboutTraits.map((trait, index) => (
          <CarouselSlide
            key={trait.label}
            trait={trait}
            position={getPosition(index, active, total)}
            onSelect={() => onChange(index)}
          />
        ))}
      </Box>

      <IconButton aria-label="Next photo" onClick={showNext} sx={arrowSx}>
        <ChevronRightRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default PhotoCarousel;
