import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    itemBackground: string;
    main: string;
    text: string;
    done: string;
  }
}

export const theme: DefaultTheme = {
  background: '#101010',
  itemBackground: '#313131',
  main: '#778bdd',
  text: '#cfcfcf',
  done: '#616161',
};
