export const DefaultTheme = {
  colors: {
    brand: {
      default: "#9333EA",
      light: "#A855F7",
      lighter: "#C084FC",
    },
    neutrals: {
      primary: "#F9FAFB",
      secondary: "#E4E4E7",
      closeButton: "#A1A1AA",
      stroke: "#3F3F46",
      surface: "#18181D",
      background: "#000",
      white: "#fff",
    },
  },
  fonts: {
    fontSize: {
      paragraph: "16px",
      numberSm: "16px",
      heading: "20px",
      numberLg: "20px",
    },
    lineHeight: {},
    weight: {
      bold: "bold",
      medium: "medium",
    },
  },
} as const;
