import { Box } from "@mui/material";
import type { AboutTrait } from "./aboutTraitItems";

export type SlidePosition = "center" | "left" | "right" | "hidden";

const positionStyles: Record<SlidePosition, object> = {
  center: {
    transform: "translateX(-50%) scale(1)",
    filter: "none",
    opacity: 1,
    zIndex: 2,
  },
  left: {
    transform: "translateX(calc(-50% - 115%)) scale(0.85)",
    filter: "blur(6px)",
    opacity: 0.55,
    zIndex: 1,
    cursor: "pointer",
  },
  right: {
    transform: "translateX(calc(-50% + 115%)) scale(0.85)",
    filter: "blur(6px)",
    opacity: 0.55,
    zIndex: 1,
    cursor: "pointer",
  },
  hidden: {
    transform: "translateX(-50%) scale(0.7)",
    filter: "blur(6px)",
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
};

type CarouselSlideProps = {
  trait: AboutTrait;
  position: SlidePosition;
  onSelect: () => void;
};

const CarouselSlide = ({ trait, position, onSelect }: CarouselSlideProps) => (
  <Box
    component="img"
    src={trait.photo}
    alt={position === "center" ? trait.alt : ""}
    aria-hidden={position !== "center" || undefined}
    onClick={position === "left" || position === "right" ? onSelect : undefined}
    sx={{
      position: "absolute",
      top: 0,
      left: "50%",
      width: { xs: 240, md: 320 },
      height: { xs: 180, md: 240 },
      objectFit: "cover",
      objectPosition: trait.position ?? "center",
      borderRadius: { xs: "18px", md: "24px" },
      transition: "transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease",
      ...positionStyles[position],
    }}
  />
);

export default CarouselSlide;
