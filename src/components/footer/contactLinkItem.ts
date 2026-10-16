import type { SvgIconComponent } from "@mui/icons-material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: SvgIconComponent;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "hobemetsm@gmail.com",
    href: "mailto:hobemetsm@gmail.com",
    icon: MailOutlineRoundedIcon,
  },
  {
    label: "Phone",
    value: "+372 5650 8689",
    href: "tel:+37256508689",
    icon: PhoneRoundedIcon,
  },
  {
    label: "LinkedIn",
    value: "Mari Hõbemets",
    href: "https://www.linkedin.com/in/mari-hõbemets/",
    icon: LinkedInIcon,
    external: true,
  },
];
