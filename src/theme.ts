import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    background: string;
    itemBackground: string;
    main: string;
    text: string;
    done: string;
  }
}

export const theme: Theme = {
  background: '#101010',
  itemBackground: '#313131',
  main: '#778bdd',
  text: '#cfcfcf',
  done: '#616161',
};
