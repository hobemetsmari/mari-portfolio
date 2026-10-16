import { Box } from "@mui/material";
import { colors, fonts } from "../../../theme/color";
import { aboutTraits } from "./aboutTraitItems";

type TraitTabsProps = {
  active: number;
  onSelect: (index: number) => void;
};

const TraitTabs = ({ active, onSelect }: TraitTabsProps) => (
  <Box
    role="tablist"
    aria-label="About me"
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: { xs: "flex-start", md: "flex-end" },
      gap: { xs: 2, md: 3 },
      mb: 2.5,
    }}
  >
    {aboutTraits.map((trait, index) => {
      const isActive = index === active;

      return (
        <Box
          key={trait.label}
          component="button"
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onSelect(index)}
          sx={{
            p: 0,
            border: 0,
            background: "none",
            cursor: "pointer",
            fontFamily: fonts.display,
            fontSize: { xs: 18, md: 22 },
            fontWeight: 700,
            lineHeight: 1,
            color: isActive ? colors.pink : "rgba(255, 255, 255, 0.3)",
            transition: "color 0.2s",
            "&:hover": {
              color: isActive ? colors.pink : colors.pinkPale,
            },
          }}
        >
          {trait.label}
        </Box>
      );
    })}
  </Box>
);

export default TraitTabs;
