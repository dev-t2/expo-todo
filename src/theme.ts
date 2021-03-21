import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    surface: string;
    onPrimary: string;
    onSecondary: string;
  }
}

export const theme: DefaultTheme = {
  background: '#121212',
  surface: '#1e1e1e',
  onPrimary: '#e1e1e1',
  onSecondary: '#646464',
};
