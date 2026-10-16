export const projectsTheme = {
  accent: "#ff5fa8",
  accentSoft: "rgba(255, 95, 168, 0.12)",
  text: "#f7eef3",
  muted: "#c3b2bc",
  surface: "#19141a",
  surfaceRaised: "#211a20",
  logoBackground: "#f6f1f4",
  border: "rgba(255, 255, 255, 0.08)",
  borderHover: "rgba(255, 95, 168, 0.45)",
  backdrop: "rgba(8, 4, 8, 0.72)",
  status: {
    live: { color: "#7ee2a8", background: "rgba(126, 226, 168, 0.12)" },
    unreleased: { color: "#f5c96a", background: "rgba(245, 201, 106, 0.12)" },
    confidential: { color: "#c3b2bc", background: "rgba(195, 178, 188, 0.12)" },
  },
} as const;
