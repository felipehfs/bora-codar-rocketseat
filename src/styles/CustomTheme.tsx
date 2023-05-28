import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { DefaultTheme } from "./tokens/default";

export default function CustomTheme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>;
}
