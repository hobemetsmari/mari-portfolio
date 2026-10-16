import { Box, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { colors } from "../../theme/color";

const TopbarContactButton = () => (
  <Button
    component="a"
    href="#contact"
    endIcon={
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: 24,
          height: 24,
          borderRadius: "50%",
          bgcolor: colors.magenta,
          color: "#fff",
        }}
      >
        <ArrowOutwardIcon sx={{ fontSize: 15 }} />
      </Box>
    }
    sx={{
      px: 1,
      pl: 2,
      py: 0.5,
      borderRadius: "999px",
      bgcolor: "#fff",
      color: "#171010",
      fontSize: 11,
      fontWeight: 700,
      whiteSpace: "nowrap",
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": {
        bgcolor: "#fff",
        transform: "translateY(-1px)",
        boxShadow: "0 10px 28px rgba(60, 0, 20, 0.35)",
      },
      "& .MuiButton-endIcon": {
        ml: 1.5,
      },
    }}
  >
    Get in touch
  </Button>
);

export default TopbarContactButton;
