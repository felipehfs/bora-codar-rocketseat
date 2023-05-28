export interface ITheme {
  colors: Colors;
  fonts: Fonts;
}

export interface Colors {
  brand: Brand;
  neutrals: Neutrals;
}

export interface Brand {
  default: string;
  light: string;
  lighter: string;
}

export interface Neutrals {
  primary: string;
  secondary: string;
  closeButton: string;
  stroke: string;
  surface: string;
  background: string;
  white: string;
}

export interface Fonts {
  fontSize: FontSize;
  lineHeight: LineHeight;
  weight: Weight;
}

export interface FontSize {
  paragraph: string;
  numberSm: string;
  heading: string;
  numberLg: string;
}

export interface LineHeight {}

export interface Weight {
  bold: string;
  medium: string;
}
