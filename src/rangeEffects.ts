import { getPositionByPreset } from 'activeBook-core/hooks/effects/background/utils';
import type { RangeEffects } from 'activeBook-core/@types';

export const rangeEffects: RangeEffects = [{
  id: '1',
  type: 'background',
  range: [{
    from: 2,
    to: 4,
  }],
  options: {
    videos: [
      {
        src: '/assets/book_data/1.mp4',
        muted: false,
        defaultVolume: 10,
        style: {
          ...getPositionByPreset('bottom'),
          height: '100px',
          width: '100%',
          opacity: 0.5,
        },
      },
      {
        src: '/assets/book_data/1.mp4',
        style: {
          ...getPositionByPreset('top'),
          height: '100px',
          width: '100%',
          opacity: 0.5,
        },
      },
    ],
    images: [
      {
        src: '/assets/book_data/2.jpg',
        wrapperStyle: {
          zIndex: '-3',
        },
        style: {
          ...getPositionByPreset('bottom'),
          height: '100px',
          width: '100%',
        },
      },
      {
        src: '/assets/book_data/2.jpg',
        wrapperStyle: {
          zIndex: '-3',
        },
        style: {
          ...getPositionByPreset('top'),
          height: '100px',
          width: '100%',
        },
      },
    ],
  },
}];
