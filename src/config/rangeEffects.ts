import type { RangeEffects } from 'activeBook-core/@types';

export const rangeEffects: RangeEffects = [
  {
    id: 'just-relax-soundtrack',
    type: 'audio',
    range: [{
      from: 1,
      to: 19,
    }],
    options: {
      src: './assets/book_data/audios/music/just-relax.mp3',
      type: 'music',
      playOnLoad: true,
      loop: true,
      relativeVolume: 30,
    },
  },
];
