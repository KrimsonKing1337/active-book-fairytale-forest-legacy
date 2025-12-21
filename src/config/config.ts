import type { Config } from 'activeBook-core/@types';

export const config: Config = {
  id: 'fairytale-forest',
  pages: 20,
  defaultTheme: 'green',
  customThemes: {
    green: {
      main: '#00693E',
      secondary: '#000',
      hover: '#00693E',
      bg: '#fff',
      overflow: '#fffd',
      'text-shadow-for-hover': '#1111117f',
    },
  },
};
