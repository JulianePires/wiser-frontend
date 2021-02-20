/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme{

    proprieties: {
      boxSizing: string;
      padding: number;
      margin: number;
    };

    colors: {
      primary: string;
      secondary: string;
      backgroundColor: string;
      backgroundButton: string;
      error: string;
      success: string;
    };
  }
}
