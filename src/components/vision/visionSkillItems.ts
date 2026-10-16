import type { SvgIconComponent } from "@mui/icons-material";
import DrawRoundedIcon from "@mui/icons-material/DrawRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

export type VisionSkill = {
  label: string;
  icon: SvgIconComponent;
};

export const visionSkills: VisionSkill[] = [
  { label: "UI design", icon: DrawRoundedIcon },
  { label: "Development", icon: CodeRoundedIcon },
  { label: "Analysis", icon: FindInPageRoundedIcon },
  { label: "Testing", icon: FactCheckRoundedIcon },
  { label: "Teamwork", icon: GroupsRoundedIcon },
];
