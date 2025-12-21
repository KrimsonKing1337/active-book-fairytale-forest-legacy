import type { RangeEffects } from 'activeBook-core/@types';

export const rangeEffects: RangeEffects = [
  {
    id: 'just-relax-soundtrack',
    type: 'audio',
    range: [{
      from: 1,
      to: 26,
    }],
    options: {
      src: './assets/book_data/audios/music/just-relax.mp3',
      type: 'music',
      playOnLoad: true,
      loop: true,
      relativeVolume: 30,
    },
  },
  {
    id: 'page-1-2_birds-brook-leafs',
    type: 'audio',
    range: [{
      from: 1,
      to: 2,
    }],
    options: {
      src: './assets/book_data/audios/sounds/birds-brook-leafs.mp3',
      type: 'bg',
      playOnLoad: true,
      loop: true,
    },
  },
];
