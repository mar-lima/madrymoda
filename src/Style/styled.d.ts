import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title?: string;
    colors: {
      backColor: string;
      black: string;
      primary: string;
      secundary: string;
      blue: string;
      pink: string;
    };
  }
}
