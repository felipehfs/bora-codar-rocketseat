import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import CssReset from "../src/styles/CssReset";
import { DefaultTheme } from "../src/styles/tokens/default";
import CustomTheme from "../src/styles/CustomTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: CssReset,
    themes: {
      default: DefaultTheme,
    },
    defaultTheme: "default",
    Provider: CustomTheme,
  }),
];

export default preview;
