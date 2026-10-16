import type { ReactNode } from "react";
import { Box } from "@mui/material";

interface SectionContainerProps {
  id?: string;
  labelledBy?: string;
  children: ReactNode;
}

export const SectionContainer = ({
  id,
  labelledBy,
  children,
}: SectionContainerProps) => (
  <Box
    component="section"
    id={id}
    aria-labelledby={labelledBy}
    sx={{ py: { xs: 9, md: 12 } }}
  >
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 } }}>
      {children}
    </Box>
  </Box>
);
