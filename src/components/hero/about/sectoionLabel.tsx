import { Typography } from "@mui/material";
import { colors, fonts } from "../../../theme/color";

type SectionLabelProps = {
  children: string;
};

const SectionLabel = ({ children }: SectionLabelProps) => (
  <Typography
    sx={{
      mb: 1.5,
      color: colors.pink,
      fontFamily: fonts.display,
      fontSize: { xs: 18, md: 22 },
      fontWeight: 700,
      lineHeight: 1,
    }}
  >
    {children}
  </Typography>
);

export default SectionLabel;
