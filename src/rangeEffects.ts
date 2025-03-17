import { getPositionByPreset } from 'activeBook-core/hooks/effects/background/utils';
import type { RangeEffects } from 'activeBook-core/@types';

export const rangeEffects: RangeEffects = [
  {
    id: '1',
    type: 'background',
    range: [{
      from: 2,
      to: 4,
    }],
    options: {
      videos: [
        {
          id: '1',
          src: '/assets/book_data/2.mp4',
          muted: true,
          style: {
            ...getPositionByPreset('center'),
            height: '100px',
            width: '100%',
          },
        },
        {
          id: '2',
          src: '/assets/book_data/1.mp4',
          muted: false,
          relativeVolume: 10,
          style: {
            ...getPositionByPreset('bottom'),
            height: '100px',
            width: '100%',
            opacity: 0.5,
          },
        },
        {
          id: '3',
          src: '/assets/book_data/1.mp4',
          muted: false,
          relativeVolume: 10,
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
  },
  {
    id: 'Promise_From_Distant_Days_range_id',
    type: 'audio',
    range: [{
      from: 2,
      to: 4,
    }],
    options: {
      src: '/assets/book_data/Promise_From_Distant_Days.mp3',
      type: 'music',
      playOnLoad: true,
      loop: true,
    },
  },
  {
    id: 'radio_range_id',
    type: 'audio',
    range: [{
      from: 1,
      to: 5,
    }],
    options: {
      src: '/assets/book_data/radio.mp3',
      type: 'bg',
      playOnLoad: true,
      loop: true,
    },
  },
];
