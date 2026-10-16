import portraitPhoto from "../../../assets/about-1.png";
import awardPhoto from "../../../assets/about-2.png";
import teamPhoto from "../../../assets/about-3.png";

export type CarouselPhoto = {
  src: string;
  alt: string;
  position?: string;
};

export const carouselPhotos: CarouselPhoto[] = [
  { src: portraitPhoto, alt: "Portrait of Mari", position: "center 15%" },
  {
    src: awardPhoto,
    alt: "Mari holding a certificate at an award ceremony",
    position: "center 25%",
  },
  { src: teamPhoto, alt: "Mari with her team at a competition" },
];
