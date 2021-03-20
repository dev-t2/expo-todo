import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    background: string;
    surface: string;
    onPrimary: string;
    onSecondary: string;
    done: string;
  }
}

export const theme: Theme = {
  background: '#121212',
  surface: '#1e1e1e',
  onPrimary: '#e1e1e1',
  onSecondary: '#646464',
  done: '#616161',
};
