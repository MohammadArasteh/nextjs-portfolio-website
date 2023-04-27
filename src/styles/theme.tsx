import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string;
      title: string;
    };
    colors: {
      background1: string;
      primary1: string;
      accent1: string;
      button: string;
      background2: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
