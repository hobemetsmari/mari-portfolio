import { createTheme } from "@mui/material/styles";
import { colors, fonts } from "./color";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.pink },
    secondary: { main: colors.magenta },
    background: { default: colors.bg, paper: colors.surface },
    text: { primary: colors.text, secondary: colors.muted },
    divider: colors.border,
  },
  typography: {
    fontFamily: fonts.body,
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
