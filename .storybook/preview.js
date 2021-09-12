import { themes } from "@storybook/theming";
import "../src/App.scss";

// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "#333333" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "#FFFFFF" },
  },
  // Story sorting
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
