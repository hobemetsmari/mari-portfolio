import portraitPhoto from "../../../assets/about-1.png";
import awardPhoto from "../../../assets/about-2.png";
import teamPhoto from "../../../assets/about-3.png";
import creativePhoto from "../../../assets/about-4.png";

export type AboutTrait = {
  label: string;
  text: string;
  photo: string;
  alt: string;
  position?: string;
};

export const aboutTraits: AboutTrait[] = [
  {
    label: "multitasker.",
    text: "Doing just one thing has always bored me. I've tried everything from academic competitions to sports, until I found IT. Here I can use my creativity, math skills and love for healthy competition all at once.",
    photo: portraitPhoto,
    alt: "Portrait of Mari",
    position: "center 15%",
  },
  {
    label: "competitive.",
    text: "A good competition has always motivated me. I've been a professional dancer for 8 years, winning national titles in Estonia and abroad. My biggest rival is myself, which is why I keep improving and learning to stay one step ahead.",
    photo: awardPhoto,
    alt: "Mari holding a certificate at an award ceremony",
    position: "center 25%",
  },
  {
    label: "creative.",
    text: "I've always had a passion for the fine arts. My work ranges from web design to DIY projects, and design thinking guides me through everyday life too.",
    photo: creativePhoto,
    alt: "One of Mari's creative projects",
  },
  {
    label: "teamplayer.",
    text: "I truly value the people I work with and I'm a team player at heart. A chain is only as strong as its weakest link, which is why I see teamwork as one of the biggest drivers of progress.",
    photo: teamPhoto,
    alt: "Mari with her team at a competition",
  },
];
