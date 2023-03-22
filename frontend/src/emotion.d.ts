import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fontSizes: {
      normal: string;
      big: string;
      small: string;
    };
  }
}
