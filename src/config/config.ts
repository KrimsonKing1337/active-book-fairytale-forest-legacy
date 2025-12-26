import type { Config } from 'activeBook-core/@types';

export const config: Config = {
  id: 'fairytale-forest',
  pages: 26,
  defaultTheme: 'green',
  customThemes: {
    green: {
      main: '#00693E',
      secondary: '#000',
      hover: '#33936B',
      bg: '#fff',
      overflow: '#fffd',
      'text-shadow-for-hover': '#1111117f',
    },
  },
  bodyStyle: {
    background: 'url("./assets/book_data/images/backgrounds/forest_wide.jpg") no-repeat center',
  },
};
