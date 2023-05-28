import "@emotion/react";
import { ITheme } from "../styles/ITheme";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
