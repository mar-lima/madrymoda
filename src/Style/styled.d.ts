import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title?: string;
    colors: {
      white: string;
      black: string;
      grayPrimary: string;
      graySecundary: string;
      primary: string;
      secundary: string;
      blue: string;
      pink: string;
    };
  }
}
